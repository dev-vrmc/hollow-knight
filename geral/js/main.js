/*=============== Navegação clicavel ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')    

/*=============== MENU SHOW ===============*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/ 
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== ACAO DO CABECALHO ===============*/ 

const bgHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 900 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== RESPONSIVIDADE DO PARALLAX ===============*/ 
function ajustarAltura() {
    const section = document.querySelector('.home__parallax');
    const imagens = section.querySelectorAll('img');
  
    let maiorAltura = 0;
  
    imagens.forEach(img => {
      if (img) {
        maiorAltura = Math.max(maiorAltura, img.naturalHeight * (section.offsetWidth /* ignora a largura *// img.naturalWidth));/* largura da imagem */
      } else {
        img.onload = () => ajustarAltura(); /*recarrega a altura*/ 
      }
    });
  
    section.style.height = maiorAltura + "px";
  }
  
  window.addEventListener("load", ajustarAltura);
  window.addEventListener("resize", ajustarAltura);
  
  
  /* ============== MUSICA ================== */

const music = document.getElementById("bgMusic");

window.addEventListener("beforeunload", () => {
  localStorage.setItem("bgMusicTime", music.currentTime);
});

window.addEventListener("load", () => {
  const time = localStorage.getItem("bgMusicTime");
  if (time) {
    music.currentTime = time;
    music.play();
  }
});

