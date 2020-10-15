function solution(a, b, sum = 0) {
  // const arr = [];
  // if(a > b){
  //   let tmp;
  //   tmp = b;
  //   b = a;
  //   a = tmp;
  // }
  // for(let i=a; i<=b; i++){
  //   arr.push(i);
  // }
  // return arr.reduce((acc,curr) => {
  //   return acc + curr
  // },0);
  for(let i = Math.min(a,b); i <= Math.max(a,b); i++) sum += i;
  return sum;
}

console.log(solution(-2,-1));
