import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import NewData from "./NewData";
import Register from "./Register";
import { renderHTML } from "../../../.cache/page-ssr/index";
import HTMLReactParser from "html-react-parser";

type Props = {};

const Homepage = (props: Props) => {
  const {
    state: { sidebarContent },
  } = useGlobalContext();
  const data =
    "Pilih <span>keluar</span> jika melakukan pembayaran, pilih <span>masuk</span>, jika menerima pembayaran";
  return (
    <div>
      <h1>{sidebarContent["start"].title}</h1>
      <div>
        {sidebarContent["start"].opening?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <Register />
      <NewData />
      <div>
        <h2>Edit Data</h2>
        <p>
          Anda bisa mengedit satu item data dan membuat, atau seluruh data dalam
          satu kategori。Kategori dibuat otomatis saat anda memasukkan data
          baru.
        </p>
        <div>
          <ul className=" list-disc list-inside">
            <li>Di main menu pilih 'Kalender'</li>
            <li>
              Dibagian bawah kalender Tekan tombol
              <FontAwesomeIcon className=" text-paid font-bold" icon={faEdit} />
              disebelah item yang akan diedit.
            </li>

            <li>
              Anda akan masuk kedaftar list item yang anda bisa edit. Pilih
              salah satu dengan menekan tombol 'Edit'
            </li>
            <li>
              Masukkan Total pembayaran untuk satukali transaksi. Total akan
              otomatis dipecah dalam satuan hari.
            </li>
            <li>{HTMLReactParser(data)}</li>
            <li>
              Pilih tanggal pembayaran, jika sudah dilunasi saat memasukkan
              penjadwalan. Tanggal yang dapat dipilih maksimal adalah sesuai
              tanggal yang diklik dalam kalender.
            </li>
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
