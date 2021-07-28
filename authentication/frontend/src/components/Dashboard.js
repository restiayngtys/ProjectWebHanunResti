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
            <br></br>
            <h1>HALAMAN DASHBOARD</h1>
            <div className="tm-content-container">
                <figure className="mb-0">
                    <img src="./images/Daco_4451774.png" align="right" width="700px" height="700px" alt="Image" className="img-fluid tm-img" />
                </figure>
            </div>
            <br></br>
            <br></br>
            <h5>Selamat Datang di HATI ENGLISH COURSE</h5>
            <h6>Happy Learning!</h6>
            <a href="/materi" className="mt-3 btn btn-primary">Lihat Materi</a>
            <br></br>
            <a href="http://localhost:3000" className="mt-3 btn btn-primary">Kembali</a>
        </div>
    )
}

export default Dashboard
