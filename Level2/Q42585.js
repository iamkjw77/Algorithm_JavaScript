function solution(arrangement) {
    var arr = arrangement.split('');
    var queue = [];
    var s = 0;
    var e = [];
    var cnt = 0;
    var sum = 0;


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

    for(var i=0; i<queue.length; i++){
      if(queue[i] === '('){
        for(var j=i+1; j<queue.length; j++){
          if(queue[j] == 'R'){
            cnt++;
          }else if(queue[j] === ')'){
            queue.splice(j,1);
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
