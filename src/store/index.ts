import { createStore } from 'vuex'
type modType ={
   [propName: string]: {} 
}
import { ILoginState } from './modules/login'
import {  ISRouter} from "./modules/router";
const modulesFiles = require.context('./modules', true, /\.ts$/)
const modules = modulesFiles.keys().reduce((modules:modType, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
interface IStore{
  login:ILoginState,
  router:ISRouter
}
export default createStore<IStore>({
  modules
})
