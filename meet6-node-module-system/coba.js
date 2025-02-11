function cetakNama(nama) {
    return `Halo, Nama saya ${nama}`;
}

const Pi = 3.14;

const mahasiswa = {
    nama: 'Doddy Ferdiansyah',
    umur: 20,
    cetakMhs() {
        return `Halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`
    }
}

class orang {
    constructor() {
        console.log('objek orang telah dibuat!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.Pi = Pi;

// module.exports.mahasiswa = mahasiswa;
// module.exports.orang = orang;

// module.exports = {
//     cetakNama: cetakNama,
//     Pi: Pi,
//     mahasiswa: mahasiswa,
//     orang: orang
// }

// kalo nama properti sama dengan dengan nama valuenya
// pakai notasi es 6
module.exports = { cetakNama, Pi, mahasiswa, orang }