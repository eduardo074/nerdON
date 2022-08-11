let count = 1;
const btnMobile =document.getElementById('btn-mobile');

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 8000)

function nextImage(){
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

function toggleMenu(event){
    if (event.type == 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active'); 
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('arial-expended', active);
        if(active){
            event.currentTarget.setAttribute('aria-label' , 'Fechar menu')
        } else{
            event.currentTarget.setAttribute('aria-label' , 'Abrir menu')
        }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);