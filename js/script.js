function verificar() {
    var proprio = document.getElementById('nome')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var res2 = document.querySelector('div#res')

    

if (fano.value > ano || fano.value.length == 0 || proprio.value == null){
    window.alert('DATA ERRO!')
} else {
  
   var sex = document.getElementsByName('radsex')
   var idade = ano - Number (fano.value)
   var campo1 = proprio.value
   var genero = ''
   //colocando imagem
   var img = document.createElement('img')
   img.setAttribute('id','foto')

   if (sex[0].checked){
       genero ='Masculino'
       if (idade >= 0 && idade <= 10){
           //criança
          img.setAttribute('src','foto-meninocrc.png')
           } else if ( idade >= 10 && idade <= 18) {
            //adolecente
            img.setAttribute('src','foto-adolescente2.png')
       }else if ( idade >= 19 && idade <= 50) {
        //adulto
        img.setAttribute('src','foto-homem.png')
   }else if ( idade > 51 ) {
    //velho
    img.setAttribute('src','foto-velho.png')
}
   }    else if (sex[1].checked){
                genero ='Femenino'
    if (idade >= 0 && idade <= 10){
        //criança
       img.setAttribute('src','foto-meninacrc.png')
        } else if ( idade >= 10 && idade <= 18) {
         //adolecente
         img.setAttribute('src','foto-adolescente.png')
    }else if ( idade >= 19 && idade <= 50) {
     //adulto
     img.setAttribute('src','foto-mulher.png')
}else if ( idade > 51 ) {
 //velho
 img.setAttribute('src','foto-velha.png')
}
       }
    res.style.textAlign = 'center'
    res2.style.textAlign = 'center'
    res.innerHTML =`Oi, ${campo1} você tem ${idade} anos, seu gênero é ${genero}`
    res2.appendChild(img)
}
}
