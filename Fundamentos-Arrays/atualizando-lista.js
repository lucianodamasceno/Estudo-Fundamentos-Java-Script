const listaDeChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
//listaDeChamada.splice(1,2,'Renato'); // exclui a partir do indice 1, 2 itens e o substitui 
// colocando "Renato"

listaDeChamada.splice(2,0,"Rodrigo") // a partir do indice 2, exlui 0 itens e adiciona o item
// "Rodrigo"
;console.log(`Lista de chamada: ${listaDeChamada}`);
