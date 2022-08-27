import React, { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Image, Button } from 'react-bootstrap';
import { updateToCart, removeFromCart } from "../../lib/actions";

export const Cart = () => (
    <Container>
        <Table responsive='sm'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Libellé</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Somme</th>
                </tr>
            </thead>
            <Items />
        </Table>
    </Container>
)

const Items = ()=> {
    const items = useSelector(state => state.items);
    return(
        <>
            { items.map((item, index) => <Content key={index} item={item}/>) }
        </>
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
        <tbody>
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
        </tbody>
    )
}