import React, { useEffect, useRef, FC } from 'react'
import Gmind from './core/gmind'
import { v4 as uuidv4 } from 'uuid'
import getWrapString from './util/getWrapString'
import mapTree from './util/mapTree'
import { IViewerProps } from './interface'

// styles
import styles from './styles.module.css'
import './style/tooltip.css'

// import './behavior/clickSelected'
// shape
import './shape/node'
import './shape/edge'

let graph: any = null

const Viewer: FC<IViewerProps> = (props) => {
  const designerRef = useRef(null)
  const { container, sourceData } = props
  console.log(container)

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
      height: designerRef.current.offsetHeight
    })

    const targetData = mapTree(sourceData, function (item: any) {
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

export { Viewer, Gmind }
