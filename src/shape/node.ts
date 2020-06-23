import G6 from '@antv/g6'
// import { ellipsisString } from '../util/util'
// import getWrapString from '../util/getWrapString'

G6.registerNode(
  'base-node',
  {
    options: {
      style: {},
      stateStyles: {
        hover: {},
        selected: {}
      }
    },
    draw(cfg, group) {
      // @ts-ignore
      const { nodeType, wrapString, lines } = cfg
      console.log(nodeType)

      // @ts-ignore
      const keyShape = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          radius: 5,
          lineWidth: 2,
          fontSize: 12,
          opacity: 1,
          isNodeShape: true,
          cursor: 'pointer',
          stroke: '#fd6d5a',
          fill: '#ffffff',
          width: 180,
          height: 30 + (lines.length - 1) * 16
        }
      })

      // @ts-ignore
      group.addShape('text', {
        attrs: {
          textAlign: 'left',
          textBaseline: 'top',
          x: 8,
          y: 8,
          text: wrapString,
          fontSize: 14,
          cursor: 'pointer',
          isNodeShape: true,
          textColor: '#000',
          fill: '#000'
        }
      })

      return keyShape
    },
    getAnchorPoints: function getAnchorPoints() {
      return [
        [0, 0.5],
        [1, 0.5]
      ]
    }
  },
  'single-node'
)
