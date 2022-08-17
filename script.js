let count=1;const btnMobile=document.getElementById("btn-mobile"),setaMenu=document.getElementById("seta");document.getElementById("radio1").checked=!0,setInterval(function(){nextImage()},8e3);function nextImage(){count++,4<count&&(count=1),document.getElementById("radio"+count).checked=!0}function toggleMenu(a){"touchstart"==a.type&&a.preventDefault();const b=document.getElementById("nav");b.classList.toggle("active");const c=b.classList.contains("active");a.currentTarget.setAttribute("arial-expended",c),c?a.currentTarget.setAttribute("aria-label","Fechar menu"):a.currentTarget.setAttribute("aria-label","Abrir menu")}btnMobile.addEventListener("click",toggleMenu),setaMenu.addEventListener("click",toggleMenu),btnMobile.addEventListener("touchstart",toggleMenu);




