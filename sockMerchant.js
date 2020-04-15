
//const n = 9;
//let array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 15;
let array = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];


    let pairs = sockMerchant(n, array);
    console.log(`Total de pares de meias possíveis: ${pairs}`);

   //let array2 = 
   let string = '44 55 11 15 4 72 26 91 80 14 43 78 70 75 36 83 78 91 17 17 54 65 60 21 58 98 87 45 75 97 81 18 51 43 84 54 66 10 44 45 23 38 22 44 65 9 78 42 100 94 58 5 11 69 26 20 19 64 64 93 60 96 10 10 39 94 15 4 3 10 1 77 48 74 20 12 83 97 5 82 43 15 86 5 35 63 24 53 27 87 45 38 34 7 48 24 100 14 80 54';
    arrString = string.split(' ');
    console.log(arrString); 
    console.log(string); 



function sockMerchant(n, array) {

    function inputValidation (){

        if ((n >= 1) && (n <= 100) && (array.length <= n) && (max >= 1) && (max <= 100) )
           return true;
    }
    
    if (inputValidation){

        let totalPairs = 0;
        
        for(let i = 0; i < array.length; i++){

            let itemRepeated = 0;

            for(let j = 0; j < array.length; j++){
                console.log(`i:${i} j:${j}`);
                if(i !== j ){ // pra nao comparar o valor com ele mesmo
                    
                    if(array[i] === array[j]){ //se o valor da posicao dos arrays forem iguais
                        itemRepeated++; // par encontrado incrementado
                        console.log(`Achou par de ${array[i]} = [${array[j]}] 
                        [i]:${i} [j]:${j}
                        array[i]:${array[i]} x array[j]:${array[j]}
                        `);
                        console.log(array);
                        array.splice(j, 1); // remove o item do array j
                        j--;
                        i--;
                        console.log(array);
                    }
                }
            }

            if(itemRepeated){
                //console.log(array[i]);
                array.splice(array[i], 1);
                console.log(`removendo o i: ${array[i]}`);
                console.log(`itemRepeated: ${itemRepeated}`);
                totalPairs += Math.trunc((1 + itemRepeated) / 2); 
                console.log(`totalPairs: ${totalPairs}`); 

            }
        }
        
        return totalPairs;  
    }
}




