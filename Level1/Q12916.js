function solution(s){
    /*
    var words = new Array();
    var p_count = 0;
    var y_count = 0;

    words = s.toLowerCase().split('');

    for(var key in words){
      if(words[key] === 'p'){
        p_count += 1;
      }else if(words[key] === 'y'){
        y_count += 1;
      }
    }

    return p_count === y_count ? true : false;
    */

    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log(solution('PyYa')); //true 출력
console.log(solution('abc')); //true 출력
