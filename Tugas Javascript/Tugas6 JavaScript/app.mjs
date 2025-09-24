// Impor fungsi-fungsi dari controller.mjs.
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("--- Program Data User ---");

  // 1. Menampilkan data awal.
  console.log("--- Menampilkan Data Awal ---");
  index();

  // 2. Menambahkan minimal 2 data baru.
  console.log("--- Menambahkan 2 Data Baru ---");
  const userBaru1 = { nama: 'Kartika', umur: 24, alamat: 'Jl. Kenanga 11', email: 'kartika@example.com' };
  const userBaru2 = { nama: 'Laksana', umur: 33, alamat: 'Jl. Melati 12', email: 'laksana@example.com' };

  store(userBaru1); // Menambah data pertama
  store(userBaru2); // Menambah data kedua

  // 3. Menampilkan data setelah penambahan.
  console.log("--- Menampilkan Data Setelah Penambahan ---");
  index();

  // 4. Menghapus salah satu data (contoh: data pada index ke-2 atau 'Agus Wijoyo').
  console.log("--- Menghapus 1 Data ---");
  destroy(2); // Menghapus data dengan index 2

  // 5. Menampilkan data akhir setelah penghapusan.
  console.log("--- Menampilkan Data Final ---");
  index();
};

// Menjalankan fungsi utama.
main();