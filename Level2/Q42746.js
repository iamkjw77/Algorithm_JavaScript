function solution(numbers) {
    var answer = '';
    var arr = [];
    var tmp = 0;


    for(var i=0; i<numbers.length; i++){
      if(numbers[i] < 10){
        arr.push(numbers[i])
      }else{
        tmp = numbers[i];
        while(tmp > 10){
          tmp = Math.floor(tmp/10);
        }
        arr.push(tmp);
      }
    }

    arr.sort(function(a,b){
      if(a === b){

      }
      return b-a;
    });


}
console.log(solution([3, 30, 34, 5, 9]));
