import { PageDataType } from "../context/types.d";
export const invoicepage_en: PageDataType = {
  start: {
    title: "Register Nama",
    list: [
      { text: "Ketuk tombol username", img: "" },
      { text: "Masukkan Nama", img: "" },
      { text: "Pilih Avatar", img: "" },
    ],
    opening: [
      "Nama akan digunakan untuk database penyimpanan jadwal. Kalender tidak  bisa digunakan tanpa data ini.",
    ],
    closing: [""],
  },
  payment: {
    title: "Data Baru",
    list: [
      {
        text: "Pada main menu pilih Kalender",
        img: "",
      },
      {
        text: "Pilih tanggal penjadwalan di kalender. Pilih tanggal kegiatan akan dilakukan sesuai dengan jumlah total yang akan dibayarkan. Tanggal yang bisa dipilih maksimal untuk dua bulan.",
        img: "",
      },
      {
        text: "Masukkan Judul dan keterangan. Judul dan keterangan akan dijadikan satu kategori yang unik dan dapat digunakan lagi saat memasukkan item yang sama.",
        img: "",
      },
      {
        text: "Masukkan Satuan : jumlah uang yang dijadwalkan akan dterima/dibayar dalam satu hari. Satuan akan otomatis dibagi dengan jumlah hari dari tanggal yang dipilih.",
        img: "",
      },
      {
        text: "Masukkan Total pembayaran untuk satukali transaksi. Total akan otomatis dipecah dalam satuan hari.",
        img: "",
      },
      {
        text: "Pilih keluar jika melakukan pembayaran, pilih masuk, jika menerima pembayaran",
        img: "",
      },
      {
        text: "Pilih tanggal pembayaran, jika sudah dilunasi saat memasukkan penjadwalan. Tanggal yang dapat dipilih maksimal adalah sesuai tanggal yang diklik dalam kalender.",
        img: "",
      },
    ],
    opening: [
      "Penjadwalan aktivitas transaksi dilakukan dengan&nbsp;<span>satuan harian</span> , bukan satuan item barang. Meski kategori menjadi standar, harga satuan harian bisa disesuaikan",
    ],
    closing: [""],
  },
  invoice: {
    title: "Edit Data",
    list: [
      { text: "Di main menu pilih 'Kalender'", img: "" },
      {
        text: "Dibagian bawah kalender Tekan tombol disebelah item yang akan diedit.",
        img: "",
      },
      {
        text: "Anda akan masuk kedaftar list item yang anda bisa edit. Pilih salah dengan menekan tombol 'Edit'",
        img: "",
      },
      {
        text: "Masukkan Total pembayaran untuk satukali transaksi. Total akan otomatis dipecah dalam satuan hari.",
        img: "",
      },
      {
        text: "Pilih <span>keluar</span> jika melakukan pembayaran, pilih <span>masuk</span>, jika menerima pembayaran",
        img: "",
      },
      {
        text: "Pilih tanggal pembayaran, ( hanya ada untuk item yang sudah dilunasi saat memasukkan penjadwalan). Tanggal yang dapat dipilih maksimal adalah sesuai tanggal yang diklik dalam kalender.",
        img: "",
      },
      {
        text: "Edit Judul atau deskripsi. Deskripsi tidak bisa diubah, tanpa mengubah judul",
        img: "",
      },
      {
        text: "Edit harga maupun jumlah total. Harga bisa berbeda untuk kategori yang sama.",
        img: "",
      },
      {
        text: "Edit Kategori untuk seluruh data hanya bisa dilakukan saat judul Edit Kategori untuk seluruh data hanya bisa dilakukan saat judul atau deskripsi berubah.atau deskripsi berubah.",
        img: "",
      },
    ],
    opening: [
      " Anda bisa mengedit satu item data dan membuat, atau seluruh data dalam satu kategori。Kategori dibuat otomatis saat anda memasukkan data baru.",
    ],
    closing: [""],
  },
  file: {
    title: "Hapus Data",
    list: [
      { text: "Di main menu pilih 'Kalender'", img: "" },
      {
        text: "Dibagian bawah kalender Tekan tombol disebelah data yang akan dihapus.",
        img: "",
      },
      {
        text: "List data yang bisa dihapus dalam satu hari. Jika anda ingin menghapus seluruh data yang didaftarkan bersamaan (1 registrasi id) maka klik disebelah data yang akan dihapus",
        img: "",
      },
      {
        text: "Untuk menghapus data dalam satu hari, klik kotak yang akan dihapus, lalu klik hapus",
        img: "",
      },
    ],
    opening: [
      "Anda bisa menghapus data dalam satu hari atau data dalam satu kategori",
    ],
    closing: [""],
  },
};
