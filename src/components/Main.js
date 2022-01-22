/* eslint-disable */
import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import data from './data';

function Main() {
    
    let [shoes, useShoes] = useState(data) // 신발데이터
    
    return (
        <div>
            
            
            <Card className='background'>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </Card.Text>
                </Card.Body>
            </Card>


            <div className="container"> 
                <div className="row">
                    {
                        shoes.map((shoes, i) => {
                            return (
                                <Shoes_Card shoes={shoes} i={i} />
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}
function Shoes_Card(props){
    let navigate = useNavigate();

    return (
        <div className="col-md-4" >
        <img src={'https://codingapple1.github.io/shop/shoes'+ (props.shoes.id + 1) + '.jpg'}
            width="100%" onClick={()=>{navigate('/detail/' + (props.shoes.id + 1) )}} />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>

    )
}
export default Main
