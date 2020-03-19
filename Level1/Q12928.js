function solution(n) {
    var answer = 0;
    var num = Math.floor(n/2);

    for(var i=1; i<=num; i++){
      if(n%i == 0){
        answer += i;
      }
    }
    answer += n;
    return answer;
}

console.log(solution(10));
