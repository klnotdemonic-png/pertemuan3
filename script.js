function cekNilai() {
  let nilai = prompt("Masukkan nilai kamu (0-100):");
  let grade = "";
  let keterangan = "";

  if (nilai >= 90) {
    grade = "A";
    keterangan = "Hebat!";
  } else if (nilai >= 80) {
    grade = "B";
    keterangan = "Bagus";
  } else if (nilai >= 70) {
    grade = "C";
    keterangan = "Cukup";
  } else if (nilai >= 60) {
    grade = "D";
    keterangan = "Perlu belajar lebih giat";
  } else {
    grade = "E";
    keterangan = "Tidak lulus";
  }

  alert(`Nilai kamu: ${grade} (${keterangan})`);
}
