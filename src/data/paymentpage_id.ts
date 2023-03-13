import { PageDataType } from "../context/types.d";
export const paymentpage_id: PageDataType = {
  check: {
    title: "Lihat Daftar Pembayaran",
    list: [
      {
        text: "Untuk cek daftar bayar, pertama klik <span>bayar</span> di menu utama",
        img: "",
      },
      {
        text: "Di kalender besar akan terlihat seluruh list, klik salah satu tanggal dan akan terbuka detail item yang harus dibayar. Jika klik tanggal berisi lebih dari satu item akan terbuka Daftar belum dibayar.",
        img: "",
      },

      {
        text: "Di kolom sisi terlihat daftar belum dibayar. Jika klik tombol <span>bayar</span> akan terbuka Daftar belum dibayar untuk hari itu",
        img: "",
      },
      {
        text: "Lanjutkan ke <span>Daftar belum dibayar</span>",
        img: "",
      },
      {
        text: "Jika tanggal di Kalender besar berisi satu item diklik akan terbuka pilihan Pembayaran Satu Item",
        img: "",
      },
      {
        text: "Jika klik item bertuliskan jumlah yang harus dilunasi, akan terbuka pilihan pembayaran satu item",
        img: "",
      },
      {
        text: "Lanjutkan ke <span>Pembayaran satu item</span>",
        img: "",
      },
    ],
    opening: [
      "Daftar pembayaran berada di kalender utama, dan dalam bentuk lebih detail lagi, di kolom sisi, dibawah kalender kecil.",
    ],
    closing: [""],
  },
  daypayment: {
    title: "Daftar belum dibayar",
    list: [
      {
        text: "Jika Anda ingin melunasi seluruh item didalam daftar, anda dapat memilih tanggal pembayaran. Tanggal pembayaran harus sebelum jadwal",
        img: "",
      },
      {
        text: "Lalu klik tombol <span>Bayar Semua</span>",
        img: "",
      },
      {
        text: "Jika Anda hanya ingin melunasi satu item, clik tombol <span>Bayar</span> disebelah item yang akan dilunasi",
        img: "",
      },
      {
        text: "Lanjutkan ke <span>Pembayaran satu item</span>",
        img: "",
      },
    ],
    opening: [
      "Daftar belum dibayar dapat dibuka dengan mengklik tanggal pada kalender besar atau tombol <span>bayar</span> di kolom sisi. Anda bisa melunasi seluruh item  yang tertera didalam daftar, atau membayar salah satu saja dengan mengklik tombol <span>bayar</span>",
    ],
    closing: [""],
  },
  itempaymentSameID: {
    title: "Pembayaran Registrasi ID sama",
    list: [
      {
        text: "Jika Anda ingin membayar beberapa item (dengan nomor RegistrationID yang sama) selain item yang anda pilih anda dapat memilih menambah tanggal dengan mengklik pada tulisan tanggal",
        img: "",
      },
      {
        text: "Click tanggal yang anda ingin tambahkan ",
        img: "",
      },
      {
        text: "Pilih tanggal pembayaran ",
        img: "",
      },
      {
        text: "Click tombol <span>bayar</span> ",
        img: "",
      },
    ],
    opening: [
      "Pada Pembayaran Satu Item anda bisa hanya membayar satu item, beberapa item yang didaftarkan bersamaan atau seluruh item sekaligus",
    ],
    closing: [""],
  },
  itempaymentmultiple: {
    title: "Pembayaran Beberapa Item",
    list: [
      {
        text: "Untuk langsung membayar semua item dalam nomor registerID yang sama, pertama pilih tanggal pembayaran",
        img: "",
      },
      {
        text: "klik tombol <span>Bayar Semua</span>",
        img: "",
      },
    ],
    opening: [""],
    closing: [""],
  },
  itempaymentsingle: {
    title: "Pembayaran Satu Item",
    list: [
      {
        text: "Untuk membayar hanya satu item, pertama pilih tanggal pembayaran",
        img: "",
      },
      {
        text: "klik tombol <span>Bayar </span>",
        img: "",
      },
    ],
    opening: [
      "Pada Pembayaran Satu Item anda bisa hanya membayar satu item, beberapa item yang didaftarkan bersamaan atau seluruh item sekaligus",
    ],
    closing: [""],
  },
};
