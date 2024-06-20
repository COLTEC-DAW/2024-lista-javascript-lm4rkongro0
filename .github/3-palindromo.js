function palindromo(palavra){
    let len = palavra.length;
    for(let i = 0; i < len / 2; i++){
        if (palavra[i] != palavra[len - 1 - i]) {
            return false;
        }
    }
    return true;
}