import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './Detail.css'
import data from './data'
import {Nav} from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group' 
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'

function Detail(props) {
    let state = useSelector((state) => state) // 
    let dispatch = useDispatch();

    let {id} = useParams(); // url 값을 id 변수로 저장.
    let navigate = useNavigate(); // url을 변경하는 함수 반환
    let [shoes, useShoes] = useState(data);
    let [alert, usealert] = useState(true); // 알림창
    let [tab, usetab] = useState(0); // 탭
    let [tabswitch, usetabswitch] = useState(false);

    useEffect(() => {
        let 타이머 = setTimeout(() => {
            usealert(false)
        }, 2000);
        return() => {
            clearTimeout(타이머)
        }
    });

    return (
        <>  <div className="container">
            {
                alert === true
                    ? (<h5 className='my-alert'>9개까지 구입 가능합니다.</h5>)
                    : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={'https://codingapple1.github.io/shop/shoes' + (
                            id
                        ) + '.jpg'}
                        width="100%"/>
                </div>
                <div className='col-md-6 mt-4'>
                    <h4 className='pt-5'>{shoes[id-1].title}</h4>
                    <p>{shoes[id-1].content}</p>
                    <p>{shoes[id-1].price}</p>
                    <button className='btn btn-danger' onClick={()=>{
                        dispatch({type : '항목추가', data : {id:shoes[id].id, name:shoes[id-1].title, quan:1}})
                    }}>주문하기</button>
                    <button
                        className='btn btn-danger'
                        onClick={() => {
                            navigate(-1); // 직전 페이지로 이동
                        }}>뒤로가기</button>
                </div>
            </div>

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
        </div>
    </>
    )
}
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

export default Detail
