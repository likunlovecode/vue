import {SHOW_FOOT,SHOW_NAV,SHOW_LOADING,HIDE_FOOT,HIDE_LOADING,HIDE_NAV} from './types'
export default{
  showFoot:({commit,state},payload)=>{commit(SHOW_FOOT)},
  hideFoot:({commit,state},payload)=>{commit(HIDE_FOOT)},
  showNav:({commit,state},payload)=>{commit(SHOW_NAV)},
  hideNav:({commit,state},payload)=>{commit(HIDE_NAV)},
  showLoading:({commit,state},payload)=>{commit(SHOW_LOADING)},
  hideLoading:({commit,state},payload)=>{commit(HIDE_LOADING)},
  upate_home:({commit,state},payload)=>{
    //处理 state.home 对比 payload里面的home ,一样就不发送commit
    commit('UPDATE_HOME',[...payload])//推荐给mutations的数据，是经过copy的
  }
}