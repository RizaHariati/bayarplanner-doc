import React from "react";

type Props = {};

const NewData = (props: Props) => {
  return (
    <div>
      <h2>Tambahkan data baru</h2>
      <p>
        Penjadwalan aktivitas transaksi dilakukan dengan&nbsp;
        <span className="font-bold">satuan harian</span> , bukan satuan item
        barang. Meski kategori menjadi standar, harga satuan harian bisa
        disesuaikan
      </p>
      <div>
        <ul className=" list-disc list-inside">
          <li>Pada main menu pilih Kalender</li>
          <li>
            Pilih tanggal penjadwalan di kalender. Pilih tanggal kegiatan akan
            dilakukan sesuai dengan jumlah total yang akan dibayarkan. Tanggal
            yang bisa dipilih maksimal untuk dua bulan.
          </li>
          <li>
            Masukkan Judul dan keterangan. Judul dan keterangan akan dijadikan
            satu kategori yang unik dan dapat digunakan lagi saat memasukkan
            item yang sama.
          </li>

          <li>
            Masukkan Satuan : jumlah uang yang dijadwalkan akan dterima/dibayar
            dalam satu hari. Satuan akan otomatis dibagi dengan jumlah hari dari
            tanggal yang dipilih.
          </li>
          <li>
            Masukkan Total pembayaran untuk satukali transaksi. Total akan
            otomatis dipecah dalam satuan hari.
          </li>
          <li>
            Pilih keluar jika melakukan pembayaran, pilih masuk, jika menerima
            pembayaran
          </li>
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
  );
};

export default NewData;
