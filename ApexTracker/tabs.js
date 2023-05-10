const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const image = document.getElementById('legends');
const overview = document.getElementById('overview');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');

        if (target.id === 'MatchHistory') {
            image.style.display = 'none';
            overview.style.display = 'none';
        } else {
            image.style.display = 'block'; // Show the image for other tabs
            overview.style.display = 'block'
        }
        if(target.id === 'Progression'){
            image.style.display = 'none'
            overview.style.display = 'none'
        }
    });
});





