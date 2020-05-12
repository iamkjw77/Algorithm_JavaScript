function solution(priorities, location) {
    var queue = [];
    var arr = priorities.map((v,i) => {
      return {index:i, priority:v};
    });

    while(arr.length > 0){
      var firstEle = arr.shift();
      var hasHighEle = arr.some(v => v.priority > firstEle.priority);
      if(hasHighEle){
        arr.push(firstEle);
      }else{
        queue.push(firstEle);
      }
    }

    return queue.findIndex(v => v.index === location)+1;
}
console.log(solution([2,1,3,2], 2)); // C-D-A-B 순으로 출력 , 따라서 1출력
