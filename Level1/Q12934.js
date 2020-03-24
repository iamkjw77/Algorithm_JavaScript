function solution(n) {
    var num = Math.floor(Math.sqrt(n));
    if(n == num*num){
      return Math.pow(num+1,2);
    }else{
      return -1;
    }
}
console.log(solution(121)); //144출력
