let choice_number = "";
choice_number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(n){
    return n>1 ? n*fact(n-1) : 1;
}


console.log(`Le résultat est: ${}`);