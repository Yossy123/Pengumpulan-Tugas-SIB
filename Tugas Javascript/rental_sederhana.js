const formatWaktu = (date) => date.toLocaleTimeString("id-ID", {
    hour: '2-digit',
    minute: '2-digit'
});

class Kendaraan {
    constructor(jenis, platNomor) {
        this.jenis = jenis;
        this.platNomor = platNomor;
    }

    get deskripsi() {
        return `${this.jenis} (${this.platNomor})`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
    }
}


class ManajerRental {
    constructor() {
        this.sewaAktif = [];
        this.arsipSewa = [];
        this.idCounter = 101;
    }

    // Metode untuk mencatat penyewaan baru
    catatPenyewaan(namaPelanggan, telpPelanggan, kendaraan) {
        const pelanggan = new Pelanggan(namaPelanggan, telpPelanggan);
        const dataSewa = {
            id: this.idCounter++,
            pelanggan: pelanggan,
            kendaraan: kendaraan,
            waktuSewa: new Date(),
            waktuKembali: null
        };
        this.sewaAktif.push(dataSewa);
        console.log(`[+] Transaksi #${dataSewa.id} dicatat: ${pelanggan.nama} menyewa ${kendaraan.deskripsi}.`);
        return dataSewa.id;
    }
    
    // Metode untuk mengembalikan kendaraan
    kembalikanKendaraan(idSewa) {
        const indexSewa = this.sewaAktif.findIndex(s => s.id === idSewa);
        if (indexSewa === -1) {
            console.log(`[!] Gagal: Transaksi ID #${idSewa} tidak aktif atau tidak ditemukan.`);
            return;
        }

        const [transaksiSelesai] = this.sewaAktif.splice(indexSewa, 1);
        transaksiSelesai.waktuKembali = new Date();
        this.arsipSewa.push(transaksiSelesai);
        console.log(`[-] Pengembalian #${idSewa} berhasil: ${transaksiSelesai.kendaraan.deskripsi} telah kembali.`);
    }
    
    // Metode untuk mencetak laporan status
    cetakLaporanStatus() {
        const garisPemisah = "=======================================================";
        console.log("\n" + garisPemisah);
        console.log(`            LAPORAN STATUS RENTAL SISTEM`);
        console.log(`     Dicetak pada: ${new Date().toLocaleString("id-ID")}`);
        console.log(garisPemisah);

        console.log(`\n>> DAFTAR SEWA AKTIF (${this.sewaAktif.length} unit)`);
        console.log("-------------------------------------------------------");
        if (this.sewaAktif.length > 0) {
            this.sewaAktif.forEach(s => {
                console.log(`   ID ${s.id} | ${s.kendaraan.deskripsi.padEnd(25)} | Disewa oleh: ${s.pelanggan.nama} (jam ${formatWaktu(s.waktuSewa)})`);
            });
        } else {
            console.log("   (Tidak ada kendaraan yang sedang dalam penyewaan)");
        }

        console.log(`\n>> RIWAYAT TRANSAKSI SELESAI (${this.arsipSewa.length} unit)`);
        console.log("-------------------------------------------------------");
        if (this.arsipSewa.length > 0) {
            this.arsipSewa.forEach(s => {
                console.log(`   ID ${s.id} | ${s.kendaraan.deskripsi.padEnd(25)} | Dikembalikan oleh: ${s.pelanggan.nama} (jam ${formatWaktu(s.waktuKembali)})`);
            });
        } else {
            console.log("   (Belum ada riwayat transaksi yang selesai)");
        }
        console.log(garisPemisah + "\n");
    }
}


// --- DEMO PENGGUNAAN ---

console.log("... Memulai Sistem Manajemen Rental ...");
const sistemRental = new ManajerRental();

// Aset kendaraan yang tersedia
const fortuner = new Kendaraan("Mobil SUV", "B 9876 ZXC");
const beat = new Kendaraan("Motor Skuter", "F 1234 KLM");
const xenia = new Kendaraan("Mobil MPV", "D 5555 JKL");

// Skenario transaksi
sistemRental.catatPenyewaan("Budi Santoso", "0812...", fortuner);
const idSewaDewi = sistemRental.catatPenyewaan("Dewi Anggraini", "0856...", beat);
sistemRental.catatPenyewaan("Eka Wijaya", "0878...", xenia);

// Cetak laporan awal
sistemRental.cetakLaporanStatus();

// Skenario pengembalian
console.log("\n...Beberapa saat kemudian, ada pelanggan yang mengembalikan kendaraan...");
sistemRental.kembalikanKendaraan(idSewaDewi);

// Cetak laporan akhir
sistemRental.cetakLaporanStatus();