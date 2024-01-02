<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import "@/utils/d3-hierarchy.js";
import { Ref, onMounted, ref } from "vue";

const chartRef: Ref<HTMLElement | undefined> = ref();
let myChart: echarts.ECharts;
defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  myChart = echarts.init(chartRef.value, { renderer: "svg" });
});

function run(rawData) {
  const dataWrap = prepareData(rawData);
  initChart(dataWrap.seriesData, dataWrap.maxDepth);
}
function prepareData(rawData) {
  const seriesData = [];
  let maxDepth = 0;
  function convert(source, basePath, depth) {
    if (source == null) {
      return;
    }
    if (maxDepth > 5) {
      return;
    }
    maxDepth = Math.max(depth, maxDepth);
    seriesData.push({
      id: basePath,
      value: source.$count,
      depth: depth,
      index: seriesData.length,
    });
    for (var key in source) {
      if (source.hasOwnProperty(key) && !key.match(/^\$/)) {
        var path = basePath + "." + key;
        convert(source[key], path, depth + 1);
      }
    }
  }
  convert(rawData, "option", 0);
  return {
    seriesData: seriesData,
    maxDepth: maxDepth,
  };
}
function initChart(seriesData, maxDepth) {
  var displayRoot = stratify();
  function stratify() {
    return d3
      .stratify()
      .parentId(function (d) {
        return d.id.substring(0, d.id.lastIndexOf("."));
      })(seriesData)
      .sum(function (d) {
        return d.value || 0;
      })
      .sort(function (a, b) {
        return b.value - a.value;
      });
  }
  function overallLayout(params, api) {
    var context = params.context;
    d3
      .pack()
      .size([api.getWidth() - 2, api.getHeight() - 2])
      .padding(8)(displayRoot);
    context.nodes = {};
    displayRoot.descendants().forEach(function (node, index) {
      context.nodes[node.id] = node;
    });
  }
  function renderItem(params, api) {
    var context = params.context;
    // Only do that layout once in each time `setOption` called.
    if (!context.layout) {
      context.layout = true;
      overallLayout(params, api);
    }
    var nodePath = api.value("id");
    var nodeValue = api.value("value");
    var node = context.nodes[nodePath];
    if (!node) {
      // Render nothing.
      return;
    }
    var isLeaf = !node.children || !node.children.length;
    var focus = new Uint32Array(
      node.descendants().map(function (node) {
        return node.data.index;
      })
    );
    var nodeName = isLeaf
      ? nodePath
          .slice(nodePath.lastIndexOf(".") + 1)
          .split(/(?=[A-Z][^A-Z])/g)
          .join("\n")
      : "";
    var z2 = api.value("depth") * 2;
    return (
      nodeName && {
        type: "circle",
        focus: focus,
        shape: {
          cx: node.x,
          cy: node.y,
          r: node.r,
        },
        transition: ["shape"],
        z2: z2,
        textContent: {
          type: "text",
          style: {
            // transition: isLeaf ? 'fontSize' : null,
            text: `${nodeName}\n${!isNaN(nodeValue) ? nodeValue : ""}`,
            width: node.r * 1.4,
            overflow: "truncate",
            fontSize: node.r / 3,
            fill: "#00E2FF",
            lineHeight: node.r / 2.5,
          },
          emphasis: {
            style: {
              overflow: null,
              fontSize: Math.max(node.r / 3, 12),
              lineHeight: node.r / 1.5,
            },
          },
        },
        textConfig: {
          position: "inside",
        },
        style: {
          fill: "rgba(0, 243, 255, 0.1)",
          stroke: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00F3FF",
              },
              {
                offset: 1,
                color: "#00E2FF",
              },
            ],
          },
          shadowColor: "#638bdd",
          shadowBlur: 10,
          shadowOffsetX: -5,
          shadowOffsetY: -5,
        },
        emphasis: {
          style: {
            fontSize: 12,
            shadowBlur: 20,
            shadowOffsetX: 3,
            shadowOffsetY: 5,
            shadowColor: "rgba(0,0,0,0.7)",
          },
        },
      }
    );
  }
  const option = {
    dataset: {
      source: seriesData,
    },
    visualMap: [
      {
        show: false,
        min: 0,
        max: maxDepth,
        dimension: "depth",
        inRange: {
          color: ["#006edd", "#e0ffff"],
        },
      },
    ],
    series: {
      type: "custom",
      renderItem: renderItem,
      coordinateSystem: "none",
      encode: {
        tooltip: "value",
        itemName: "id",
      },
    },
  };

  myChart.setOption(option);
}

defineExpose({ run });
</script>

<style lang="scss" scoped>
.children-circle {
  width: 350px;
  height: 300px;
}
</style>
