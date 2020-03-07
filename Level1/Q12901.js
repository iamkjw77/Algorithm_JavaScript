/*
function solution(a, b) {
    var answer = '';
    var week = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    var month = [31,29,31,30,31,30,31,31,30,31,30,31];
    var sum = 0;
    for(var i=0;i<a-1;i++){
      sum += month[i];
    }
    sum += b-1;
    var answer = week[sum%7];
    return answer;
}
*/

function solution(a,b){
  var answer = '';
  var date = new Date(2016,a-1,b);
  var week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  return week[date.getDay()]; //date.getDay()는 숫자로 출력
}

/*테스트*/
console.log(solution(3,2));
