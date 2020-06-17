import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Gmind from './core/gmind'
import baseData from './mock/baseData'

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
        type: 'base-node'
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          stroke: '#A3B1BF'
        }
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
        getId: function getId(d: any) {
          return d.id
        },
        getHeight: function getHeight() {
          return 40
        },
        getWidth: function getWidth() {
          return 16
        },
        getVGap: function getVGap() {
          return 10
        },
        getHGap: function getHGap() {
          return 100
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
