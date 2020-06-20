import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Gmind from './core/gmind'
import baseData from './mock/baseData'
import { v4 as uuidv4 } from 'uuid'

import './shape/node'

// interface Props {
//  text: string
// }

export const Designer = () => {
  const designerRef = useRef(null)
  // const designerDom = designerRef.current

  useEffect(() => {
    const graph = new Gmind({
      container: 'gmind-designer',
      width: 1600,
      height: 700,
      modes: {
        default: ['drag-canvas', 'zoom-canvas']
      },
      defaultNode: {
        type: 'base-node',
        size: [200, 100]
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          stroke: '#A3B1BF'
        }
      },
      layout: {
        type: 'compactBox',
        direction: 'LR', // H / V / LR / RL / TB / BT
        // 指定节点 ID
        getId: function getId() {
          return uuidv4()
        },
        // 指定节点高度
        getHeight: function getHeight() {
          // debugger
          return 40
        },
        // 指定节点宽度
        getWidth: function getWidth() {
          // debugger
          return 50
        },
        // 指定节点之间的垂直间距
        getVGap: function getVGap() {
          // debugger
          return 0
        },
        // 指定节点之间的水平间距
        getHGap: function getHGap() {
          // debugger
          return 130
        }
      }
    })

    graph.data(baseData)
    graph.render()
    graph.fitView();
    graph.zoomTo(1, {
      x: 1600 / 2,
      y: 700 / 2
    })
  }, [])
  return (
    <div
      className={styles['gmind-designer']}
      id='gmind-designer'
      ref={designerRef}
    />
  )
}
