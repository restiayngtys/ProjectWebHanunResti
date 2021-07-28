import React from 'react';


const Materi = () => 
{
    return (
        <div className="materi">

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
                     
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="/dashboard" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="/dashboard">Contact</a></li>
                            <li className="submenu">
                                <a href="javascript:;">Course</a>
                                <ul>
									<li><a href="#course1">Vocabulary</a></li>
									<li><a href="#course2">Tenses</a></li>
									<li><a href="#course3">Pronoun</a></li>
									<li><a href="#course4">To be</a></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section"><a href="http://localhost:3000">Logout</a></li>
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
                    <div className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1>This is courses from Hati English Course <strong>for you</strong></h1>
                        <p>Terima kasih telah bergabung menjadi member Hati English Course. Berikut berbagai courses yang dapat diakses sebagai member dari Hati English Course.</p>
                        <a href="#course1" className="main-button-slider">Lihat Selanjutnya</a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <img src="./images/unnamed.jpg" className="rounded img-fluid d-block mx-auto" alt="First Vector Graphic"/>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    <section className="section" id="course1">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="./images/vocab.gif" className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                    <div className="left-heading">
                        <h5>VOCABULARY (KOSA KATA)</h5>
                    </div>
                    <div className="left-text">
                        <p><b>Vocabulary</b> sangatlah banyak jumlahnya, jika kita harus mempelajari atau menghafal tiap kosakata maka akan menjadi kesulitan tersendiri, namun bukan berarti mustahil untuk dipelajari. Terdapat metode untuk mempelajari itu, salah satunya adalah dengan menggunakan metode Clustering.</p>
                        <br/><br/>
						<a href="/vocabulary" className="main-button">Pelajari Lebih Lanjut</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="hr"></div>
                </div>
            </div>
        </div>
    </section>

    <br/>
    <section class="section" id="course2">
        <div class="container">
            <div class="row">
                <div class="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                    <div class="left-heading">
                        <h5>TENSES</h5>
                    </div>
                    <p><b>Tenses</b> Tenses adalah sebuah kategori tata bahasa (grammar) yang menekankan pada penggunaan kata kerja (verb) yang dikaitkan dengan waktu penggunaannya.</p>
					<br/><br/>
					<a href="tenses" class="main-button">Pelajari Lebih Lanjut</a>
				</div>
                <div class="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src="./images/tenses1.jpg" class="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
            </div>
        </div>
    </section>

    
    <br/>
    <section class="section" id="course3">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="./images/pronoun.jpg" class="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div class="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                    <div class="left-heading">
                        <h5>PRONOUN (KATA GANTI)</h5>
                    </div>
                    <div class="left-text">
                        <p><b>Pronoun</b> merupakan sebuah kata yang di gunakan untuk menggantikan kata benda (noun) baik berupa nama orang, hewan, benda, atau pun tempat. Untuk penjelasan lebih lanjut bisa buka laman ini.</p>
                        <br/><br/>
						<a href="pronoun" class="main-button">Pelajari Lebih Lanjut</a>
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
    <section class="section" id="course4">
        <div class="container">
            <div class="row">
                <div class="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                    <div class="left-heading">
                        <h5>TO BE (KATA BANTU)</h5>
                    </div>
                    <p><b>To be</b> merupakan kata bantu kerja yang terdiri dari (am, is dan are) dimana masing-masing tobe memiliki pasangan dengan subjeknya (I, you, we, they, he, she, it). Untuk materi selengkapnya silahkan klik di bawah ini.</p>
					<br/><br/>
					<a href="tobe" class="main-button">Pelajari Lebih Lanjut</a>
				</div>
                <div class="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src="./images/to be.png" class="rounded img-fluid d-block mx-auto" alt="App"/>
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

export default Materi