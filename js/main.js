
const teclas = document.querySelectorAll('.tecla')
const audios = document.querySelectorAll('[id*="som_tecla"]')

teclas.forEach((tecla, index)=> {
    tecla.addEventListener('click', ()=> {
        audios[index].play()
    })
})
