import {
  faBook,
  faCoins,
  faFile,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { SidebarType } from "../context/types.d";

export const sidebar_id: SidebarType = {
  welcome: {
    title: "Selamat Datang",
    link: "/",
    icon: faHand,
    opening: [
      "BayarPlanner dibuat untuk membantu anda mengingat kapan anda melakukan transaksi keuangan, dan kapan transaksi tersebut dijalankan. Karenanya satuan transaksi terkecil dalam BayarPlanner menggunakan satuan perhari, bukan per harga item barang.",
      "Selamat memulai perjalanan kehidupan yang lebih teratur!",
    ],
  },

  start: {
    title: "Mulai Merencanakan",
    link: "/startpage/",
    icon: faFlag,
    content: {
      register: "Register Nama",
      input: "Data Baru",
      edit: "Edit Data",
      delete: "Hapus Data",
    },
    opening: [
      "Register Nama akan digunakan untuk dijadikan kode penyimpanan data yang unik untuk setiap pengguna.",
    ],
  },

  payment: {
    title: "Pembayaran",
    link: "/payment/",
    icon: faCoins,
    content: {
      check: "Daftar Pembayaran",
      payment: "Pembayaran",
      invoice: "Kwitansi",
      file: "Manajemen File",
    },
    opening: [
      "Semua data akan disimpan sementara didalam browser. Setelah pemakaian data harus disimpan kedalam hardisk, atau data akan dihapus dari browser. Ini sengaja dilakukan agar semua data berada dalam kendali Anda.",
      "Anda bisa menghapus semua data dalam browser, tapi untuk data yang sudah didownload, harus anda hapus secara manual dari komputer atau ponsel anda.",
    ],
  },

  invoice: {
    title: "Kwitansi",
    link: "/invoice/",
    icon: faBook,
    content: {
      start: "Mulai",
      payment: "Pembayaran",
      invoice: "Kwitansi",
      file: "Manajemen File",
    },
    opening: [
      "Penanggalan Kwitansi didasarkan pada tanggal pembayaran",
      "Kwitansi bisa download dalam bentuk JPG, atau PDF dan excel, untuk lebih dari satu item",
    ],
  },

  file: {
    title: "Manajemen File",
    link: "/filemanagement/",
    icon: faFile,
    content: {
      start: "Mulai",
      payment: "Pembayaran",
      invoice: "Kwitansi",
      file: "Manajemen File",
    },
    opening: [
      "Semua data akan disimpan sementara didalam browser. Setelah pemakaian data harus disimpan kedalam hardisk, atau data akan dihapus dari browser. Ini sengaja dilakukan agar semua data berada dalam kendali Anda.",
      "Anda bisa menghapus semua data dalam browser, tapi untuk data yang sudah didownload, harus anda hapus secara manual dari komputer atau ponsel anda.",
    ],
  },
};
