document.body.addEventListener("keydown",pulsar);
function pulsar(ev) {
    if(ev.altKey && ev.key=="F12"){
        document.body.style.backgroundImage="url(https://picsum.photos/1080/720)";
    }    
}