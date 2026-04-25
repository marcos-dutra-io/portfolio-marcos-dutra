import throttle from
        '../../utils/throttle.js';

export default function(){

    const sections=
        document.querySelectorAll(
            'section[id]'
        );

    const navLinks=
        document.querySelectorAll(
            '.nav-link-custom'
        );

    if(!sections.length) return;

    window.addEventListener(
        'scroll',

        throttle(()=>{

            let current='';

            sections.forEach(section=>{

                const top=
                    section.offsetTop-150;

                if(
                    window.scrollY>=top
                ){
                    current=section.id;
                }

            });

            navLinks.forEach(link=>{

                link.classList.remove(
                    'active-nav'
                );

                if(
                    link.getAttribute('href')
                    ===`#${current}`
                ){
                    link.classList.add(
                        'active-nav'
                    );
                }

            });

        },100),

        {passive:true}

    );

}