function solution(n) {
    /*
    var answer = [];
    var arr = (n+'').split('').reverse();
    for(var key in arr){
      answer.push(parseInt(arr[key]));
    }
    return answer;
    */
    return (n+'').split('').reverse().map(n => parseInt(n));
    //return (n+'').split('').reverse().map(function(n){return parseInt(n)});

}
console.log(solution(12345)); //[5,4,3,2,1] 출력
