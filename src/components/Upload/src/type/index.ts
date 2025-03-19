export interface BasicProps {
  title?: string
  dataSource: () => Promise<any>
  columns: any[]
  pagination: object
  showPagination: boolean
}
