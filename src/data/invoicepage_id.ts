import { PageDataType } from "../context/types.d";
export const invoicepage_id: PageDataType = {
  invoicemultiple: {
    title: "Print multiple data",
    list: [
      { text: "Pada menu utama, klik tombol <span>Kwitansi</span>", img: "" },
      {
        text: "Di kalender besar akan terlihat seluruh list. Klik tanggal, akan terbuka Daftar multiple kwitansi.",
        img: "",
      },
      {
        text: "Di kolom sisi jika diklik pada tanggal yang berwarna hijau, di bagian bawah akan ditujukkan list yang akan menunjukkan daftar kegiatan pelunasan atau penerimaan pada tanggal tersebut",
        img: "",
      },
      {
        text: "Jika di klik pada tombol <span>Print semua</span>, maka akan terbuka Daftar Multiple Kwitansi yang bisa di download",
        img: "",
      },
      {
        text: "Jika ingin menambah jumlah tanggal kwitansi yang akan diprint, maka klik pada tanggal terpilih",
        img: "",
      },
      {
        text: "Klik kotak disamping item untuk memilih/mengecualikan tanggal yang juga akan diprint",
        img: "",
      },
      {
        text: "Klik <span> print semua</span>, akan terlihat print preview list seluruh item yang sudah dipilih. Cek jika ada yang akan ditambah atau dikurangi",
        img: "",
      },
      {
        text: "Klik <span> Print semua</span> lagi, akan terlihat pilihan bentuk output yang bisa dipilih :Jpg, Pdf, Excel. Pilih salah satu",
        img: "",
      },
      {
        text: "Ubah nama jika diperlukan, lalu tekan <span>OK</span> ",
        img: "",
      },
    ],
    opening: [
      "Seluruh pembayaran beserta dapat dilihat dari Kalender utama, sementara dikolom sisi jadwal bisa di lihat dengan mengklik tanggal",
      "Kwitansi untuk lebih dari satu item bisa di download dalam bentuk JPEG, Excel atau PDF",
    ],
    closing: [""],
  },
  invoicesingle: {
    title: "Print single data",
    list: [
      { text: "Di main menu pilih 'Kalender'", img: "" },
      {
        text: "Di kalender besar akan terlihat seluruh list. Klik tanggal, akan terbuka Daftar multiple kwitansi.",
        img: "",
      },
      {
        text: "Hilangkan centang pada kotak disebelah item, sisakan satu",
        img: "",
      },
      {
        text: "Jika di klik pada tombol <span>Print semua</span>, maka akan terbuka Daftar Single Kwitansi yang bisa di download",
        img: "",
      },
      {
        text: "Di kolom sisi jika diklik pada tanggal yang berwarna hijau, di bagian bawah akan ditujukkan list yang akan menunjukkan daftar kegiatan pelunasan atau penerimaan pada tanggal tersebut",
        img: "",
      },
      {
        text: "Jika di klik pada tombol <span>ID</span>, maka akan terbuka Daftar Single Kwitansi yang bisa di download",
        img: "",
      },
      {
        text: "Pilih tanggal Print dengan Kalender jika anda ingin menyertakan kalender",
        img: "",
      },
      {
        text: "Klik <span> Print </span>, akan terlihat pilihan bentuk output yang bisa dipilih :Jpg atau Pdf. Pilih salah satu",
        img: "",
      },
      {
        text: "Ubah nama jika diperlukan, lalu tekan <span>OK</span> ",
        img: "",
      },
    ],
    opening: [
      "Untuk print satu item, print kwitansi bisa disertai dengan kalender jadwal pelaksanaan transaksi tersebut. Print satu item dapat didownload dalam bentuk JPEG atau PDF ",
    ],
    closing: [""],
  },
};
