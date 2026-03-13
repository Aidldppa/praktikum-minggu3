// Fungsi untuk menjalankan animasi skill
function animateSkills() {
    const counters = document.querySelectorAll('.counter');
    const bars = document.querySelectorAll('.progress-bar');

    // Animasi Angka (Counter)
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const updateCount = () => {
            const speed = target / 50; // Sesuaikan kecepatan di sini
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count) + '%';
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + '%';
            }
        };
        updateCount();
    });

    // Animasi Bar Mengisi
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        // Beri sedikit delay agar angka dan bar mulai barengan
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Jalankan fungsi saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', animateSkills);
