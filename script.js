function sapa() {
    alert("Halo, selamat datang di Website Ario!");
}

function ubahTeks() {
    document.getElementById("teks").innerHTML =
        "Saya sedang belajar JavaScript!";
}

function ubahWarna() {
    document.body.style.backgroundColor = "lightblue";
}

document.getElementById("tanggal").innerHTML =
    "Tanggal hari ini: " +
    new Date().toLocaleDateString("id-ID");