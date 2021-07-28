import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value);
        setError('');
    }

    const onChangePassword = (e) => {
        //console.log(e.target.value)
        const value = e.target.value
        setPassword(value);
        setError('');
    }

    const submitLogin = () => {
        //console.log('Submit Diklik')
        const data = {
            username: username,
            password: password,
        }
        //console.log(data)
        axios.post('http://localhost:3001/Login', data)
            .then(result => {
                if (result) {
                    localStorage.setItem('token', result.data.token)
                    setRedirect(true)
                }
            })
            .catch(e => {
                setError(e.response.data.message);
            })
    }

    return (
        <Fragment>
            {
                redirect && (
                    <Redirect to="/dashboard"></Redirect>
                )
            }
            <div style={{ marginTop: "150px" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                {
                                    error && (
                                        <div className="alert alert-danger">
                                            <p>{error}</p>
                                        </div>
                                    )
                                }

                                <div class="card-body">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}></input>
                                    </div>

                                    

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}></input>
                                    </div>

                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button className="btn btn-primary" onClick={submitLogin} >Login</button>
                                        </div>
                                    </div>

                                    <br></br>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to="/daftar" className="">
                                                Daftar Disini
                                            </Link>
                                        </div>
                                    </div>
                                    

                                    <br></br>
                                    <div className="row">
                                        <div className="col-md-6">
                                            Lupa Password ?
                                            <Link to="/lupa-password" className="">
                                                Klik Disini
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Login