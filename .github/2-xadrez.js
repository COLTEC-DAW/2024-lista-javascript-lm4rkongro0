function xadrez(n){
    for (let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < linhas; j++){
            if((i + j) % 2 == 0) {
                linha += '#';
            }else{
                linha += ' ';
            }
        }

        console.log(linha);
    }
  }