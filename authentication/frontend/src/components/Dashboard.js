import React from 'react';
// import { Link } from 'react-router-dom';


const Dashboard = () => {
    // const token = localStorage.getItem('token')
    // if (!token) {
    //     return <Link to="/"></Link>
    // }
    // console.log('token', token)
    return (
        <div className="container">
            <h2>Halaman Dashboard</h2>
            <p>Selamat Datang di HATI ENGLISH COURSE</p>
            <span>Happy Learning!</span>
            <br/><br/>
            <a href="/materi" className="mt-3 btn btn-primary">Lihat Materi</a>
            <br></br>
            <a href="http://localhost:3000" className="mt-3 btn btn-primary">Kembali</a>
        </div>
    )
}

export default Dashboard