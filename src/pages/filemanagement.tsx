import React from "react";
import Sidebar from "../component/layout/Sidebar";
import { useGlobalContext } from "../context/AppProvider";

type Props = {};

const Filemanagement = (props: Props) => {
  const {
    state: { sidebarContent },
  } = useGlobalContext();
  return (
    <Sidebar>
      <div>
        <div>
          <h1>{sidebarContent["file"].title}</h1>
          {sidebarContent["file"].opening?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div>
          <h2>Tambahkan data baru</h2>
          <p>
            Penjadwalan aktivitas transaksi dilakukan dengan satuan harian,
            bukan satuan item barang. Meski kategori menjadi standar, harga
            satuan harian bisa disesuaikan
          </p>
          <div>
            <ul className=" list-disc list-inside">
              <li>Formaly</li>
              <li>Masukkan Nama </li>
              <li>Pilih Avatar</li>
            </ul>
          </div>
          <p>
            Semua data akan disimpan sementara didalam browser. Setelah
            pemakaian data harus disimpan kedalam hardisk, atau data akan
            dihapus dari browser. Ini sengaja dilakukan agar semua data berada
            dalam kendali Anda.
          </p>
        </div>
      </div>
    </Sidebar>
  );
};

export default Filemanagement;
