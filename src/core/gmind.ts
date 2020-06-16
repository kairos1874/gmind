import G6 from '@antv/g6'
import { GraphOptions } from '@antv/g6/lib/interface/graph'

export default class Gmind extends G6.TreeGraph {
  // eslint-disable-next-line no-useless-constructor
  constructor(cfg: GraphOptions) {
    super(cfg)
  }

  getData() {
    console.log('hello world')
  }
}
