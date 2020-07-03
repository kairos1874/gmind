import React, { useEffect, useRef } from 'react'
import Gmind from './core/gmind'
// import baseData from './mock/baseData'
import baseData from './mock/data'
import mapTree from './util/mapTree'
import { v4 as uuidv4 } from 'uuid'
import getWrapString from './util/getWrapString'

import styles from './styles.module.css'
import './style/tooltip.css'

import './behavior/clickSelected'
import './shape/node'
import './shape/edge'

let graph: any = null

export const Designer = () => {
  const designerRef = useRef(null)
  // const designerDom = designerRef.current

  function bindEvents() {
    // graph.on('nodeselectchange', (e: any) => {
    //   const {
    //     selectedItems: { nodes }
    //   } = e
    //   console.log(nodes[0])
    //   debugger
    // })
  }

  useEffect(() => {
    // @ts-ignore
    graph = new Gmind({
      container: 'gmind-designer',
      // @ts-ignore
      width: designerRef.current.offsetWidth,
      // @ts-ignore
      height: designerRef.current.offsetHeight,
      modes: {
        default: [
          {
            type: 'drag-canvas',
            enableOptimize: true
          },
          'zoom-canvas',
          'click-select',
          // 框选
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
          }
          // 展开收起
          // {
          //   type: 'collapse-expand',
          //   trigger: 'click',
          //   onChange: (item, collapsed) => {
          //     // @ts-ignore
          //     const data = item.get('model').data
          //     data.collapsed = collapsed
          //     return true
          //   }
          // }
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
        direction: 'LR', // H / V / LR / RL / TB / BT
        // 指定节点 ID
        // getId: function getId() {
        //   return uuidv4()
        // },
        // 指定节点高度
        getHeight: function getHeight(d: { lines: any[] }) {
          if (d.lines.length > 0) {
            return 40 + (d.lines.length - 1) * 16
          }
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
          return 5
        },
        // 指定节点之间的水平间距
        getHGap: function getHGap(d: { depth: any }) {
          const { depth } = d
          if (depth === 0) {
            return 140
          }
          // debugger
          return 100
        }
      }
    })

    const targetData = mapTree(baseData, function (item: any) {
      return {
        ...item,
        id: uuidv4(),
        ...getWrapString(item.name, {
          'font-size': '14px',
          width: '160px',
          'word-wrap': 'break-word'
        })
      }
    })

    console.log(targetData)

    graph.data(targetData)
    graph.render()
    graph.fitView()
    graph.zoomTo(1, {
      x: 1600 / 2,
      y: 700 / 2
    })

    bindEvents()
  }, [])
  return (
    <div
      className={styles['gmind-designer']}
      id='gmind-designer'
      ref={designerRef}
    />
  )
}
