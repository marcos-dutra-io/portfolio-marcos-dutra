export default function(
    callback,
    delay
){

    let waiting=false;

    return function(){

        if(!waiting){

            callback();

            waiting=true;

            setTimeout(()=>{
                waiting=false;
            },delay);

        }

    }

}