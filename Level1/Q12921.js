function solution(n) {
  const prime_num = new Set();
  for(let i=1; i<=n; i+=2){
    prime_num.add(i);
  }
  prime_num.delete(1);
  prime_num.add(2);
  for(let j=3; j<=Math.sqrt(n); j++){
      if(prime_num.has(j)){
        for(let k=j*2; k<=n; k+=j){
          prime_num.delete(k);
        }
    }
  }
  return prime_num.size;
}

console.log(solution(17)); //7출력
