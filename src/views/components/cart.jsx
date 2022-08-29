import React, { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Image, Button } from 'react-bootstrap';
import { updateToCart, removeFromCart } from "../../lib/actions";
import { Link } from "react-router-dom";
import { v4 } from 'uuid';

export const Cart = () => {
    const items = useSelector(state => state.items);
    let total = 0;
    return (
        <Container>
            <Table responsive='sm'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Libellé</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Sous total</th>
                        <th style={{ border: 'none', paddingLeft: '10px' }} width='0.5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, index) => {
                        total += item.details.price * item.quantity;
                        return <Content key={index} item={item}/>
                    }) }
                </tbody>
                <tfoot>
                    <tr>
                        <Colspan />
                        <td style={{ border: 'none', fontSize: '18px', color: 'grey' }}>Total € { total.toFixed(2) } 
                        </td>
                        <td style={{ border: 'none'}}>
                            <Link to='#'>
                                <Button variant="primary">
                                    Confirmer
                                </Button>
                            </Link>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    )
}

const Content = ({ item }) => {
    const [qty, setQty] = useState(item.quantity);
    const dispatch = useDispatch();
    const update = (action)=> {
        if (action === 'decrement') setQty(qty>1 ? qty-1 : qty);
        if (action === 'increment') setQty(qty+1);
    }
    const remove = ()=> {
        dispatch(removeFromCart(item.id));
    }
    useEffect(()=>{
        dispatch(updateToCart(item.id, qty));
    }, [dispatch, qty, item.id]);
    return(
        <tr>
            <td>
                <Image src={`assets/${item.details.category}/${item.details.image}`} 
                height={30}/>
            </td>
            <td>{ item.details.name }</td>
            <td>{ item.details.price }/{ item.details.unit }</td>
            <td>
                <Button variant="secondary" onClick={()=>update('decrement')}> - </Button>
                    <span className="mx-3">
                        { qty }
                    </span> 
                <Button variant="secondary" onClick={()=>update('increment')}> + </Button>
            </td>
            <td>€ { (item.details.price * item.quantity).toFixed(2) }</td>
            <td style={{ border: 'none', color: '#f00' }}>
                <Button variant="#" onClick={()=>remove()}>
                    <FontAwesomeIcon icon={ faTrash } style={{ color: '#f00' }}/>
                </Button>
            </td>
        </tr>
    )
}

const Colspan = ()=> {
    const tabs = []
    for (let i = 0; i < 4; i++)
        tabs.push(<td key={v4()} style={{ border: 'none'}}></td>);
    return (
        tabs
    );
}