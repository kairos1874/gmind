export interface IViewerProps {
  container: string | HTMLElement
  sourceData: any
}

export interface ISourceTreeData {
  name: string
  id?: string | number
  children?: ISourceTreeData
}
