import React from "react";

const List = (props) => {
    return (
        <div className="mahasiswa">
            <div className="konten-mahasiswa">                
                <tr>
                    <th scope="col">NIM &emsp;&emsp;</th>
                    <td scope="col">{props.nim}</td>
                    <td scope="col">&emsp;</td>
                    <th scope="col">no.hp &emsp;&emsp;</th>
                    <td scope="col">{props.hp}</td>
                </tr>
                <tr>
                    <th scope="col">nama &emsp;&emsp;</th>
                    <td scope="col">{props.nama}</td>
                    <td scope="col">&emsp;</td>
                    <th scope="col">angkatan &emsp;&emsp;</th>
                    <td scope="col">{props.angkatan}</td>
                </tr>
                <tr>
                    <th scope="col">alamat &emsp;&emsp;</th>
                    <td scope="col">{props.alamat}</td>
                    <td scope="col">&emsp;</td>
                    <th scope="col">status &emsp;&emsp;</th>
                    <td scope="col">{props.status}</td>
                </tr>
                <tr>
                    
                </tr>
                <tr>
                    <th scope="col">action &emsp;&emsp;</th>
                    <td scope="col">
                        <button className="btn btn-sm btn-danger" onClick={() =>props.hapusData(props.idMahasiswa)}>Hapus</button>
                    </td>
                </tr>
                <tr><br></br></tr>
                        
            </div>
        </div>
    )
}

export default List;