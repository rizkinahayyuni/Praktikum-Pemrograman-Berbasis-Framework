import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Components.css';

class Belanja extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: this.props,
            insertProduk: {
                userId: props.id,
                id: 1,
                nama: this.props.nama,
                id_barang : this.props.id,
                harga: this.props.harga,
                image: this.props.image,
                total_qty: 0,
                total_harga: 0
            }
        }
    }

    handleIncrement = () => {
        this.setState({
            qty: this.state.insertProduk.total_qty += 1,
        })
        if (this.state.insertProduk.total_qty >= this.props.stok) {
            this.setState({
                qty: this.state.insertProduk.total_qty = this.props.stok
            })
        }
        this.handleTotal()
    }

    handleTotal = () => {
        this.setState({
            totalHarga: this.state.insertProduk.total_harga = this.props.harga * this.state.insertProduk.total_qty,
            id: this.state.insertProduk["id"] = new Date().getTime()
        })
    }

    handleDecrement = () => {
        this.setState({
            qty: this.state.insertProduk.total_qty -= 1,
        })
        if (this.state.insertProduk.total_qty <= 0) {
            this.setState({
                qty: this.state.insertProduk.total_qty = 0
            })
        }
        this.handleTotal()
    }

    handleChanged = (event) => {
        this.setState({
            total_qty: this.state.insertProduk["total_qty"] = event.target.value,
        })
        this.handleTotal()
    }

    handleSimpan = () => {
        if (this.state.insertProduk.total_qty <= 0) {
            alert("Masukkan Jumlah Pesanan anda ");
            this.handleDecrement()
        }
        else if (this.state.insertProduk.total_qty > this.props.stok) {
            alert("Pesanan Anda Melebihi Stok Yang Ada");
            this.handleIncrement()
        }
        else if (this.state.insertProduk.total_qty != 0 && this.state.insertProduk.total_qty <= this.props.stok) {
            fetch("http://localhost:3002/keranjang", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state.insertProduk)
            }).then(response => {
                if (response.ok) {
                    alert("Item Masuk Ke Keranjang")
                    this.setState({
                        total_qty: this.state.insertProduk["total_qty"] = 0
                    })
                    this.handleTotal()
                    return response.json()
                }
                else {
                    alert(response.statusText)
                }
            })
        }
    }

    render() {
        return (
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + '/images/' + this.props.image} alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">{this.props.nama}</h5>
                            Rp {this.props.harga}
                            <br />
                            Stok : {this.props.stok}
                            <br /><br />
                        </div>
                        <div class="text-center">
                            <a class="btn btn-danger mt-auto" onClick={this.handleDecrement}>-</a>
                            <small>
                                &nbsp; Jumlah : {this.state.insertProduk.total_qty} &nbsp;
                            </small>
                            <a class="btn btn-success mt-auto" onClick={this.handleIncrement}>+</a>
                        </div>
                        <div class="text-center">
                            <br />
                            <h6>Total : Rp {this.state.insertProduk.total_harga}</h6>
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" type="submit" onClick={this.handleSimpan}>Beli</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Belanja;