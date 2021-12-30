
let menuMobile = document.querySelector('.menuMobile')



function abriroufecharmenu() {
  let aberto = false

  if (aberto === true) {
    aberto = false
    menuMobile.classList.remove('aberto')
  } else if (aberto === false)
    aberto = true
  menuMobile.classList.add('aberto')
}