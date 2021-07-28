import axios from 'axios';
import React, { useState } from 'react';

const ResetPassword = (props) => {
    const [password, setPassword] = useState ('');
    const [errorPassword, setErrorPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState ('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState ('');
    const [alert, setAlert] = useState('');


    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if(!value) {
            setErrorPassword('Harap Isi Password Baru Anda!')
        } else {
            setErrorPassword('')
        }
    }

    const changeConfirmPassword =(e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if(!value) {
            setErrorConfirmPassword('Harap Isi Confirm Password Baru Anda!')
        } else if (password !== value) {
            setErrorConfirmPassword('Password Tidak Cocok!')
        }else {
            setErrorConfirmPassword('')
        }

    }

    const simpan = () => {
        const data ={
            password: password,
            token: props.match.params.token,

        }
        axios.put('http://localhost:3001/resetpassword', data)
        .then(res => {
            if(res) {
                setPassword('')
                setConfirmPassword('')
                setAlert('Password Telah Berhasil Diganti!')
                setTimeout(() => {
                    setAlert('')
                }, 2500)
            }
        })
    }

    return (
        <div style={{marginTop:"150px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                {
                                    alert && (
                                        <div className="alert alert-primary">
                                            {alert}
                                        </div>
                                    )
                                }
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input type="password" placeholder="Masukkan Password Baru Anda" className="form-control" value={password} onChange={changePassword} ></input>
                                    {
                                        errorPassword && (
                                            <p className="text-danger">{errorPassword}</p>
                                        )
                                    }
                                </div>
                                <br></br>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="Konfirmasi Password Baru Anda" className="form-control" value={confirmPassword} onChange={changeConfirmPassword}></input>
                                    {
                                        errorConfirmPassword && (
                                            <p className="text-danger">{errorConfirmPassword}</p>
                                        )
                                    }
                                </div>
                                <br></br>

                                <button className="btn btn-primary" onClick={simpan}>Reset Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword