import { PageDataType } from "../context/types.d";
export const filepage_id: PageDataType = {
  uploadingData: {
    title: "Upload Data",
    list: [
      { text: "Ketuk tombol username", img: "" },
      { text: "Masukkan Nama", img: "" },
      { text: "Pilih Avatar", img: "" },
    ],
    opening: [
      "Data bisa anda akses di perangkat manapun yang menggunakan browser setelah anda mendownloadnya",
    ],
    closing: [""],
  },
  savingData: {
    title: "Simpan Data",
    list: [
      {
        text: "Pada main menu pilih Kalender",
        img: "",
      },
    ],
    opening: [
      "Selalu simpan data setelah mengisi BayarPlanner. Data ini bisa anda kirim lewat email maupun bluetooth, untuk kemudian diolah dari computer maupun handphone dari lain",
    ],
    closing: [""],
  },
  clearingData: {
    title: "Bersihkan Data Browser",
    list: [{ text: "Di main menu pilih 'Kalender'", img: "" }],
    opening: [
      "Data dari browser bisa anda hapus setelah anda pakai. Sehingga pengguna berikutnya tidak melihat data Anda",
    ],
    closing: [""],
  },
  addData: {
    title: "Tambahkan Data Lain",
    list: [{ text: "Di main menu pilih 'Kalender'", img: "" }],
    opening: [
      "Pemakaian app dalam satu browser bisa dilakukan maksimal untuk tiga user. Dengan data terpisah untuk masing-masing user.",
    ],
    closing: [""],
  },
};
