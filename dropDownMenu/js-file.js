(() => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const selected = dropdown.querySelector('.selected');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu > li');
        console.log(dropdown);
        select.addEventListener('click', () => {
            select.classList.toggle('select-click');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');

        });
        options.forEach(option =>  { 
            option.addEventListener('click', () => {

                selected.textContent = option.textContent;
                select.classList.remove('select-click');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');

                options.forEach(
                    option => {option.classList.remove('active');}
                );
                option.classList.add('active');
            }) });
});
})();
console.log('t');
