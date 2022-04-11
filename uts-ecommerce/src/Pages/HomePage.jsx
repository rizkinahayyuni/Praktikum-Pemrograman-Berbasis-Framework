import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles.css';

function HomePage() {
    return (
        <div>
            <header class="masthead">
                <div class="container position-relative">
                    <div class="row justify-content-center">
                        <div class="col-xl-6">
                            <div class="text-center text-white">
                                <h1 class="mb-5">Memasak Lebih Sehat dan Menyenangkan!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section class="features-icons bg-light text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex"><i class="bi-arrow-through-heart-fill m-auto text-primary"></i></div>
                                {/* <h3>Fully Responsive</h3> */}
                                <p class="lead mb-0">Pilih brand favoritmu</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex"><i class="bi-bag-heart-fill m-auto text-primary"></i></div>
                                {/* <h3>Bootstrap 5 Ready</h3> */}
                                <p class="lead mb-0">Tentukan produk sesuai kebutuhanmu</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex"><i class="bi-box2-heart-fill m-auto text-primary"></i></div>
                                {/* <h3>Easy to Use</h3> */}
                                <p class="lead mb-0">Dapatkan promo dan bonus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;