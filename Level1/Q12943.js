/*
function solution(num) {
    var cnt = 0;
    while(num>1){
      if(cnt>=500) break;
      if(num % 2 == 0){
        num = num/2;
        cnt++;
        continue;
      }else{
        num = (num*3)+1;
        cnt++;
        continue;
      }
    }
    return cnt>=500 ? -1 : cnt;
}
*/
function solution(num, cnt=0){
  return num == 1 ? (cnt>=500 ? -1 : cnt) : solution(num % 2 == 0 ? num/2 : (num*3)+1, ++cnt);
}
console.log(solution(626331)); // -1리턴
console.log(solution(6)); // 8리턴
