import React from 'react'



const Pronoun = () => 
{
    return (
        <div className="pronoun">
             <div className="tm-page-container mx-auto">
                <header className="tm-header text-center">
                    <h1 className="tm-title text-uppercase">PRONOUN</h1>
                    <p className="tm-primary-color">(KATA GANTI)</p>
                </header>


                <section className="tm-section">
      <nav className="tm-nav">
        <ul>
          <li className="active">
            <a href="/materi"><span className="tm-nav-deco"></span>HOME</a>
          </li>
        </ul>
      </nav>
      <div className="tm-content-container">
        <figure className="mb-0">
          <img src="./images/pronoun.jpg" alt="Image" className="img-fluid tm-img" />
        </figure>
        <div className="tm-content">
          <h2 className="tm-page-title">PRONOUN (KATA GANTI)</h2>
          <p className="mb-4">
            Apa itu pronouns? Pronouns (kata ganti dalam bahasa inggris) adalah kata yang digunakan untuk menggantikan kata benda (nouns) dengan tujuan untuk menghindari pengulangan kata-kata yang bersifat terus-menerus.
          </p>
          <p>
            Pronoun yang umum digunakan adalah I, me, we, they, you, he, she, it, yours, himself, ourselves, its, my, that, this, those, us, who dan whom. Contoh kalimatnya: “<b>I</b> like to watch TV, but <b>she</b> does not."
          </p><br/>
		  <h3>Contoh Kalimat</h3>
		  <p>Contoh kalimat pronouns adalah :</p>
		  <ul>
			<li>Jeremy is a student, <b>he</b> plays soccer very well. (Jeremy adalah seorang murid, dia bermain sepak bola dengan baik).</li>
			<li>I visit my grandparents, <b>they</b> are at home. (Aku mengunjungi kakek nenekku, mereka berada di rumah).</li>
			<li><b>He</b> who admires you so much has passed away. (Dia yang sangat mengagumimu telah meninggal dunia.)</li>
	</ul>
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
        </div>
    )
}

export default Pronoun