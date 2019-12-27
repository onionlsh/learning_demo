/**
 * 路由对象
 */
export default class Route {
  path: string    
  component: any
  children?: Route[]
}