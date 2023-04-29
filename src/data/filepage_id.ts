import { PageDataType } from "../context/types.d";
export const filepage_id: PageDataType = {
  savingData: {
    title: "Simpan Data",
    list: [
      {
        text: "Saat anda sudah melakukan registrasi maka di main menu akan ada menu <span>Simpan Data</span>",
        img: "",
      },

      {
        text: "Ubah nama jika diperlukan, lalu tekan <span>OK</span> ",
        img: "",
      },
      {
        text: "Di Windows, data akan anda temukan pada folder <span>downloads</span>. Misalnya pada 'C:Users&#92;rizah&#92;Downloads",
        img: "",
      },
      {
        text: "Di Android, pertama klik <span>File</span> folder.Lalu klik menu bar, untuk membuka <span>download</span> folder didalamnya. Dan didapatlah file dengan extention *.json. ",
        img: "",
      },
    ],
    opening: [
      "Selalu simpan data sebelum menutup BayarPlanner. Data ini bisa anda kirim lewat email maupun bluetooth, untuk kemudian diolah dari computer maupun handphone dari lain. Data akan disimpan dalam bentuk JSON",
    ],
    closing: [""],
  },
  uploadingData: {
    title: "Upload Data",
    list: [
      {
        text: "Jika anda belum melakukan registrasi atau baru menggunakan BayarPlanner, Anda bisa ke Menu Utama, lalu klik <span>Upload Data</span>",
        img: "",
      },
      {
        text: "Klik <span>browse</span>, lalu pilih file dari hard drive anda.",
        img: "",
      },
      { text: "Klik <span>OK</span>", img: "" },
      {
        text: "Jika Anda sedang menggunakan BayarPlanner dan ingin mengupload file lain, maka anda bisa mendownload database dengan nama yang berbeda. BayarPlanner bisa digunakan sampai 3 database, per browser",
        img: "",
      },
      {
        text: "Klik <span>UserMenu</span>, Dan akan terbuka menu.",
        img: "",
      },
      {
        text: "Pilih <span>Load data</span>, lalu pilih file dari hard drive anda.",
        img: "",
      },
      { text: "Klik <span>OK</span>", img: "" },
    ],
    opening: [
      "Data yang digunakan berbentuk JSON, dan bisa anda akses di perangkat manapun yang menggunakan browser setelah anda menyimpan data tersebut.",
    ],
    closing: [""],
  },

  printData: {
    title: "Print Data",
    list: [
      {
        text: "Untuk mencetak laporan keuangan anda bisa klik <span>icon print</span>",
        img: "",
      },
      {
        text: "Anda akan melihat pilihan penyimpanan data. Pilih <span>Urut data berdasarkan Tanggal Jadwal</span>, jika anda menginginkannya. Seluruh data akan dimasukkan, termasuk jadwal yang belum dilunasi",
        img: "",
      },
      {
        text: "Anda juga bisa memilih menyimpan data perbulan. Lalu klik <span>OK</span> dan data akan didownload",
        img: "",
      },
      {
        text: "Anda bisa memilih <span>Urut Transaksi berdasarkan tanggal transaksi</span> jika Anda hanya memerlukan data berkaitan dengan kegiatan keuangan anda. Jadwal yang belum dilunasi akan diabaikan.",
        img: "",
      },
      {
        text: "Anda juga bisa memilih menyimpan data perbulan. Lalu klik <span>OK</span> dan data akan didownload",
        img: "",
      },
    ],
    opening: [
      "Data Anda bisa di save dalam bentuk excel untuk laporan keuangan anda. Data bisa diurut berdasarkan tanggal transaksi yang sudah anda lunasi, atau berdasarkan tanggal dimana jadwal kegiatan akan dilakukan .",
    ],
    closing: [""],
  },

  clearingData: {
    title: "Bersihkan Data Browser",
    list: [
      {
        text: "Klik <span>UserMenu</span>, Dan akan terbuka menu.",
        img: "",
      },
      {
        text: "Pilih <span>Hapus Data Browser</span>",
        img: "",
      },
      {
        text: "Anda akan melihat peringatan bahwa seluruh data dari semua akun akan dibersihkan dari browser",
        img: "",
      },
      {
        text: "Klik <span>OK</span> jika anda setuju",
        img: "",
      },
    ],
    opening: [
      "Data dari browser bisa anda hapus setelah anda pakai. Sehingga pengguna berikutnya tidak melihat data Anda",
    ],
    closing: [""],
  },
  addData: {
    title: "Tambahkan Data Lain",
    list: [
      {
        text: "Klik <span>UserMenu</span>, Dan akan terbuka menu.",
        img: "",
      },
      {
        text: "Pilih <span>Tambah/Ganti User</span>",
        img: "",
      },
      {
        text: "Masukkan Nama baru atau pilih nama yang ada dalam list",
        img: "",
      },
      {
        text: "Pilih Avatar baru dengan meng klik gambar yang tersedia",
        img: "",
      },
      { text: "Klik tombol <span>Daftar</span>", img: "" },
    ],
    opening: [
      "Pemakaian app dalam satu browser bisa dilakukan maksimal untuk tiga user. Dengan data terpisah untuk masing-masing user. Anda bisa menambah dengan meng upload data lain, juga bisa dengan membuat akun baru",
    ],
    closing: [""],
  },
  deleteUser: {
    title: "Hapus User",
    list: [
      {
        text: "Klik <span>UserMenu</span>, Dan akan terbuka menu.",
        img: "",
      },
      {
        text: "Pilih <span>Tambah/Ganti User</span>",
        img: "",
      },
      {
        text: "Masukkan Nama yang akan dihapus",
        img: "",
      },
      {
        text: "Klik gambar tong sampah disebelah nama",
        img: "",
      },
      {
        text: "Anda akan melihat peringatan bahwa data akun akan dibersihkan dari browser",
        img: "",
      },
      { text: "Klik tombol <span>OK</span>", img: "" },
    ],
    opening: [
      "Jika BayarPlanner sudah digunahan oleh 3 user, untuk menambah lagi anda bisa menghapus data yang ada. Jangan lupa <span>menyimpan data</span> sebelumnya. Anda hanya bisa menghapus user jika BayarPlanner digunakan oleh lebih dari dua user. Untuk menghapus data gunakan Hapus Data Browser",
    ],
    closing: [""],
  },
};
