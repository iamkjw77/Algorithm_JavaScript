/*
function solution(arr)
{
  var answer = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i-1] != arr[i]){
      answer.push(arr[i]);
    }
  }
  return answer;
}
*/

/*
function solution(arr){
  return arr.filter(function(val,index){
    return val != arr[index+1]; //요소값과 다음 인덱스의 요소값이 같지 않은 것만 리턴
  });
}
*/
function solution(arr){
  return arr.filter((val,index) => val != arr[index+1]);
}

console.log(solution([4,4,4,3,3])); //[4,3]출력
