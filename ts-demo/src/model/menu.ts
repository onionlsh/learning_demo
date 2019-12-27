/**
 * 菜单对象
 */
export default class Menu {
  code: number
  name: string
  path: string
  dropdown: boolean
  component: string
  icon?: string
  children?: Menu[]
}