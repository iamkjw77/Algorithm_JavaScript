function solution(progresses, speeds) {
    var answer = [0];
    var arr = progresses.map((v,i) => Math.ceil((100-v)/speeds[i]));
    var max = arr[0];

    for(var i=0, j=0; i<arr.length; i++){
      if(arr[i] <= max){
        answer[j] += 1;
      }else{
        max = arr[i];
        answer[++j] = 1;
      }
    }
    return answer;
}
console.log(solution([93,30,55,60],[1,30,5,40])); //[2,2] 출력
