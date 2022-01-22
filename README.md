# Shoes-shop
React, Redux 학습을 위한 간단한 신발 쇼핑몰 제작.
<br>

## 동작화면
<details markdown="1">
<summary>동작화면</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649352-1b5d0c50-13d7-4f23-a3fc-76dd80a616e8.gif' width=100% height=100% />
</details/>  
<br>  


                                                                                                       
## URL배포
[Shoes-shop](https://shoes1676-site.netlify.app/)
<br>  
<br>  

## 기술스택
- React
- Redux
<br>
<br>

## 주요 키워드
<details markdown="1">
<summary>상품주문</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649349-9355e741-0f20-4bcd-bf77-44ce9c7c3bb3.gif' width=50% height=50% /><br>   

</details/>
```
asd
```
                       
<details markdown="1">
<summary>CSSTransition</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649351-b1ec28df-c065-4b4c-b7d7-569ca57f302c.gif' width=50% height=50% /><br>

</details/>

<details markdown="1">
<summary>알림창(useEffect)</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649355-3232126c-b0c7-4c8c-98f3-f1def55d1401.gif' width=50% height=50% /><br>

</details/>
                       
<details markdown="1">
<summary>알림창(useState)</summary>
<img src='https://user-images.githubusercontent.com/63529753/150649356-25bc0ce4-515b-4eb5-8b87-cf28e358e392.gif' width=50% height=50% /><br>

</details/>
```
    let state = useSelector((state) => state) 
    let dispatch = useDispatch();

            {state.reducer2 === true ?
        <div className='my-alert'>
            <p>장바구니입니다.</p>
            <button onClick={()=>{dispatch({ type : 'alert닫기'})}}>닫기</button>
        </div> : null
        }


```
                       
                       


삼항연산자
bootstrap
usestate 상태관리
useeffect 알림창
상품 주문하기
뒤로가기
CSSTransition
상품추가시 이벤트 (리덕스)
