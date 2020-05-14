function solution(arrangement) {
<<<<<<< HEAD
    var arr = arrangement.replace(/\(\)/g,'R').split('');
    var queue = [];
    var cnt = 0;
    var sum = 0;

    console.log(arr);
    /*
    while(arr.length > 0){
      var first = arr.shift();
      if(first + arr[0] === '()'){
        arr.shift();
        queue.push('R');
        continue;
      }else{
        queue.push(first);
      }
    }
    */
    for(var i=0; i<arr.length; i++){
      if(arr[i] === '('){
        for(var j=i+1; j<arr.length; j++){
          if(arr[j] === 'R'){
            cnt++;
          }else if(arr[j] === ')'){
            arr.splice(j,1);
            break;
          }
        }
      }else{continue;}
      sum += cnt+1;
      cnt = 0;
=======
    var arr = arrangement.replace(/\(\)/g,'R');
    var stack = [];
    var sum = 0;

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
>>>>>>> e56d7538caeb5cb09ac6d7e7fb069fac3ddeeb25
    }
    return sum;
}
console.log(solution("()(((()())(())()))(())")); //17출력
