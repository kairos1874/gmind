import G6 from '@antv/g6'
// import { ellipsisString } from '../util/util'
// import getWrapString from '../util/getWrapString'
import { colorPreset } from '../config/palette'

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
      const { wrapString, lines, topicIndex, children, depth } = cfg

      let keyShape: any
      if (depth === 0) {
        // @ts-ignore
        keyShape = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            radius: 6,
            lineWidth: 3,
            fontSize: 14,
            opacity: 1,
            isNodeShape: true,
            cursor: 'pointer',
            stroke: colorPreset.get(topicIndex % 6),
            fill: '#ffffff',
            width: 240,
            height: 60 + (lines.length - 1) * 16
          }
        })

        // @ts-ignore
        group.addShape('text', {
          attrs: {
            textAlign: 'center',
            textBaseline: 'top',
            x: 120,
            y: 18,
            text: wrapString,
            fontSize: 24,
            fontWeight: 'bold',
            cursor: 'pointer',
            isNodeShape: true,
            textColor: colorPreset.get(topicIndex % 6),
            fill: '#000'
          }
        })
      } else {
        // @ts-ignore
        keyShape = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            radius: 6,
            lineWidth: 2,
            fontSize: 12,
            opacity: 1,
            isNodeShape: true,
            cursor: 'pointer',
            stroke: colorPreset.get(topicIndex % 6),
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
      }

      if (children && children.length > 0 && depth !== 0) {
        // @ts-ignore
        group.addShape('path', {
          attrs: {
            path: [
              ['M', 180, (30 + (lines.length - 1) * 16) / 2],
              ['L', 193, (30 + (lines.length - 1) * 16) / 2]
            ],
            stroke: colorPreset.get(topicIndex % 6),
            lineWidth: 2,
            endArrow: false
          },
          name: 'path-branch'
        })
      }

      return keyShape
    },
    setState(name, value, item) {
      // @ts-ignore
      const group = item.getContainer()
      if (name === 'selected') {
        const rect = group.getChildByIndex(0)

        if (value) {
          // @ts-ignore
          rect.originStroke = rect.attrs.stroke
          rect.attr('stroke', '#22a4fb')
        } else {
          // @ts-ignore
          if (rect.originStroke) {
            // @ts-ignore
            rect.attr('stroke', rect.originStroke)
          }
        }
      }
    },
    getAnchorPoints: function getAnchorPoints(cfg: any) {
      // @ts-ignore
      const { depth } = cfg
      if (depth === 0) {
        return [
          [0.2, 0.5],
          [0.3, 0.5],
          [0.4, 0.5],
          [0.5, 0.5],
          [0.6, 0.5],
          [0.7, 0.5],
          [0.8, 0.5]
        ]
      }
      return [
        [0, 0.5],
        [1, 0.5]
      ]
    }
  },
  'single-node'
)
