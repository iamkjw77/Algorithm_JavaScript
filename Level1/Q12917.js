function solution(s) {
  // return s.split('').sort((a,b) =>{
  //   return a>b ? -1 : (a === b ? 0 : 1);
  // }).join('');
  return s.split('').sort().reverse().join('');
}
console.log(solution('Zaabcdefg')); //gfedcbaaZ 출력
