function solution(s) {
    var answer = '';
    var arr = s.split(' ');

    for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr[i].length;j++){
        answer += (j%2 == 0) ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase();
      }
      answer += i != arr.length-1 ? ' ' : '';
    }
    return answer;
    //return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase() + a[1].toLowerCase()});
}
console.log(solution("hello world")); // HeLlO WoRlD 출력
