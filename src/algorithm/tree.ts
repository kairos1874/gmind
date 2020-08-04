import { v4 as uuidv4 } from 'uuid'
import getWrapString from '../util/getWrapString'
// eslint-disable-next-line no-unused-vars
import { ISourceTreeData } from '../interface'

// 树形结构的 map 方法
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

function dressUpTree(sourceData: ISourceTreeData) {
  return mapTree(sourceData, function (item: any) {
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
}

export { mapTree, dressUpTree }
