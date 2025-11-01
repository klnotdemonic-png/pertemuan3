function cekUsia() {
  let usia = prompt("Masukkan usia kamu:");

  if (usia < 13) {
    alert("Kamu termasuk kategori Anak-anak.");
  } else if (usia >= 13 && usia < 18) {
    alert("Kamu termasuk kategori Remaja.");
  } else {
    alert("Kamu termasuk kategori Dewasa.");
  }
}
