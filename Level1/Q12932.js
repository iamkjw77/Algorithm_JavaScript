function solution(n) {
  // return (n+'').split('').reverse().map(v => parseInt(v));
  // return n.toString().split('').reverse().map(v => parseInt(v));
  const answer = [];
  const arr = (n+'').split('').reverse();
  for(let key in arr){
    answer.push(parseInt(arr[key]));
  }
  return answer;
}
console.log(solution(12345)); //[5,4,3,2,1] 출력
