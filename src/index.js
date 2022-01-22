import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux' // react-redux 세팅
import { combineReducers, createStore } from 'redux'; // redux 세팅


let alert초기값 = true;
function reducer2(state = alert초기값, action){
  if (action.type === 'alert닫기'){
    state = false;
    return state;
  } else {
  return state
  }
}


let 초기값 = [
  {id:1, name:'White and Black', quan:1}, 
]
function reducer(state = 초기값, action){
  if (action.type === '항목추가'){
    
    let found = state.findIndex((a)=>{return a.id === action.data.id }) // 장바구니에서 같은 데이터를 찾는다.

    if (found >= 0){
      let copy = [...state];
      copy[found].quan++;
      return copy;
    }
    let copy = [...state];
    copy.push(action.data);
    return copy;
  }



  if (action.type === 'plus'){ 
    let copy = [...state]; // 복사본 생성
    if ( copy[action.data].quan <= 8 ){
    copy[action.data].quan++; // 복사본에 수량 1 증가
    }
    return copy // 반환
  } 
  else if (action.type === 'minus'){
    let copy = [...state]; // 복사본 생성
    if ( copy[action.data].quan >= 1  ){
      copy[action.data].quan--; // 복사본에 수량 1 증감
    }
    return copy // 반환
  }   
  else {
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
