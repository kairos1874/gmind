import React, { FC, useEffect, useRef } from 'react'
import './App.css'
import data from './mock/baseData'

import Gmind, { dressUpTree } from 'gmind'
import 'gmind/dist/index.css'

const App: FC = () => {
  const panelRef = useRef(null)

  useEffect(() => {
    const graph = new Gmind({
      container: 'panel',
      // @ts-ignore
      width: panelRef.current.offsetWidth,
      // @ts-ignore
      height: panelRef.current.offsetHeight,
    })

    // @ts-ignore
    const targetData = dressUpTree(data)

    graph.data(targetData)
    graph.render()
    graph.fitView()
    graph.zoomTo(1, {
      // @ts-ignore
      x: panelRef.current.offsetWidth / 2,
      // @ts-ignore
      y: panelRef.current.offsetHeight / 2,
    })
  }, [])

  return (
    <div className="pageWrapper">
      <div className="container" id="panel" ref={panelRef} />
    </div>
  )
}

export default App
