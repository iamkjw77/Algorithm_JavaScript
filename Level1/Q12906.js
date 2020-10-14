function solution(arr)
{
  // const queue = [];
  // queue.push(arr[0]);
  //
  // for(let i=1,j=0; i<arr.length; i++){
  //   if(arr[i] !== queue[j]){
  //     queue.push(arr[i]);
  //     j++;
  //   }
  // }
  // return queue;
  return arr.filter((v,i) => v !== arr[i+1]);
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
