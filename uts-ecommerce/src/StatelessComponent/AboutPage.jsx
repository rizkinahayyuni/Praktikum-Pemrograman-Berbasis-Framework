import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components.css';
import rizkina from '../assets/rizkina.jpg';

const AboutPage = () => {
    return (
        <div>
            <section class="testimonials text-center bg-light">
                <div class="container">
                    <h2 class="mb-5">About Me</h2>
                    <div class="row">
                        <div class="col-lg-3"></div>
                        <div class="col-lg-6">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <img class="img-fluid rounded-circle mb-3" src={rizkina} alt="..." />
                                <h5>Rizkina Hayyuni Putri</h5>
                                <p class="font-weight-light mb-0">1941720008</p>
                                <p class="font-weight-light mb-0"><b>D4-Teknik Informatika</b></p>
                                <p class="font-weight-light mb-0"><b>Teknologi Informasi</b></p>
                                <p class="font-weight-light mb-0"><b>Politeknik Negeri Malang</b></p>
                            </div>
                        </div>
                        <div class="col-lg-3"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage;