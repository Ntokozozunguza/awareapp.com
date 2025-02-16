document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const slider = document.querySelector('.slider');
    const sliderPositions = {
        home: '0%',
        search: '50%',
        profile: '100%'
    };

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => {
                nav.querySelector('.icon-container').classList.remove('active');
                nav.querySelector('i').classList.remove('active');
            });
            this.querySelector('.icon-container').classList.add('active');
            this.querySelector('i').classList.add('active');

            const target = this.getAttribute('data-target');
            slider.style.transform = `translateX(${sliderPositions[target]})`;
        });
    });
});
