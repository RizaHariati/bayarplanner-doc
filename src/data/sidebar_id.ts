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
    title: "Mulai Jadwal",
    link: "/start/",
    icon: faFlag,
    content: {
      map: "map",
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
      check: "Lihat Daftar Pembayaran",
      daypayment: "Daftar belum dibayar",
      itempaymentSameID: "Pembayaran Registrasi ID Sama",
      itempaymentmultiple: "Pembayaran Beberapa Item",
      itempaymentsingle: "Pembayaran Satu Item",
    },
    opening: [
      "Daftar pembayaran berisi seluruh transaksi yang sudah dijadwalkan tapi belum dilunasi atau ditagih. Saat jadwal berwarna merah, artinya sudah terlambat dan harus segera dilunasi atau ditagih.",
    ],
  },

  invoice: {
    title: "Kwitansi",
    link: "/invoice/",
    icon: faBook,
    content: {
      invoicemultiple: "Print multiple data",
      invoicesingle: "Print single data",
    },
    opening: [
      "Kalender Kwitansi didasarkan pada tanggal pembayaran, sehingga berbeda dengan penanggalan yang ada di dalam Kalender utama.",
    ],
  },

  file: {
    title: "Manajemen File",
    link: "/file/",
    icon: faFile,
    content: {
      savingData: "Simpan Data",
      uploadingData: "Upload Data",
      printData: "Print Data",
      clearingData: "Bersihkan Data Browser",
      addData: "Tambahkan Data Lain",
      deleteUser: "Hapus User",
    },
    opening: [
      "Semua data akan disimpan sementara didalam browser. Setelah pemakaian <span>data harus disimpan kedalam hardisk</span>, atau data akan dihapus dari browser. Ini sengaja dilakukan agar semua data berada dalam kendali Anda.",
      "Anda bisa menghapus semua data dalam browser, tapi untuk data yang sudah didownload, harus anda hapus secara manual dari komputer atau ponsel anda.",
    ],
  },
};
