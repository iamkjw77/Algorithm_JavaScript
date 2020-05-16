function solution(arrangement) {
    var arr = arrangement.replace(/\(\)/g,'R');
    var stack = [];
    var sum = 0;
    console.log(arr);

    for(var i=0; i<arr.length; i++){
      switch(arr[i]){
        case '(' :
          stack.push(0);
          break;

        case 'R' :
          stack = stack.map(v => v+1);
          break;

        case ')' :
          sum += stack.pop()+1;
          break;
      }
    }
    return sum;
}
console.log(solution("()(((()())(())()))(())")); //17출력
