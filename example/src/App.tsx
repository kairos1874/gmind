import React from 'react'
import './App.css'

import { Designer } from 'gmind'
import 'gmind/dist/index.css'

const App = () => {
  return (
    <div>
      <div id="text" style={{ width: 500, height: 400, border: '1px solid #000' }}>
        深圳市华云中盛科技股份有限公司，shen zhen shi hua yunzhongshengkejigufen youxian gongsi，深圳市华云中盛科技股份有限公司aabbfjdlkfldsjfldsjfldjfljdlafjldsjflkdjflkdsjfldfjdljaabbfjdlkfldsjfldsjfldjfljdlafjldsjflkdjflkdsjfldfjdlj，shen zhen shi hua yunzhongshengkejigufen youxian gongsi，深圳市华云中盛科技股份有限公司，shen zhen shi hua yunzhongshengkejigufen youxian gongsi
      </div>
      <div className="container">
        <Designer />
      </div>
    </div>
  )
}

export default App
