// 树形结构的 map 方法
function mapTree(treeData: any, mapCallback: any) {
  const { children, ...rest } = treeData

  const target: any = {
    ...mapCallback(rest)
  }

  if (children && Array.isArray(children) && children.length > 0) {
    target.children = []
    children.forEach((item) => {
      target.children.push(mapTree(item, mapCallback))
    })
  }
  return target
}

export default mapTree
