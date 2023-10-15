import {debounce} from "debounce";

document.addEventListener('DOMContentLoaded', (e) => {

    //nav
    const nav = document.querySelector('.nav--header');
    const navSidebar = document.querySelector('.nav--sidebar');

    nav.addEventListener('click', navHandler);
    navSidebar.addEventListener('click', navHandler);

    function navHandler(e) {
        e.preventDefault();
        addActive(e.target, e.currentTarget);
        const link = e.target.className === 'nav__item' ? e.target : e.target.closest('a');
        const blockId = link.getAttribute('href').substring(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        const isSidebar = e.currentTarget.classList.contains('nav--sidebar');

        if (isSidebar) {
            const body = document.body;
            body.classList.remove('show-sidebar')
        }
    }

    function addActive(element, parent, classOfItems = 'nav__item') {
        const items = parent.querySelectorAll(`.${classOfItems}`);
        items.forEach((item) => {
            item.classList.remove('active');
        });
        element.closest('a').classList.add('active');
    }


    //to-top handler
    const arrow = document.querySelector('#to-top');
    const header = document.querySelector('.header');
    let headerHeight = header.clientHeight;
    let scrollOffset = document.documentElement.scrollTop;
    const sidebar = document.getElementById('sidebar');

    checkScroll(scrollOffset);
    window.addEventListener('scroll', debounce(onScroll, 300));

    function onScroll() {
        scrollOffset = document.documentElement.scrollTop;
        checkScroll(scrollOffset);
    }


    function checkScroll(scrollOffset) {
        if (scrollOffset >= headerHeight + 200) {
            arrow.classList.remove("hidden");
            header.classList.add("header--fixed");
            sidebar.style.top = '94px';
        }

        if (scrollOffset < headerHeight + 200) {
            arrow.classList.add("hidden");
            header.classList.remove("header--fixed");
            sidebar.style.top = '135px';
        }
    }

    arrow.addEventListener('click', () => {
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })
});