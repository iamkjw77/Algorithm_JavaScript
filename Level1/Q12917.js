function solution(s) {

    var arr = new Array();
    var answer= '';
    arr = s.split('');
    arr.sort(function(a,b){
      return a<b ? 1 : a>b ? -1 : 0;
    });
    answer = arr.toString().replace(/,/g,'');
    return answer;

    //return s.split('').sort().reverse().join("");
}

console.log(solution('Zaabcdefg')); //gfedcbaaZ 출력
