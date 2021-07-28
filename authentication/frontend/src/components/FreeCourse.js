import React from 'react'


const FreeCourse = () => {
    return (
        <div className="free_course">
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
             </div> 

             <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                            
                                <a href="#" className="logo">Hati English Course</a>
                            
                                <ul class="nav">
                                    <li class="scroll-to-section"><a href="/dashboard" class="active">Home</a></li>
                                    <li class="scroll-to-section"><a href="/dashboard">Contact</a></li>
                                    <li class="scroll-to-section"><a href="/login">Login</a></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a> 
                            </nav>
                        </div>
                    </div>
                </div>
                </header> 

                <div className="welcome-area" id="welcome">
                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div class="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <h1>This is free course <strong>for you</strong></h1>
                                <p>Berikut ini adalah materi yang dapat diakses secara gratis untuk Anda yang tidak tergabung sebagai member Hati English Course.</p>
                                <a href="#course1" class="main-button-slider">Lihat Selanjutnya</a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                <img src="./images/unnamed.jpg" className="rounded img-fluid d-block mx-auto" alt="First Vector Graphic"/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <section class="section" id="course1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <img src="./images/English.jpg" class="rounded img-fluid d-block mx-auto" alt="App"/>
                            </div>
                            <div class="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                                <div class="left-heading">
                                <br/>
                                    <h5>Dasar-Dasar Belajar Bahasa Inggris yang Harus Kamu Pahami</h5>
                                </div>
                                <div class="left-text">
                                    <p>Segala sesuatu harus dimulai dari dasar, termasuk dalam belajar Bahasa Inggris. Jika kamu mengetahui dan memahami dasar-dasar Bahasa Inggris maka akan lebih mudah untuk mempelajari bentuk kalimat yang lebih kompleks. Mulai dari mempelajari bentuk kata dasar, kalimat, cara pelafalan, dan cara penulisan. Bila kamu sudah memahami dasar-dasar tersebut, akan lebih mudah untuk memahami materi selanjutnya.</p>
                                    <br/><br/>
                                    <a href="/course_dasar" class="main-button">Pelajari Lebih Lanjut</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="hr"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <br/>
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <p class="copyright" text-align="center">Copyright &copy; 2021. HATI ENGLISH COURSES. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}

export default FreeCourse