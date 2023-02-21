import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <div>
      <h3>Register Name</h3>

      <p>
        Nama akan digunakan untuk database penyimpanan jadwal. Kalender tidak
        bisa digunakan tanpa data ini.
      </p>
      <div>
        <ul className=" list-disc list-inside">
          <li>Ketuk tombol username</li>
          <li>Masukkan Nama </li>
          <li>Pilih Avatar</li>
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

export default Register;
