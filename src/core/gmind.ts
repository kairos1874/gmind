import G6 from '@antv/g6'

export default class Gmind extends G6.TreeGraph {
  constructor(option: any) {
    super(option);
  }

  getData() {
    console.log('hello world')
  }
}
