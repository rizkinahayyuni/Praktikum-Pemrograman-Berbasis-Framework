import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Components.css';
import Keranjang from './Keranjang';

class KeranjangPage extends Component {
    state = {
        listKeranjang: [],
        totalHarga: 0,
        nom: 0
    }

    ambilDataDariApi = () => {
        fetch("http://localhost:3002/keranjang?_sort=id&_order=asc")
            .then(response => response.json())
            .then(jsonGetDataApi => {
                this.setState({
                    listKeranjang: jsonGetDataApi
                })
            })
    }

    handleHapusData = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariApi()
            })
    }

    componentDidMount() {
        this.ambilDataDariApi();
    }

    render() {
        return (
            <section class="py-5 pt-0">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.listKeranjang.map(keranjang => {
                                    return (this.state.nom += 1,
                                        <Keranjang key={keranjang.userId}
                                            nama={keranjang.nama}
                                            nom={this.state.nom}
                                            harga={keranjang.harga}
                                            total_qty={keranjang.total_qty}
                                            total_harga={keranjang.total_harga}
                                        />
                                    )

                                })}
                                {this.state.listKeranjang.map(keranjang => {
                                    this.state.totalHarga += keranjang.total_harga
                                })}
                                <tr>
                                    <td colSpan="3" style={{ textAlign: "right" }}><b>Total</b></td>
                                    <td>Rp. {this.state.totalHarga}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default KeranjangPage;
