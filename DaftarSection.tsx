import React from 'react';

const DaftarSection = () => {
  return (
    <section id="daftar" className="h-[40vh] w-full bg-no-repeat bg-cover mb-5" style={{ backgroundImage: "url('/assets/img/ceri.jpg')" }}>
      <div className="container mx-auto h-full">
        <div className="row w-full h-full">
          <div className="col-md-5 flex items-center">
            <a href="registrasi/">
              <button className="w-[282px] h-[76px] bg-[#E5FFE6] text-[#262626] rounded-[50px] text-[24px] font-extrabold mt-[24%] ml-[15%] border-none">DAFTARKAN UMKM!</button>
            </a>
          </div>
          <div className="col-md-7 text-center flex flex-col justify-center">
            <h4 className="text-[50px] font-extrabold text-white mt-[11%]">DAFTAR UMKM!</h4>
            <p className="text-[20px] font-bold text-white mt-2 mb-[11%]">Daftarkan UMKM anda untuk mendapatkan pelanggan dan bantuan promosi agar usaha anda dapat dikenal oleh banyak orang</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaftarSection;
