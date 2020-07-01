import G6 from '@antv/g6'
import { colorPreset } from '../config/palette'

G6.registerEdge('curveline', {
  itemType: 'edge',
  draw: function draw(cfg: any, group) {
    const { startPoint, endPoint, target } = cfg
    const targetModel = target.getModel()

    const controlPoint1 = {
      x: startPoint.x + (endPoint.x - startPoint.x) / 3,
      y: endPoint.y
    }

    // const controlPoint2 = {
    //   x: startPoint.x + ((endPoint.x - startPoint.x) / 3) * 2,
    //   y: endPoint.y
    // }

    // const path = [
    //   ['M', startPoint.x + 10, startPoint.y],
    //   ['Q', controlPoint1.x, controlPoint1.y, endPoint.x, endPoint.y]
    // ]

    const offset = endPoint.y - startPoint.y > 0 ? -2 : 2
    // let offset: number
    //
    // if (endPoint.y - startPoint.y > 2) {
    //   offset = -2
    // } else if (endPoint.y - startPoint.y < -2) {
    //   offset = 2
    // } else {
    //   offset = 0
    // }

    if (endPoint.y - startPoint.y > 2 || endPoint.y - startPoint.y < -2) {
      // @ts-ignore
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startPoint.x + 10, startPoint.y],
            ['Q', controlPoint1.x, controlPoint1.y, endPoint.x, endPoint.y],
            ['L', endPoint.x, endPoint.y + offset],
            [
              'Q',
              controlPoint1.x,
              controlPoint1.y + offset,
              startPoint.x + 18,
              startPoint.y
            ],
            ['Z']
          ],
          lineWidth: 0,
          fill: colorPreset.get(targetModel.topicIndex % 6)
        },
        name: 'in-fan-shape'
      })
    } else {
      // @ts-ignore
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startPoint.x + 10, startPoint.y - 1],
            ['L', endPoint.x, endPoint.y - 1],
            ['L', endPoint.x, endPoint.y + 1],
            ['L', startPoint.x + 10, startPoint.y + 1],
            ['Z']
          ],
          lineWidth: 0,
          fill: colorPreset.get(targetModel.topicIndex % 6)
        },
        name: 'in-fan-shape'
      })
    }

    // @ts-ignore
    // return group.addShape('path', {
    //   attrs: {
    //     path,
    //     stroke: colorPreset.get(targetModel.topicIndex % 6),
    //     lineWidth: 2,
    //     endArrow: false
    //   },
    //   name: 'path-shape'
    // })
  }
})
