import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import Register from "./Register";

type Props = {};

const Homepage = (props: Props) => {
  const { translate } = useGlobalContext();
  return (
    <div className=" col-span-9 w-full h-full p-3">
      <h2>{translate("titles", "start")}</h2>
      <p>
        Semua data akan disimpan sementara didalam browser. Setelah pemakaian
        data harus disimpan kedalam hardisk, atau data akan dihapus dari
        browser. Ini sengaja dilakukan agar semua data berada dalam kendali
        Anda.
      </p>
      <p>
        Anda bisa menghapus semua data dalam browser, tapi untuk data yang sudah
        didownload, harus anda hapus secara manual dari komputer atau ponsel
        anda.
      </p>
      <Register />
      <div>
        <h3>Tambahkan data baru</h3>
        <p>
          Penjadwalan aktivitas bisa menjangkau dua bulan dari tanggal pertama
          yang dipilih. Untuk sementara penjadwalan hanya bisa dilakukan untuk
          tahun 2023 dan tidak bisa menjadwalkan untuk bulan yang sudah lewat.
        </p>
        <div>
          <ul className=" list-disc list-inside">
            <li></li>
            <li>Masukkan Nama </li>
            <li>Pilih Avatar</li>
          </ul>
        </div>
        <p>
          Semua data akan disimpan sementara didalam browser. Setelah pemakaian
          data harus disimpan kedalam hardisk, atau data akan dihapus dari
          browser. Ini sengaja dilakukan agar semua data berada dalam kendali
          Anda.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
