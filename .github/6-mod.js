function mod(num, divisor){
    if(num < divisor){
      return num == 0;
    }

    return mod(num - divisor, divisor);
}
  