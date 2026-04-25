import initScrollSpy from
        './modules/navbar/scrollspy.js';

import initCollapse from
        './modules/navbar/collapse.js';

import initHeaderScroll from
        './modules/navbar/header-scroll.js';

import initScrollTop from
        './modules/ui/scroll-top.js';


document.addEventListener(
    'DOMContentLoaded',
    ()=>{

        initScrollSpy();
        initCollapse();
        initHeaderScroll();
        initScrollTop();

    });