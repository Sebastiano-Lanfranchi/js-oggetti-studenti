var classe = {
  'nome': 'Sebastiano',
  'cognome': 'Lanfranchi',
  'age': '22',
  'studenti': [],
}

var allievi = {}

allievi.nome = prompt('inserisci il nome')
allievi.cognome = prompt('inserisci il cognome')
allievi.age = prompt('inserisci etá')

classe.studenti.push(allievi);


  for(var x = 0; x < classe.studenti.length; x++) {

    console.log('Questa è lo studente n: ' + (x+1));

    var persona = classe.studenti[x];

    // persona è un oggetto, il nostro "giovine" del while
    for(var key in persona) {
      console.log(key + ' ha valore: ' + persona[key])
    }

  }
