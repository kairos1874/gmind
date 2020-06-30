// 树形结构的 map 方法
// @ts-ignore
// import _get from 'lodash/get'

function mapTree(
  treeData: any,
  mapCallback: any,
  parentDepth: number = -1,
  serialIndex: number = 0,
  parentTopicIndex: number = -1
) {
  const { children, ...rest } = treeData
  let topicIndex: number = parentTopicIndex
  if (parentDepth < 0) {
    topicIndex = -1
  } else if (parentDepth === 0) {
    topicIndex = serialIndex
  } else {
    topicIndex = parentTopicIndex
  }
  const target: any = {
    depth: parentDepth + 1, // 深度
    serialIndex, // 同级的 index
    topicIndex,
    ...mapCallback(rest) // map 的回调
  }

  if (children && Array.isArray(children) && children.length > 0) {
    target.children = []
    children.forEach((item, index: number) => {
      target.children.push(
        mapTree(item, mapCallback, parentDepth + 1, index, topicIndex)
      )
    })
  }
  return target
}

export default mapTree
