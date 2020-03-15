function solution(s) {
    /*
    var cnt = 0;
    var arr = s.split('');
    var arrType = new Array();
    var num = /[0-9]/;

    for(var key in arr){
      if(arr.length == 4 || arr.length == 6){
          arrType.push(num.test(arr[key]));
      }else{
        return false;
      }
    }

    for(var key in arrType){
      if(arrType[key] === false){
        return false;
      }else{
        cnt += 1;
      }
    }

    return cnt == 4 || cnt == 6 ? true : false;
    */

    var result = false;
    if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)){
      result = true;
    }
    return result;

}
console.log(solution('155505')); //true 출력
