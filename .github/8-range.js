function range(min, max, i = 1){
    let array = [];
    for (let j = min; j <= max; j += i){
        array.push(j);
    }
    
    return array;
}