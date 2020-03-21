function solution(n)
{
    /*
    var arr = n.toString().split('');
    var sum = 0;
    for(var key in arr){
      sum += parseInt(arr[key]);
    }
    return sum;
    */
    return (n+'').split('').reduce((acc,curr) => acc+parseInt(curr),0);

}

console.log(solution(1234)); // 10출력
