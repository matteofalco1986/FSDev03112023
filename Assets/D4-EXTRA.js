// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(numbers){
    let sum = 0;
    for (const number of numbers){
        if (number > 5){
            sum += number;
            console.log(`${number} is greater than 5`);
        }
    }
    return sum;
}

// ESERCIZIO 1 TESTING
/*
    myArray = giveMeRandom(20, 11);
    console.log(myArray);
    console.log(checkArray(myArray))
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

function shoppingCartTotal(shoppingCart){
    let sum = 0;
    for (const item of shoppingCart){
        sum += item.price * item.quantity;
    }
    return sum;
}

// ESERCIZIO 2 TESTING
    shoppingCart = [
    {
        price: 30,
        name: "Scarpe",
        quantity: 2,
        id: 1
    },
    {
        price: 25,
        name: "Pantaloni",
        quantity: 3,
        id: 2
    },
    {
        price: 50,
        name: "Camicia",
        quantity: 1,
        id: 3
    }, 
    {
        price: 20,
        name: "Giacca",
        quantity: 3,
        id: 4
    } 
    ]
    console.log(shoppingCartTotal(shoppingCart));


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(itemToAdd, arrayToAddTo){
    arrayToAddTo.push(itemToAdd);
    return arrayToAddTo.length;
}

// ESERCIZIO 3 TESTING

/*
    socks = {
        price: 10,
        name: "Calze",
        quantity: 2,
        id: 5
    }
    console.log(addToShoppingCart(socks, shoppingCart));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart){
    let itemToReturn = shoppingCart[0];
    for (const item of shoppingCart){
        if (item.price > itemToReturn.price){
            itemToReturn = item;
        }
    }
    return itemToReturn;
}

// ESERCIZIO 4 TESTING
// console.log(maxShoppingCart(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart){
    return shoppingCart[shoppingCart.length-1];
}

// ESERCIZIO 5 TESTING
// console.log(latestShoppingCart(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x){
    let i = 0;
    while(i < 3){
        let numbersArray = giveMeRandom(1, 10);
        console.log(numbersArray[0]);
        if (numbersArray[0] > x){
            ++i;
        } else {
            i = 0;
        }
    }
}

// ESERCIZIO 6 TESTING
// loopUntil(0);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(myArray){
    sum = 0;
    for (const number of myArray){
        sum += number;
    }
    return sum/myArray.length;
}


// ESERCIZIO 7 TESTING

/*
    daArray = giveMeRandom(10, 10);
    console.log(daArray);
    console.log(average(daArray));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(myArray){
    let myString = "";
    for (const string of myArray){
        if (string.length > myString.length){
            myString = string;
        }
    }
    return myString;
}

// ESERCIZIO 8 TESTING    
/*
    stringsArray = ['ciao', 'flabanaba', 'non mi piace', 'hola', 'bello'];
    console.log(longest(stringsArray));
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function giveMeRandom(n, multiplier){
    let arrayToReturn = [];
    for (i = 0; i < n; ++i){
        let numberToAdd = Math.floor(Math.random()*multiplier);
        arrayToReturn.push(numberToAdd);
    }
    return arrayToReturn;
}