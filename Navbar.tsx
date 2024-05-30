'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full top-0 z-30 transition-all duration-300 ease-in">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a className="flex items-center font-bold text-lg" href="#">
          <Image src="/assets/img/logo.png" alt="Logo" width={15} height={15} className="inline-block align-text-top mr-2" />
          <span className="text-[#4DD553]">UMKM </span> GEBANG PUTIH
        </a>
        <button className="lg:hidden" type="button" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classNames("lg:flex lg:items-center lg:ml-auto", { "hidden": !isOpen })} id="navbarNavDropdown">
          <ul className="flex flex-col lg:flex-row items-center lg:mx-auto space-y-4 lg:space-y-0 lg:space-x-4">
            <li className="nav-item mx-2">
              <a className="nav-link font-bold text-sm text-[#4DD553]" aria-current="page" href="index.html">Beranda</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-sm text-[#4DD553]" href="umkm.html">UMKM</a>
            </li>
            <li className="relative inline-flex items-center">
              <button className="but-semua font-medium text-sm text-[#1E1E1E] bg-transparent border-none" type="button" onClick={() => setIsOpen(!isOpen)}>Semua Kategori</button>
              <ul className="absolute hidden text-gray-700 pt-1">
                <li><a className="dropdown-item block px-4 py-2" href="#">Makanan</a></li>
                <li><a className="dropdown-item block px-4 py-2" href="#">Minuman</a></li>
              </ul>
              <input type="text" className="form-control search font-normal text-sm border border-gray-300 rounded px-2 py-1 ml-2" aria-label="Text input with dropdown button" placeholder="cari produk, toko" />
              <button className="btn btn-outline-secondary cari font-medium text-sm border border-gray-300 rounded px-2 py-1 ml-2" type="button" id="button-addon2">Cari</button>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="#login" className="button-secondary flex items-center font-normal text-sm mr-2 text-[#1E1E1E] border-none bg-transparent w-[96px] h-[38px]">
              <Image src="/assets/img/box-arrow-in-right 1.png" alt="Login Icon" width={20} height={20} className="inline-block align-text-top mr-2" />
              Login
            </a>
            <a href="registrasi/" className="button-primary flex items-center justify-center font-bold text-sm text-white bg-[#4DD553] border-none w-[96px] h-[38px] rounded">DAFTAR</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
