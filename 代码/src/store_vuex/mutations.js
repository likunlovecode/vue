// import {SHOW_NAV,xx,xx} from './types';
import * as types from './types';
export default{
  [types.SHOW_FOOT]:(state,payload)=>{state.bFoot=true},
  [types.HIDE_FOOT]:(state,payload)=>{state.bFoot=false},
  [types.SHOW_NAV]:(state,payload)=>{state.bNav=true},
  [types.HIDE_NAV]:(state,payload)=>{state.bNav=false},
  [types.SHOW_LOADING]:(state,payload)=>{state.bLoading=true},
  [types.HIDE_LOADING]:(state,payload)=>{state.bLoading=false},
  [types.UPDATE_HOME]:(state,payload)=>{state.home=payload},
}