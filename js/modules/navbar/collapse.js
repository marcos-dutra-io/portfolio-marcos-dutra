export default function(){

    const links=
        document.querySelectorAll(
            '.nav-link-custom'
        );

    const menu=
        document.querySelector(
            '.navbar-collapse'
        );

    if(!menu) return;

    links.forEach(link=>{

        link.addEventListener(
            'click',
            ()=>{

                new bootstrap.Collapse(
                    menu,
                    {
                        toggle:false
                    }
                ).hide();

            });

    });

}