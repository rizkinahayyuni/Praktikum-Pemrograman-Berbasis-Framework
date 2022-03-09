import React, { Component } from "react";
import List from "../component/List";
import './ListMahasiswa.css';

class ListMahasiswa extends Component {
    state = {
        listMahasiswa : [],
        insertMahasiswa: {
            id: 1,
            nim: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState( {
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`,{method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahData = (event) => {
        let formInsrtMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsrtMahasiswa['id'] = timestamp;
        formInsrtMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsrtMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return(
            <div className="post-mahasiswa">
                <br></br>
                <h2>Daftar Mahasiswa</h2>
                <br></br>
                <h4>Tambah Data Mahasiswa</h4>
                <br></br>
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="nim" name="nim" onChange={this.handleTambahData}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahData}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahData}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">No. HP</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahData}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahData}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahData}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <br></br>
                <table class="table">
                    <tbody>
                    {
                        this.state.listMahasiswa.map(mahasiswa => {
                            return <List key={mahasiswa.id} nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} 
                            hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} 
                            hapusData={this.handleHapusMahasiswa} idMahasiswa={mahasiswa.id}/>
                        })
                    }
                    </tbody>
                </table>   
            </div>
        )
    }
}

export default ListMahasiswa;