function solution(arr) {
    /*
    var a = arr[0];
    for(var i=0;i<arr.length;i++){
      if(a > arr[i]) a = arr[i];
    }
    if(arr.length <= 1){
      return [-1];
    }else{
      arr.splice(arr.indexOf(a),1);
      return arr;
    }
    */
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1) return [-1];
    return arr;
}

console.log(solution([10])); //[-1]리턴
