import { PageDataType } from "../context/types.d";
export const homepage_id: PageDataType = {
  register: {
    title: "Register Nama",
    list: [
      { text: "Klik tombol <span>username</span> ", img: "" },
      { text: "Masukkan Nama", img: "" },
      { text: "Pilih Avatar dengan meng klik gambar yang tersedia", img: "" },
      { text: "Klik tombol <span>Daftar</span>", img: "" },
    ],
    opening: [
      "Nama akan digunakan untuk database penyimpanan jadwal. BayarPlanner tidak  bisa digunakan tanpa data ini.",
    ],
    closing: [""],
  },
  input: {
    title: "Data Baru",
    list: [
      {
        text: "Pada main menu pilih <span>Kalender</span>",
        img: "",
      },
      {
        text: "Ketuk Tanggal di Kalender besar atau pada tanggal di kolom sisi. Pilih tanggal kegiatan akan dilakukan sesuai dengan jumlah total yang akan dibayarkan. Tanggal yang bisa dipilih maksimal untuk dua bulan.",
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
      "Penjadwalan aktivitas transaksi dilakukan dengan <span>satuan harian</span> , bukan satuan item barang. Misalnya jika anda belanja mingguan, maka jumlah total belanja yang dimasukkan, bukan harga per item belanja.",
      "Untuk setiap kategori, bisa digunakan untuk harga yang berbeda-beda",
    ],
    closing: [""],
  },
  edit: {
    title: "Edit Data",
    list: [
      { text: "Di main menu pilih 'Kalender'", img: "" },
      {
        text: "Dibagian bawah kalender Tekan tombol disebelah item yang akan diedit.",
        img: "",
      },
      {
        text: "Anda akan masuk kedaftar list item yang anda bisa edit. Pilih salah dengan menekan tombol <span>Edit</span>'",
        img: "",
      },

      {
        text: "Jika anda mengedit transaksi yang sudah dilunasi dan jumlah hari lebih dari satu, maka akan ada pilihan untuk menambah tanggal dari item yang sudah diedit. Klik Tambahkan ke registrationID dan pilih tanggal yang ingin anda tambahkan",
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
        text: "Pilihan <span>Edit Kategori untuk seluruh data </span>hanya bisa diklik saat judul Edit Kategori untuk seluruh data hanya bisa dilakukan saat judul dan  deskripsi berubah.",
        img: "",
      },
      {
        text: "Setelah selesai klik tombol <span>Edit</span>",
        img: "",
      },
    ],
    opening: [
      " Anda bisa mengedit satu item data saja atau mengubah seluruh data dalam satu kategori。Kategori dibuat otomatis saat anda memasukkan data baru.",
    ],
    closing: [""],
  },
  delete: {
    title: "Hapus Data",
    list: [
      { text: "Di main menu pilih 'Kalender'", img: "" },

      {
        text: "Di kolom sisi  bagian bawah kalender Tekan tombol disebelah data yang akan dihapus.",
        img: "",
      },
      {
        text: "Dapat dilihat List data yang bisa dihapus dalam satu hari. Anda bisa klik box disebelah item yang anda ingin hapus untuk memilihnya. ",
        img: "",
      },
      {
        text: "Jika anda ingin menghapus seluruh data yang didaftarkan bersamaan (memiliki registrasi id yang sama) maka klik tombol <span>Semua</span>",
        img: "",
      },
      {
        text: "Untuk menghapus data dalam satu hari, klik kotak yang akan dihapus, lalu klik hapus",
        img: "",
      },
    ],
    opening: ["Anda bisa menghapus data per satu hari atau data per kategori"],
    closing: [""],
  },
};
