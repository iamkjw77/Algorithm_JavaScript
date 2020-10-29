function solution(n) {
  // if(n%2 === 0) return '수박'.repeat(n/2);
  // else if(n === 1) return '수';
  // else return '수박'.repeat(Math.floor(n/2)).concat('수');
  return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}


console.log(solution(1)); // '수박수박수박' 출력
