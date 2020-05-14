function solution(arrangement) {
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
    }

    return sum;
}
console.log(solution("()(((()())(())()))(())"));
