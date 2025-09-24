// controller.mjs

// Impor data 'users' dari file data.mjs.
import users from "./data.mjs";

/**
 * Fungsi untuk menampilkan semua data user.
 */
const index = () => {
  console.log("Menampilkan semua data users:");
  if (users.length > 0) {
    users.map((user, i) => {
      console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
  } else {
    console.log("Data kosong.");
  }
  console.log("\n");
};

/**
 * Fungsi untuk menambahkan data user baru.
 * @param {object} user - Objek user baru yang akan ditambahkan.
 */
const store = (user) => {
  // Menambahkan data baru ke dalam array 'users'.
  users.push(user);
  console.log(`Data baru berhasil ditambahkan: ${user.nama}\n`);
};

/**
 * Fungsi untuk menghapus data user.
 * Fungsi ini akan menghapus data terakhir dari array.
 * @param {number} index - Index dari data yang ingin dihapus.
 */
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    const deletedUser = users.splice(index, 1);
    console.log(`Data '${deletedUser[0].nama}' pada index ${index} berhasil dihapus.\n`);
  } else {
    console.log(`Index ${index} tidak valid. Tidak ada data yang dihapus.\n`);
  }
};

// Ekspor semua fungsi agar bisa digunakan di file lain.
export { index, store, destroy };