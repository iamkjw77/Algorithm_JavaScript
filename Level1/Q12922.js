function solution(n) {
/*
    var answer = '';
    var a = '수';
    var b = '박';

    if(n%2 == 1){
      if(n==1) return answer += a;
      answer = (a+b).repeat(n/2) + a.repeat(n%2);
    }else{
      answer = (a+b).repeat(n/2);
    }

    return answer;
*/
    var word = '수박';
    return word.repeat(n/2) + (n%2 == 1 ? word.slice(0,1) : '');
}


console.log(solution(6)); // '수박수박수박' 출력
