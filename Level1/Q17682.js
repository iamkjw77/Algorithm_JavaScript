function solution(dartResult) {
    var bonus = ['S','D','T'];
    var opt = ['*', '#'];
    var num = "";
    var arr = [];
    var t = dartResult.split("");

    for(var i=0; i<dartResult.length; i++){
      if(isNaN(t[i])){ //숫자가 아닌경우
        if(opt.indexOf(t[i]) == -1){ //옵션이 아닌경우
          var tmp = Math.pow(parseInt(num), bonus.indexOf(t[i])+1);
          arr.push(tmp);
        }else if(t[i] == opt[1]){
          var tmp = arr.pop();
          arr.push(tmp*(-1));
        }else{
          var t1 = arr.pop();
          var t2 = arr.pop();
          if(t2){ //첫 번째에서 *이 나온경우, t2는 존재하지 않음
            arr.push(t2*2);
          }
          arr.push(t1*2);
        }
        num = "";
      }else{
        num += t[i];
      }
    }
    return arr.reduce((acc,curr) => acc+curr, 0);
}
console.log(solution('1S2D*3T')); //37 출력
