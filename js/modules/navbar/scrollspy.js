export default function(){

    const sections=
        document.querySelectorAll(
            'section[id]'
        );

    const navLinks=
        document.querySelectorAll(
            '.nav-link-custom'
        );

    window.addEventListener(
        'scroll',
        ()=>{

            let current='';

            sections.forEach(section=>{

                const top=
                    section.offsetTop-150;

                if(
                    window.scrollY>=top
                ){
                    current=
                        section.id;
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

        });

}