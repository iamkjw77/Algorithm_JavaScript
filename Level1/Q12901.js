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
/*테스트*/
console.log(solution(5, 20));
