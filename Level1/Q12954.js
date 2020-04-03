function solution(x, n) {
    /*
    var answer = [];
    var y = x;

    while(answer.length < n){
      answer.push(x);
      x += y;
    }
    return answer;
    */
    return Array(n).fill(x).map((v,i)=>(i+1)*v);
}
console.log(solution(2,5)); //[2,4,6,8,10] 출력
