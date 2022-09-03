import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { resetFromCart } from "../../lib/actions";
import { userProfilContext } from "../../lib/userProfilContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem, Button, NavLink } from "react-bootstrap";

export const Confirm = ()=> {
    const userProfil = useContext(userProfilContext);
    const dispatch = useDispatch();
    const reset = ()=> {
        dispatch(resetFromCart());
    }
    return (
        <>
            <div className="jumbotron text-center">
                <h1 className="display-3">Merci!</h1>
                <hr />
                <p className="lead">
                    <strong>Your order is on its way to your home</strong>
                    <br/><br/>
                    <Link to="/" onClick={()=>reset()}>
                        <Button variant="primary" sm>
                            Continue to homepage
                        </Button>
                    </Link>
                </p>
                <br/>
                { userProfil.address &&
                    <Nav as='ul' className="justify-content-center mb-3">
                        <NavItem as="li">
                            <NavLink>
                                {(userProfil.lastName).toUpperCase()} <tt></tt>
                                {userProfil.firstName}
                            </NavLink>
                        </NavItem>
                        <NavItem as="li"><NavLink>{ userProfil.address}</NavLink></NavItem>
                        <NavItem as="li"><NavLink>{ userProfil.zipCode}</NavLink></NavItem>
                        <NavItem as="li"><NavLink>{ userProfil.city}</NavLink></NavItem>
                    </Nav>
                }
            </div>
            <FontAwesomeIcon icon={faTruckArrowRight} className="col-sm-12 fa-3x" style={{ color : 'gray' }}></FontAwesomeIcon>
        </>
    )
}