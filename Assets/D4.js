/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2){
    return l1*l2;
}
console.log(area(3, 5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2){
    if (num1 === num2){
        return (num1+num2)*3;
    }
    return num1+num2;
}
console.log(crazySum(4, 4));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(input){
    const subtract = 19;
    if (input > subtract){
        return (input-subtract)*3;
    }
    return Math.abs(input-subtract);
}
console.log(crazyDiff(3));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if (n >= 20 && n <= 100 || n === 400){
        return true;
    }
}
console.log(boundary(20));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string){
    if(string.search("EPICODE") === 0){
        return string;
    }
    return "EPICODE"+string;
}
console.log(epify(" ci piace"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num){
    if(num < 0){
        return undefined;
    }
    if(num % 3 === 0 || num % 7 === 0){
        return true;
    }
    return false;
}
console.log(check3and7(13));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string){
    const arrayString = string.split("");
    const stringToReturn = arrayString.reverse().join();
    return stringToReturn.replaceAll(",", "");
}
console.log(reverseString("EPICODE"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string){
    // Dividere la stringa in un array di singole parole
    let arrayOfWords = string.split(" ");
    let firstLetters = [];
    
    // Estrarre da ogni stringa la prima lettera e inserirla in un array
    for (word of arrayOfWords){
        let firstLetter = word[0];
        firstLetters.push(firstLetter.toUpperCase());
    }

    // Eliminare da ogni parola la prima lettera e sostituirla con le maiuscole
    for (let i = 0; i < arrayOfWords.length; ++i){
        arrayOfWords[i] = arrayOfWords[i].slice(1);
        arrayOfWords[i] = firstLetters[i] + arrayOfWords[i];
    }

    // Ricombinare l'array in una stringa ed eliminare le virgole
    let stringToReturn = arrayOfWords.join();
    stringToReturn = stringToReturn.replaceAll(",", " ")

    return stringToReturn;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string){
    let newString = string;
    newString = newString.slice(1);
    newString = newString.slice(0, -1);
    return newString;
}
console.log(cutString("ciao bello"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let arrayToReturn = [];
    for (i = 0; i < n; ++i){
        let numberToAdd = Math.floor(Math.random()*11);
        arrayToReturn.push(numberToAdd);
    }
    return arrayToReturn;
}
console.log(giveMeRandom(10));

/* SCRIVI QUI LA TUA RISPOSTA */
