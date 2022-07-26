// background logic for time
let data = new Date() ;
let hora = data.getHours();

let body = document.querySelector('body');
let main = document.querySelector('main');

if (hora > 6 && hora <= 13) {
  body.style.background = 'url(assets/manha.png) center center no-repeat fixed';
  body.style.backgroundSize = 'cover';
  

  main.style.background = 'url(assets/manha.png) no-repeat center center';
  main.style.backgroundSize = 'cover';
  
} else if (hora > 13 && hora <= 18){
  body.style.background = 'url(assets/tarde.png) center center no-repeat fixed';
  body.style.backgroundSize = 'cover';

  main.style.background = 'url(assets/tarde.png) center center no-repeat';
  main.style.backgroundSize = 'cover';

} else {
  body.style.background = 'url(assets/noite.png) center center no-repeat fixed';
  body.style.backgroundSize = 'cover';

  main.style.background = 'url(assets/noite.png) center center no-repeat';
  main.style.backgroundSize = 'cover';
}


let form = document.querySelector('form');
           
form.addEventListener('submit', function(e){

  e.preventDefault();

  let content = document.querySelector('#pokeinformation')
  let contentimg = document.querySelector('#pokeimg')
  let url = "https://pokeapi.co/api/v2/pokemon/";
  let nome = document.querySelector('#pokeinput');

  let valorName = this.pokeinput.value.toLocaleLowerCase();
  url = url + valorName

  let html = ''

  fetch(url)
    .then(content => content.json())
    .then(function(data) {
      
      html = `<p>Nome: ${data.name} 
              </br> 
              Tipo: ${data.types[0].type.name}</p>`
      content.innerHTML = html
  

      html = `<img title='${data.name} N:${data.id}' 
              src='${data.sprites.front_default}'>

              <img title='${data.name} N:${data.id}' 
              src='${data.sprites.back_default}'>`
      contentimg.innerHTML = html

      nome.value = ''

    })
    .catch(function(err){

      content.innerHTML  = `<p>Ops😅, "<u>${valorName.toLocaleUpperCase()}</u>" nao valido </br> tente outra vez</p>`
      
      contentimg.innerHTML = ''

    })
});