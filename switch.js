function tampilkanHari() {
  let angka = prompt("Masukkan angka (1–7):");
  let namaHari;

  switch (parseInt(angka)) {
    case 1:
      namaHari = "Senin";
      break;
    case 2:
      namaHari = "Selasa";
      break;
    case 3:
      namaHari = "Rabu";
      break;
    case 4:
      namaHari = "Kamis";
      break;
    case 5:
      namaHari = "Jumat";
      break;
    case 6:
      namaHari = "Sabtu";
      break;
    case 7:
      namaHari = "Minggu";
      break;
    default:
      namaHari = "Angka tidak valid! Masukkan antara 1–7.";
  }

  alert(namaHari);
}
