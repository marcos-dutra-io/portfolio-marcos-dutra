import throttle from
        '../../utils/throttle.js';

export default function(){

    const header=
        document.querySelector(
            '.main-header'
        );

    if(!header) return;

    window.addEventListener(
        'scroll',

        throttle(()=>{

            if(window.scrollY>50){
                header.classList.add(
                    'scrolled'
                );
            }
            else{
                header.classList.remove(
                    'scrolled'
                );
            }

        },100),

        {passive:true}

    );

}