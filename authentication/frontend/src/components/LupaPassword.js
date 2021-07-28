import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import axios from 'axios'; 

const LupaPassword = () => {

    const[email, setEmail] = useState('');
    const[error, setError] = useState('');
    const[alert, setAlert] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value)
        setError('')
    }

    const klikKirim = () => {
        if(!email) {
            setError('Email Wajib Diisi!');   
        } else {
            axios.put('http://localhost:3001/forgotpassword', { email: email })
            .then (res => {
                setEmail('')
                setAlert('Email Berhasil Terkirim, Silahkan Cek Email Anda!')
                setTimeout(() => {
                    setAlert('')
                }, 3000)
            })

        }
    }

    return (
        <div style={{marginTop:"150px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className ="card p-4">
                                {
                                    alert && (
                                        <div className="alert alert-primary">
                                            <p>{alert}</p>
                                        </div> 
                                    )        
                                }
                                {
                                    error && (
                                        <div className="alert alert-danger">
                                            <p>{error}</p>
                                        </div> 
                                    )         
                                }

                                <div class="card-body">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" placeholder="Masukkan Email" className="form-control" value={email} onChange={changeEmail}></input>
                                    </div>
                                    <br></br>

                                    <button className="btn btn-primary" onClick={klikKirim} >Kirim</button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default LupaPassword