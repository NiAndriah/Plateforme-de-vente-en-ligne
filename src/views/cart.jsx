import React from "react";
import { Container, Table } from 'react-bootstrap';

export const Cart = () => (
    <Container>
        <Table responsive='sm'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Libellé</th>
                    <th>Prix</th>
                    <th>Nombre</th>
                    <th>Somme</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Photo.png</td>
                    <td>Nom de produit</td>
                    <td>Prix par unité</td>
                    <td>Nombre de produit</td>
                    <td>Total (Prix * Nombre)</td>
                </tr>
            </tbody>
        </Table>
    </Container>
)