import G6 from '@antv/g6'
// eslint-disable-next-line no-unused-vars
import { GraphOptions } from '@antv/g6/lib/interface/graph'
import '../shape/node'
import '../shape/edge'

export default class Gmind extends G6.TreeGraph {
  constructor(cfg: GraphOptions) {
    super({
      modes: {
        default: [
          {
            type: 'drag-canvas',
            enableOptimize: true
          },
          'zoom-canvas',
          'click-select',
          {
            type: 'brush-select',
            trigger: 'shift',
            includeEdges: false,
            // @ts-ignore
            brushStyle: {
              stroke: '#18a0fb',
              fill: '#18a0fb',
              fillOpacity: 0.2,
              lineWidth: 0.3
            }
          },
          // 展开收起
          {
            type: 'collapse-expand',
            trigger: 'click',
            onChange: (item, collapsed) => {
              // @ts-ignore
              const data = item.get('model').data
              data.collapsed = collapsed
              return true
            }
          }
        ]
      },
      defaultNode: {
        type: 'base-node',
        size: [200, 100]
      },
      defaultEdge: {
        type: 'curveline',
        style: {
          stroke: '#A3B1BF'
        }
      },
      layout: {
        type: 'mindmap',
        direction: 'LR',
        getHeight: function getHeight(d: { lines: any[] }) {
          if (d.lines.length > 0) {
            return 40 + (d.lines.length - 1) * 16
          }
          return 40
        },
        // 指定节点宽度
        getWidth: function getWidth() {
          return 50
        },
        // 指定节点之间的垂直间距
        getVGap: function getVGap() {
          return 5
        },
        // 指定节点之间的水平间距
        getHGap: function getHGap(d: { depth: any }) {
          const { depth } = d
          if (depth === 0) {
            return 140
          }
          return 100
        }
      },
      ...cfg
    })
  }
}
