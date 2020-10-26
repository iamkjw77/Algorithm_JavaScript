function solution(s) {
  // const regExp = /^[0-9]*$/g;
  // return regExp.test(s) ? (s.length === 4 || s.length === 6 ? true : false) : false;
  let result = false;
  if((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) return true;
  return result;
}
console.log(solution('155511')); //true 출력
