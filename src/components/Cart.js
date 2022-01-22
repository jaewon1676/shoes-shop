import React from 'react';
import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'; // react-redux 세팅


function Cart() {

    let state = useSelector((state) => state) // 
    let dispatch = useDispatch();

    return (<div>

        <Table responsive="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
            </thead>
            <tbody>
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
            </tbody>
        </Table>
        {state.reducer2 === true ?
        <div className='my-alert'>
            <p>장바구니입니다.</p>
            <button onClick={()=>{dispatch({ type : 'alert닫기'})}}>닫기</button>
        </div> : null
        }
    </div>
    )
}

export default Cart;
