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

    const path = [
      ['M', startPoint.x + 10, startPoint.y],
      ['Q', controlPoint1.x, controlPoint1.y, endPoint.x, endPoint.y]
    ]

    // @ts-ignore
    return group.addShape('path', {
      attrs: {
        path,
        stroke: colorPreset.get(targetModel.topicIndex % 6),
        lineWidth: 2,
        endArrow: false
      },
      name: 'path-shape'
    })
  }
})
