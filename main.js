// Il computer deve generare 15 numeri casuali da 0 a 64.
var numeri_random = [];

// imposto una funzione per generare un numero casuale tra un min e un max.
function  number_generator( min, max){
var number_Range = Math.floor(Math.random() * (max- min) + 1);
return number_Range;
}

// utilizzo un ciclo for per riempire l'array
while (numeri_random.length < 15) {
  var numero = number_generator(0,64);
  if(numeri_random.includes(numero) == false){
  numeri_random.push('Number_' + numero);
  }
}

console.log(numeri_random);

// coloro i quadrati di bianco con classe CSS del bianco
$('.square').addClass('white');

//assegno un classe simile ai numeri random
$('.square').each(function(i){
  $(this).addClass('Number_' + i++);
});

// faccio il confronto
$('.row div').click(function(i){
  if($('.row div').hasClass(numeri_random[i])) {$('.white').toggleClass('green')}
  else {$('.white').toggleClass('red')};
});
