const qizil = document.getElementById("btn-one")
const sariq = document.getElementById("btn-two")
const yashil = document.getElementById("btn-tree")
const qizilimg = document.getElementById("img")
const sariqimg = document.getElementById('ing')
const yashilimg = document.getElementById('yashilimg')
const spanqora = document.getElementById('span')
const traficimg = document.getElementById('trafic')




qizil.addEventListener('click', () => {
    qizil.style.opacity = 1
    qizil.style.background = 'red'
    qizilimg.innerHTML = ` <div  class="ing" id="img">
      <h1 class="qizil-text">to'xtash kerak</h1>
            </div>`;





    setTimeout(() => {
        qizil.style.opacity = 0.5
        qizil.style.background = 'red'
        qizilimg.innerHTML = ''

    }, 5000);

})
sariq.addEventListener('click', () => {

    sariq.style.opacity = 1
    sariq.style.background = 'yellow'
    sariqimg.innerHTML = ` <div  class="images" id="img">
      <h1 class="sariq-text">Sabir qilin</h1>
            </div>`


    setTimeout(() => {
        sariq.style.opacity = 0.5
        sariq.style.background = 'yellow'
        sariqimg.innerHTML = ''
    }, 5000);

})
sariq.addEventListener('click', () => {

    qizilimg.classList.toggle('hidden')
})
yashil.addEventListener('click', () => {
    yashil.style.opacity = 1
    qizil.style.background = 'gren'
    yashilimg.innerHTML = ` <div  class="imags" id="img">
            <h1 class="yashil-text">Gazni bosing</h1>
                  </div>`
    setTimeout(() => {
        yashil.style.opacity = 0.5
        yashil.style.background = 'gren'
        yashilimg.innerHTML = ''
    }, 5000);

})
spanqora.addEventListener('click', () => {
    traficimg.style.opacity = 1
   
    traficimg.innerHTML = `
       <div  class="traficimg" id="img">
      <h1 class="trafic-text">Propka</h1>
            </div>
    `
    setTimeout(() => {
        traficimg.style.opacity = 0.5
   
        traficimg.innerHTML = ''
    }, 5000);


})















