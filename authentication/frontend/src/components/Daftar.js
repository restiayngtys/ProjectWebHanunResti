import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Daftar =() => {
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[alert, setAlert] = useState('');
    const[error, setError] = useState('')

    const changeUsername = (e) => {
        //console.log(e.target.value)
        const value = e.target.value
        setUsername(value);
        setError('');
    }

    const changeEmail = (e) => {
        //console.log(e.target.value)
        const value = e.target.value
        setEmail(value);
        setError('');
    }
    
    const changePassword = (e) => {
        //console.log(e.target.value)
        const value = e.target.value
        setPassword(value);
        setError('');
    }

    const klikDaftar = () => {
        //console.log('Daftar Diklik')
        const data = {
            username: username,
            email: email,
            password: password
        }
        axios.post('http://localhost:3001/daftar', data)
        .then(result => {
            if(result){
                if(result.data){
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    setAlert(result.data.message)
                    setTimeout(() => {
                        setAlert('')
                    }, 2500)
                }
            }
            console.log(result.data)
        })
        .catch(e => {
            setError(e.response.data.message)
        })
    }

    return(
        <div style={{marginTop:"150px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
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
                                
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername}></input>
                                </div>
                                

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail}></input>
                                </div>
                                

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={changePassword}></input>
                                </div>
                                

                                <button className="btn btn-primary" onClick={klikDaftar} >Daftar</button>{'                '}
                                <Link to="/" className="btn btn-warning">
                                    Batal
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar