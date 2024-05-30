import React from 'react';

const Footer = () => {
  return (
    <footer className="d-flex align-items-center h-100">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mt-4 tentang-kami">
            <h5 className="text-uppercase font-weight-bold">Tentang Kami</h5>
            <p className="text-muted">
              UMKM Gebang Putih adalah platform yang bertujuan untuk membantu UMKM lokal dalam memasarkan produk mereka secara online.
            </p>
          </div>
          <div className="col-md-5 mt-4 kontak-kami">
            <h5 className="text-uppercase font-weight-bold">Kontak Kami</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i> Jalan Raya Gebang Putih, Surabaya</li>
              <li><i className="fas fa-phone-alt"></i> +62 123 4567 890</li>
              <li><i className="fas fa-envelope"></i> info@umkmgebangputih.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
