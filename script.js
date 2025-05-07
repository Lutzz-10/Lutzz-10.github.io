document.addEventListener('DOMContentLoaded', function () {
    const kontakForm = document.querySelector('.kontak-form');
    if (kontakForm) {
        kontakForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Terima kasih telah mengirim pesan!');
            kontakForm.reset();
        });
    }
});
