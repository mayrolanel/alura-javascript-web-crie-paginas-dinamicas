let tecla_pom = document.querySelector('.tecla_pom')

tecla_pom.addEventListener('click', ()=> {
    const pom = document.querySelector('#som_tecla_pom')
    pom.play()
});

const teclas = document.querySelectorAll('.tecla')
const audios = document.querySelectorAll('[id*="som_tecla"]')

teclas.forEach((tecla, index)=> {
    tecla.addEventListener('click', ()=> {
        audios[index].play()
    })
})

let tecla_clap = document.querySelector('.tecla_clap')
let tecla_tim = document.querySelector('.tecla_tim')
let tecla_puff = document.querySelector('.tecla_puff')
let tecla_splash = document.querySelector('.tecla_splash')
let tecla_toim = document.querySelector('.tecla_toim')
let tecla_psh = document.querySelector('.tecla_psh')
let tecla_tic = document.querySelector('.tecla_tic')
let tecla_tom = document.querySelector('.tecla_tom')

