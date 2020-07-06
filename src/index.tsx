import React, { useEffect, useRef, FC } from 'react'
import Gmind from './core/gmind'
import { dressUpTree } from './algorithm/tree'
import { IViewerProps } from './interface'

// styles
import styles from './styles.module.css'

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

    const targetData = dressUpTree(sourceData)

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
