function solution(a, b) {
    
    var arr = new Array();
    var answer = 0;

    if(a>b){
      for(var i=b;i<=a;i++){
        arr.push(i);
      }
    }else if(a<b){
      for(var i=a;i<=b;i++){
        arr.push(i);
      }
    }else{
      answer = a;
    }

    for(var key in arr){
      answer += arr[key];
    }

    return answer;


    //return (a+b)*(Math.abs(b-a)+1)/2;
}

console.log(solution(-2,-1));
