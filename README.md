# Shoes-shop
<br>

## URL배포
[Shoes-shop](https://shoes1676-site.netlify.app/)
<br> 
<br>

## 소개
- React, Rdeux 학습을 위한 간단한 신발 쇼핑몰 제작.
- bootstrap=을 활용한 화면 구성
- 메인페이지, 구입페이지, 장바구니 페이지 연결을 위한 라우터 구성,
- React의 hook, 삼항연산자 학습하여 컴포넌트의 state를 관리 하였다.
- 상품주문, 수량 이벤트는 Redux(reducer, useDispatch, useSelector)를 학습하여 적용하였다.

<br>  
<br>  

## 동작화면
<details markdown="1">
<summary>동작화면</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649352-1b5d0c50-13d7-4f23-a3fc-76dd80a616e8.gif' width=100% height=100% /><br>
</details/>  
<br>

```
문서구조
├── component
│   ├── Cart.js   // 장바구니
│   ├── data.js   // 신발데이터
│   ├── Detail.css   
│   ├── Detail.js   //주문페이지
│   └── Main.js   // 메인페이지
├─ App.css
├─ App.js   // 라우터 관리
├─ index.css
├─ index.js   // redux 상태 관리
├─ README.md
```                                                                                         
 
<br>  

## 기술스택
- React
- Redux
<br>
<br>

## 주요 사항
- Redux 상태관리
- Route
- CSSTransition
- hook  
<br>  

                       
<details markdown="1">
<summary>CSSTransition</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649351-b1ec28df-c065-4b4c-b7d7-569ca57f302c.gif' width=50% height=50% /><br>
- 부드러운 화면전환을 위해 탭메뉴를 CSSTransition 애니메이션을 활용하였습니다.<br>
- tabswitch state를 선언하여 1번탭, 2번탭을 누를 시 해당탭으로 이동할 수 있도록 처리하였습니다.
</details/><br>

```
<Nav className='mt-5' variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{usetabswitch(false); usetab(0)}}>Cart</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{usetabswitch(false); usetab(1)}}>Option</Nav.Link>
    </Nav.Item>
</Nav>

<CSSTransition in={tabswitch} classNames='wow' timeout={500}>
    <TabContent tab={tab} usetabswitch={usetabswitch}/>
</CSSTransition>

    

// 탭
function TabContent(props){
    useEffect(()=>{
        props.usetabswitch(true); 
    })
    if (props.tab === 0){
        return <div>
            <Cart/>
        </div>
    } else if (props.tab === 1){
        return <div>준비중입니다.</div>
    }
}
```

<details markdown="1">
<summary>알림창(useEffect)</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649355-3232126c-b0c7-4c8c-98f3-f1def55d1401.gif' width=50% height=50% /><br>
- Cart페이지 이동 시 일정 시간 후 사라지게 하는 알림창.<br>

</details/><br>

```
    useEffect(() => {
        let 타이머 = setTimeout(() => {
            usealert(false)
        }, 2000);
        return() => {
            clearTimeout(타이머)
        }
    });

    return (
        <> <div className="container">
            {
                alert === true
                    ? (<h5 className='my-alert'>9개까지 구입 가능합니다.</h5>)
                    : null
            }
            </div>
        </>
    )

```
                       

---
작은 프로젝트이지만 props 뿐만 아니라 redux를 학습하며 적용 하였습니다. 

<details markdown="1">
<summary>상품주문</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649349-9355e741-0f20-4bcd-bf77-44ce9c7c3bb3.gif' width=50% height=50% /><br>   
- 상품주문 및, 수량 증가, 증감은 Redux 라이브러리를 활용하여
state 상태관리, 이동을 처리하였다.<br>
- reducer 함수로 상품 증가, 증감 이벤트 수정을 진행했다.<br>
- dispatch 함수로 상품 증가, 증감이 필요할 때 state 수정을 요청하여 진행했다.
</details/><br>
index.js 

```
import {Provider} from 'react-redux' // react-redux 세팅
import { combineReducers, createStore } from 'redux'; // redux 세팅

let 초기값 = [
  {id:1, name:'White and Black', quan:1}, 
  {id:2, name:'Red Knit', quan:1}, 
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

```
Cart.js

```
import { useSelector, useDispatch } from 'react-redux'; // react-redux 세팅
    let state = useSelector((state) => state)  
    let dispatch = useDispatch();

 {
    state.reducer.map((a, i)=>{
        return (
            <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td><button onClick={()=>{dispatch({ type : 'plus', data : a.id-1 })}}>+</button>
                    <button onClick={()=>{dispatch({ type : 'minus', data : a.id-1 })}}>-</button></td>
            </tr>
        )
    })
}
```

<details markdown="1">
<summary>장바구니 알림창</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649356-25bc0ce4-515b-4eb5-8b87-cf28e358e392.gif' width=50% height=50% /><br>
- 알림창을 켜고 끄는것을 true, false로 구분하여 Cart.js 페이지가 뜨면 알림창이 <br>true 상태인채로 뜨고, 닫기를 누르면
false 상태로 되어 알림창이 사라진다.<br>
- 삼항연산자로 구분하였다.
</details/><br>  
index.js

```
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

let store = createStore(combineReducers({reducer, reducer2}));

```
Cart.js
```
import { useSelector, useDispatch } from 'react-redux'; // react-redux 세팅

    -- redux 함수 불러오기 -- 
    let state = useSelector((state) => state) // 
    let dispatch = useDispatch();

    -- 삼항 연산자 --
    {state.reducer2 === true ?  
        <div className='my-alert'>
            <p>장바구니입니다.</p>
                <button onClick={()=>{dispatch({ type : 'alert닫기'})}}>닫기</button>
        </div> : null
    }


```

                       
                       


