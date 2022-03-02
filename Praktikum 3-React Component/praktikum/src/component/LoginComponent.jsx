import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './LoginComponent.css';

class LoginComponent extends Component {
    render () {
        return (
            <div className="container">
                <h3>Form Login</h3>
                <div className="inner">
                    <form>
                        <br></br>
                        <h2>Tugas Pertemuan</h2>
                        <h2>Ketiga</h2>
                        <br></br>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="email" className="form-control" placeholder="Masukkan Username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Masukkan Password Anda" />
                        </div>
                        <br></br>
                        <button type="submit" className="buttonlogin">Login</button>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="buttoncancle">Cancle</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginComponent;