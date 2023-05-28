let array = ['p','e','d','r','o']

let usadas = ['a','e','d','r','o', 's']

let quantidade_para_vitoria = array.length
let vitoria = 0

array.forEach((el)=>{
    if(usadas.includes(el)){
        vitoria++
    }
    if(vitoria == quantidade_para_vitoria){
        console.log('vitoria')
    }
})
