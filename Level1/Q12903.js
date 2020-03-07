/*
function solution(s) {
    var words = new Array();
    words = s.split('');
    if(words.length%2 == 0){
      return words[parseInt(words.length/2)-1]+words[parseInt(words.length/2)];
    }else{
      return words[parseInt(words.length/2)];
    }
}
*/

function solution(s) {
  return s.substr(Math.ceil(s.length/2)-1,s.length%2===0?2:1);
}

console.log(solution('asdf'));
