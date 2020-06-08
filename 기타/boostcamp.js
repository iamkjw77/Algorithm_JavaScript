/*
function solution(arr) {
    var answer = [];
    var cnt = 1;

    arr.sort((a,b) => a-b);

    while(arr.length > 0){
      var a = arr.shift();
      cnt = 1;
      if(a === arr[0]){
        for(var i=0; i<=arr.length; i++){
          if(a === arr[0]){
            arr.shift();
            cnt++;
          }
        }
      }
      answer.push(cnt);
    }

    answer = answer.filter(v => v>1);
    return answer.length > 0 ? answer : -1;
}
*/
function solution(arr) {
  var counts = Array(arr.length).fill(0);
  arr.map(val => counts[val]++);
  counts = counts.filter(count => count > 1);
  return counts.length === 0 ? [-1] : counts;
}
console.log(solution([1,2,3]));
