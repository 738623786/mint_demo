/**
 * Created by fjl on 2017/7/6.
 */
import NavConfig from './nav.config.json'
import Hello from '../Hello'

const registerRoute = (config) => {
  let routes = [];
  config.forEach(nav=>nav.list.forEach(
    page=>{
      var cmp = require('../components' + page.path);
      routes.push({
        path:page.path,
        name:page.name,
        component:cmp.default || cmp,
        meta:{
          title:page.title || page.name,
          description:page.description
        }})
    }
    ))
  return routes;
}

const routes = registerRoute(NavConfig);
routes.push({
  path:'/',
  name:'hello',
  component:Hello
})

console.log(routes);

export const Navs = NavConfig;
export default routes;
