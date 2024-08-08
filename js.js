document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulir berhasil dikirim!');
});

document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const kucing = document.getElementById('kucing').value;

    // Simpan data ke sessionStorage
    sessionStorage.setItem('nama', nama);
    sessionStorage.setItem('alamat', alamat);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('telepon', telepon);
    sessionStorage.setItem('kucing', kucing);

    // Arahkan ke halaman invoice setelah submit
    window.location.href = 'invoice.html';
});

document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah berada di halaman invoice
    if (window.location.pathname.includes('invoice.html')) {
        // Ambil data dari sessionStorage
        const nama = sessionStorage.getItem('nama');
        const alamat = sessionStorage.getItem('alamat');
        const email = sessionStorage.getItem('email');
        const telepon = sessionStorage.getItem('telepon');
        const kucing = sessionStorage.getItem('kucing');

        // Tampilkan detail invoice
        const invoiceDetails = `
            <h3>Invoice</h3>
            <p>Nama: ${nama ? nama : 'Data tidak tersedia'}</p>
            <p>Alamat: ${alamat ? alamat : 'Data tidak tersedia'}</p>
            <p>Email: ${email ? email : 'Data tidak tersedia'}</p>
            <p>No. Telepon: ${telepon ? telepon : 'Data tidak tersedia'}</p>
            <p>Kucing: ${kucing ? kucing : 'Data tidak tersedia'}</p>
        `;
        document.getElementById('invoiceDetails').innerHTML = invoiceDetails;

        // Hapus data dari sessionStorage setelah ditampilkan
        sessionStorage.removeItem('nama');
        sessionStorage.removeItem('alamat');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('telepon');
        sessionStorage.removeItem('kucing');
    }
});
