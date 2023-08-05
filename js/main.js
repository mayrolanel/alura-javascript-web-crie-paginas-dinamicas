
const teclas = document.querySelectorAll('.tecla')
const audios = document.querySelectorAll('[id*="som_tecla"]')

teclas.forEach((tecla, index) => {
    tecla.addEventListener('click', () => {
        audios[index].play()
    })

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
})
