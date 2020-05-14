function solution(n) {
    var arr = [4,1,2];
    var answer = '';

    while(n){
      answer = arr[n%3] + answer;
      n = Math.floor((n-1)/3);
    }
    return answer;
}
console.log(solution(14));
