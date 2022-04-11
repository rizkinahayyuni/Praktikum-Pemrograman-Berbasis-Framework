import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Components.css';

const Keranjang = (props) => {
    return (
        <tr>
            <td>{props.nama}</td>
            <td>Rp. {props.harga}</td>
            <td>{props.total_qty}</td>
            <td>Rp. {props.total_harga}</td>
        </tr>
    );
}

export default Keranjang;