document.addEventListener('DOMContentLoaded', function () {

    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('#dictionary-content section');

    searchInput.addEventListener('input', function (e) {
        const term = e.target.value.toLowerCase().trim();

        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(term)) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    });


    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', function () {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

    // 3. Panzoom.js Inicialização no Modal do DER
    const derImage = document.getElementById('derImage');
    const derModal = document.getElementById('derModal');
    let panzoomInstance = null;

    derModal.addEventListener('shown.bs.modal', function () {
        if (!panzoomInstance) {
            panzoomInstance = Panzoom(derImage, {
                maxScale: 6,
                minScale: 0.3,
                startScale: 0.8,
                contain: 'outside',
                cursor: 'grab'
            });

            derImage.addEventListener('panzoomzoom', (event) => {
   
            });


            document.getElementById('zoomInBtn').addEventListener('click', () => panzoomInstance.zoomIn());
            document.getElementById('zoomOutBtn').addEventListener('click', () => panzoomInstance.zoomOut());
            document.getElementById('resetZoomBtn').addEventListener('click', () => panzoomInstance.reset());


            const derModalBody = document.getElementById('derModalBody');
            derModalBody.addEventListener('wheel', panzoomInstance.zoomWithWheel);
        }
    });
});