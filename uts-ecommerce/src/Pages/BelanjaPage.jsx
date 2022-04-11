import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Components.css';
import Belanja from './Belanja';

class BelanjaPage extends Component {
    state = {
        listRiceCooker: []
    }


    ambilDataDariApi = () => {
        fetch("http://localhost:3001/riceCooker?_sort=id&_order=asc")
            .then(response => response.json())
            .then(jsonGetDataApi => {
                this.setState({
                    listRiceCooker: jsonGetDataApi
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariApi();
    }

    render() {
        return (
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {this.state.listRiceCooker.map(riceCooker => {
                            return <Belanja key={riceCooker.id} id={riceCooker.id} nama={riceCooker.nama}
                                harga={riceCooker.harga} stok={riceCooker.stok} image={riceCooker.image}
                            />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default BelanjaPage;