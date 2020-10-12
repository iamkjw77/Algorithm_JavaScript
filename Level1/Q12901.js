// function solution(a, b) {
//     let sum = 0;
//     const days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
//     const month = [31,29,31,30,31,30,31,31,30,31,30,31];
//
//     for(let i=0; i<a-1; i++){
//       sum += month[i];
//     }
//     sum += b-1;
//     return days[sum%7];
// }
function solution(a, b){
  const date = new Date(2016,a-1,b);
  const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  return week[date.getDay()]; // date.getDay()는 숫자로 출력
}
console.log(solution(2,3));
