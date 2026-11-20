/* =====================================================================
   RUANG RESEPSI — MASTER TEMPLATE UNDANGAN DIGITAL
   KONFIGURASI PELANGGAN: ini satu-satunya file yang perlu diedit.
   Ganti semua teks dalam [KURUNG SIKU] dengan data pelanggan.
   Desain ada di css/style.css dan js/script.js (jangan diubah).
   Foto kosong ("") = placeholder otomatis. Path foto relatif ke index.html.
   ===================================================================== */
const CONFIG = {
  brand: "Ruang Resepsi",              /* tampil kecil di penutup; kosongkan ("") untuk menyembunyikan */

  /* ---------- MEMPELAI ---------- */
  groom: { short: "[NAMA PRIA]",   full: "[NAMA MEMPELAI PRIA]",   child: "[ANAK KE-]", parents: "[NAMA ORANG TUA]", photo: "assets/photos/groom.jpg" },
  bride: { short: "[NAMA WANITA]", full: "[NAMA MEMPELAI WANITA]", child: "[ANAK KE-]", parents: "[NAMA ORANG TUA]", photo: "assets/photos/bride.jpg" },

  /* ---------- TANGGAL ---------- */
  /* Format: "TAHUN-BULAN-TANGGALTJAM:MENIT:00+07:00" (WIB +07:00, WITA +08:00, WIT +09:00).
     Contoh: "2027-03-20T08:00:00+07:00". Kosong = hitung mundur 00 & tanggal tampil [TANGGAL ACARA]. */
  date: "",
  hashtag: "[HASHTAG]",

  /* ---------- FOTO UTAMA ---------- */
  coverPhoto:   "assets/photos/cover.jpg",
  heroPhoto:    "assets/photos/hero.jpg",
  closingPhoto: "assets/photos/closing.jpg",

  /* ---------- TEKS ---------- */
  heroLine: "Dua jiwa, satu perjalanan. Kami mengundang Anda untuk menjadi saksi awal kisah selamanya kami.",
  quote: { text: "[KUTIPAN / AYAT PERNIKAHAN]", source: "[SUMBER KUTIPAN]" },
  closing: "Merupakan kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Terima kasih atas segala cinta dan perhatian yang diberikan.",

  /* ---------- MUSIK ---------- */
  /* Letakkan file MP3 di assets/music/ lalu isi, contoh: "assets/music/lagu.mp3". Kosong = tombol musik disembunyikan. */
  music: { src: "", title: "Background Music" },

  /* ---------- ACARA (tambah/hapus blok sesuai kebutuhan) ---------- */
  /* maps: kata kunci lokasi ATAU link Google Maps lengkap (https://maps.app.goo.gl/...). Kosong = cari dari nama tempat + alamat. */
  events: [
    { name: "Akad Nikah", date: "[TANGGAL ACARA]", time: "[WAKTU ACARA]", venue: "[NAMA LOKASI]", address: "[ALAMAT LOKASI]", maps: "" },
    { name: "Resepsi",    date: "[TANGGAL ACARA]", time: "[WAKTU ACARA]", venue: "[NAMA LOKASI]", address: "[ALAMAT LOKASI]", maps: "" }
  ],

  /* ---------- LOVE STORY (tambah/hapus momen sesuai kebutuhan) ---------- */
  story: [
    { when: "[TAHUN]", title: "[JUDUL MOMEN 1]", text: "[CERITA SINGKAT MOMEN 1]", photo: "assets/photos/story-1.jpg" },
    { when: "[TAHUN]", title: "[JUDUL MOMEN 2]", text: "[CERITA SINGKAT MOMEN 2]", photo: "assets/photos/story-2.jpg" },
    { when: "[TAHUN]", title: "[JUDUL MOMEN 3]", text: "[CERITA SINGKAT MOMEN 3]", photo: "assets/photos/story-3.jpg" },
    { when: "[TAHUN]", title: "[JUDUL MOMEN 4]", text: "[CERITA SINGKAT MOMEN 4]", photo: "assets/photos/story-4.jpg" }
  ],

  /* ---------- GALERI (susunan terbaik 6 foto; foto 1 dan 6 tampil lebar) ---------- */
  gallery: [
    "assets/photos/gallery-1.jpg", "assets/photos/gallery-2.jpg", "assets/photos/gallery-3.jpg",
    "assets/photos/gallery-4.jpg", "assets/photos/gallery-5.jpg", "assets/photos/gallery-6.jpg"
  ],

  /* ---------- HADIAH DIGITAL ---------- */
  giftText: "Kehadiran dan doa Anda adalah hadiah terindah. Namun bila berkenan memberi tanda kasih, dapat melalui:",
  banks: [
    { bank: "[NAMA BANK]", no: "[NOMOR REKENING]", name: "[NAMA PEMILIK REKENING]" },
    { bank: "[NAMA BANK]", no: "[NOMOR REKENING]", name: "[NAMA PEMILIK REKENING]" }
  ],
  giftAddress: "[ALAMAT PENGIRIMAN HADIAH]",   /* kosongkan ("") jika tidak diperlukan */

  /* ---------- RSVP ---------- */
  /* Nomor WhatsApp penerima konfirmasi, format 628123456789 (tanpa + atau 0 di depan).
     Selama masih [NOMOR WHATSAPP], tombol "Kirim via WhatsApp" disembunyikan. */
  whatsapp: "[NOMOR WHATSAPP]",
  /* Opsional: simpan RSVP & buku tamu di database agar tampil untuk semua tamu.
     - supabase: isi url, key (publishable/anon key, BUKAN service_role), dan invitation (kode unik tiap pelanggan, contoh "andi-nina").
     - url: alternatif Google Apps Script (Google Sheets); dipakai hanya jika supabase kosong.
     Keduanya kosong = disimpan di browser tamu saja. */
  backend: {
    url: "",
    supabase: {
      url: "https://cuqozpuulngkgjngwogo.supabase.co",
      key: "sb_publishable_2RMTYBUzF8zwOyB_E-VuzQ_c_oJnrMw",
      invitation: "andi-nina"
    }
  }
};
