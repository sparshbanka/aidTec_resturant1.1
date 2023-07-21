let iconmenu = document.getElementById('OpenMenu');
let menu = document.querySelector('.menu');
let closeReser = document.getElementById('closeResrv');
let reservation = document.getElementById('reservation');
let btnResrv = document.querySelectorAll('.btnResrv')


iconmenu.onclick = ()=>{
    iconmenu.classList.toggle('fa-times');
    menu.classList.toggle('active')
}

let header = document.getElementById('header');

window.onscroll = function(){
    // console.log(this.scrollY)
    if(this.scrollY >=200){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}




closeReser.onclick = () =>{
    reservation.classList.remove('active');
}
btnResrv.forEach(btn =>{
    btn.onclick = () => {
        reservation.classList.add('active');
    }
})