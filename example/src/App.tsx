import React from 'react'
import './App.css'
import baseData from './mock/baseData'

import { Viewer } from 'gmind'
import 'gmind/dist/index.css'

const App = () => {
  return (
    <div className="pageWrapper">
      <div className="container">
        <Viewer container="container" sourceData={baseData} />
      </div>
    </div>
  )
}

export default App
