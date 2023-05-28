const rodada = document.querySelector('#rodada')
const btn_comecar = document.querySelector('#btn_comecar')
const palco = document.querySelector('#palco')

let array_palavra = []
const arrayForca = ['imagens/Cabeca.png', 'imagens/Corpo.png', 'imagens/braco_direito.png', 'imagens/braco_esquerdo.png', 'imagens/perna_direita.png', 'imagens/perna_esquerda.png']
let contadorMorte = 0
let letrasUsadas = []
let rodadas = 1
let vitoria = 0
let quantidade_para_vitoria = 0

const criarComecoJogo = ()=>{
    const novaDiv = document.createElement('div')
    novaDiv.setAttribute('style', `width:300px; height:300px; display:flex; flex-direction:column; justify-content:center;align-items: center; gap: 20px`)

    const palavraNova = document.createElement('input')
    palavraNova.setAttribute('style', `padding:10px; border-radius:10px; border:1px solid black; width:150px; height:50px`)
    palavraNova.setAttribute('type', 'text')
    palavraNova.setAttribute('type', 'password')
    palavraNova.setAttribute('maxlength', 12)
    palavraNova.setAttribute('id', 'palavra')
    
    const btnComecarJogo = document.createElement('button')
    btnComecarJogo.setAttribute('style', `padding:10px; border:2px solid gray; border-radius:10px; cursor:pointer; width:150px`)
    btnComecarJogo.setAttribute('id', 'btn_comecar_jogo')
    btnComecarJogo.innerHTML = 'Começar'

    novaDiv.appendChild(palavraNova)
    novaDiv.appendChild(btnComecarJogo)
    palco.appendChild(novaDiv)
}

const criarForca = ()=>{
    const divForca = document.createElement('div')
    divForca.setAttribute('style', 'position:absolute; left:0; top:10vh; width:400px; height:400px')
    divForca.setAttribute('id', 'div_forca')
    

    const forca = document.createElement('img')
    forca.src = 'imagens/forca.png'
    forca.setAttribute('style', 'position:absolute; left:50px; top:50px')
    divForca.appendChild(forca)
    palco.appendChild(divForca)
}

const fimDeJogo = ()=>{
    array_palavra = []
    contadorMorte = 0
    letrasUsadas = []
    rodadas++
    vitoria = 0
    quantidade_para_vitoria = 0

    palco.innerHTML = ''
    const btnReiniciar = document.createElement('button')
    btnReiniciar.setAttribute('style', 'padding:10px; border:3px solid red; background-color:lightcoral; border-radius:10px; width:100px; height:50px')
    btnReiniciar.innerHTML = 'Novo Jogo'
    palco.appendChild(btnReiniciar)

    btnReiniciar.addEventListener('click', comecarJogo)
    btnReiniciar.addEventListener('click', (evt)=>{
        evt.target.remove()
    })
}

const controleLetra = ()=>{
    const divInput = document.createElement('div')
    divInput.setAttribute('style', 'display:flex; flex-direction:column; width:fit-content; height:fit-content; gap:30px')

    const inputLetra = document.createElement('input')
    inputLetra.setAttribute('style', `padding:10px; border-radius:10px; border:1px solid black; width:150px; height:50px`)
    inputLetra.setAttribute('type', 'text')
    inputLetra.setAttribute('id', 'letra')
    divInput.appendChild(inputLetra)

    const btnInput = document.createElement('button')
    btnInput.setAttribute('style', 'border-radius:10px; padding:10px; border:2px solid gray; background-color:light-gray')
    btnInput.innerHTML = 'Submit'
    divInput.appendChild(btnInput)

    palco.appendChild(divInput)
    
    const letraHTML = [...document.getElementsByClassName('letra_palavra')]
    const divLetrasUsadas = document.createElement('div')
    divLetrasUsadas.setAttribute('style', 'width:20vw; height:40vh; position:absolute; left: 75vw; bottom:30vh; border:1px solid black; padding:10px; font-family:cursive; font-size:1.5em')
    palco.appendChild(divLetrasUsadas)
    btnInput.addEventListener('click', ()=>{
        const letra = document.querySelector('#letra')
        const l = letra.value.toLowerCase()
        if(l.length > 1 || typeof(l) != 'string' || l ==''){
            alert('Digite uma letra')
        }else{
            if(letrasUsadas.includes(l)){
                alert('Essa letra já foi utilizada')
            }else{
                letrasUsadas.push(l)
                divLetrasUsadas.innerHTML += l + ', '
                
                if(array_palavra.includes(l)){
                    letraHTML.forEach((el)=>{
                        if(el.firstChild.innerHTML == l){
                            el.firstChild.style.display = 'block'
                        }  
                    })

                    vitoria = 0

                    letraHTML.forEach((el)=>{
                        if(el.firstChild.style.display == 'block'){
                            vitoria++
                            if(vitoria == quantidade_para_vitoria){
                                setTimeout(() => {
                                    alert('Parabéns, você acertou a palavra')
                                    fimDeJogo() 
                                }, 500);    
                            }
                        }
                    })    
                    
                }else{
                    const div_forca = document.querySelector('#div_forca')

                    if(contadorMorte == 0){
                        const img = document.createElement('img')
                        img.src = arrayForca[contadorMorte]
                        img.setAttribute('style', 'position:absolute; left:310px; top:105px')
                        div_forca.appendChild(img)
                        contadorMorte++
                    }
                    else if(contadorMorte == 1){
                        const img = document.createElement('img')
                        img.src = arrayForca[contadorMorte]
                        img.setAttribute('style', 'position:absolute; left:352px; top:185px')
                        div_forca.appendChild(img)
                        contadorMorte++
                    }else if(contadorMorte == 2){
                        const img = document.createElement('img')
                        img.src = arrayForca[contadorMorte]
                        img.setAttribute('style', 'position:absolute; left:365px; top:185px')
                        div_forca.appendChild(img)
                        contadorMorte++
                    }else if(contadorMorte == 3){
                        const img = document.createElement('img')
                        img.src = arrayForca[contadorMorte]
                        img.setAttribute('style', 'position:absolute; left:297px; top:183px')
                        div_forca.appendChild(img)
                        contadorMorte++
                    }else if(contadorMorte == 4){
                        const img = document.createElement('img')
                        img.src = arrayForca[contadorMorte]
                        img.setAttribute('style', 'position:absolute; left:360px; top:260px')
                        div_forca.appendChild(img)
                        contadorMorte++
                    }else if(contadorMorte == 5){
                        const img = document.createElement('img')
                        img.src = arrayForca[contadorMorte]
                        img.setAttribute('style', 'position:absolute; left:282px; top:260px')
                        div_forca.appendChild(img)
                        contadorMorte++
                    }else {                
                        alert('FIM DE JOGO')
                        fimDeJogo()
                        
                    }
                }
            }
        }
        letra.value = ''
    })
}

const comecarJogo = ()=>{
    rodada.innerHTML = `Rodada: ${rodadas}`
    btn_comecar.removeEventListener('click', comecarJogo)
    criarComecoJogo()

    const palavra = document.getElementById('palavra')
    const btn_comecar_jogo = document.querySelector('#btn_comecar_jogo')

    btn_comecar_jogo.addEventListener('click', (evt)=>{
        evt.target.parentNode.remove()

        criarForca()

        const divLetra = document.createElement('div')
        divLetra.setAttribute('style', 'display:flex; justify-content:center;align-items: center; width: fit-content; height:100px; gap:30px; position:relative; top:30vh')

        const palavra_jogo = palavra.value.toLowerCase()

        if(palavra_jogo.length < 2){
            alert('Sua palavra é muito pequena, escolha uma palavra maior')
            palco.innerHTML = ''
            comecarJogo()
        }else{
            array_palavra = palavra_jogo.split('')
            array_palavra.forEach((el, i)=>{
                const letra_palavra = document.createElement('div')
                letra_palavra.setAttribute('style', 'display:flex; justify-content:center;align-items: center; border-bottom: 2px solid black; width:50px; height:50px')
                letra_palavra.setAttribute('class', 'letra_palavra')
                
                const conteudoLetra = document.createElement('div')
                conteudoLetra.setAttribute('style', 'font-family: cursive; font-weight:bold')
                conteudoLetra.setAttribute('id', `l${i}`)
                conteudoLetra.setAttribute('claa','conteudo-letra')
                conteudoLetra.style.display = 'none'
                conteudoLetra.innerHTML = el

                letra_palavra.appendChild(conteudoLetra)
                divLetra.appendChild(letra_palavra)

            })
            palco.appendChild(divLetra)
            quantidade_para_vitoria = array_palavra.length
            controleLetra()
        }
    }) 
}

btn_comecar.addEventListener('click', comecarJogo)