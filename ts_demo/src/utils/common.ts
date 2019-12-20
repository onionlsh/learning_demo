import Route from "@/model/route";
import Menu from "@/model/menu";
import Layout from '@/components/Layout/index.vue';

/**
 * 动态构建路由对象
 * @param menuData {输入参数，为数组，每个数组中的元素类型为Menu}
 * @return routes {返回一个元素类型为Route的数组}
 */
export const filterAsyncRouter: (menuData: Menu[])=> Route[] = (menuData: Menu[]) => {
  let routes: Route[];
  menuData.forEach(menu => {
    let item: Route;
    item.path = menu.path;
    if(menu.children && menu.children.length > 0){
      item.component = Layout;
      item.children = filterAsyncRouter(menu.children);
    }else{
      item.component = loadView(menu.component);
    }
    routes.push(item);
  });
  return routes;
}

const loadView: (view:string)=> any = (view: string) =>{
  return () => import(`@/views/${view}.vue`)
}