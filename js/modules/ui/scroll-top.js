export default function(){

    const button=
        document.querySelector(
            '.scroll-top'
        );

    if(!button) return;

    window.addEventListener(
        'scroll',
        ()=>{

            if(
                window.scrollY>500
            ){
                button.classList.add(
                    'show'
                );
            }
            else{
                button.classList.remove(
                    'show'
                );
            }

        });

}