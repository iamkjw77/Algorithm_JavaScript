function solution(answers) {
    var answer = [];

    var p1 = [1,2,3,4,5]; //5
    var p2 = [2,1,2,3,2,4,2,5]; //8
    var p3 = [3,3,1,1,2,2,4,4,5,5]; //10

    var x = Math.floor(answers.length/40);
    var y = answers.length%40;

    var cnt1 = 0;
    var cnt2 = 0;
    var cnt3 = 0;

    for(var i=1; i<9; i++){
      p1 = p1.concat(p1);
      if(i<6){
        p2 = p2.concat(p2);
      }else if(i<5){
        p3 = p3.concat(p3);
      }
    }




    p1 = p1.slice(0,answers.length);
    p2 = p2.slice(0,answers.length);
    p3 = p3.slice(0,answers.length);

    for(var j=0; j<answers.length; j++){
      if(p1[j] == answers[j]) cnt1+=1;
    }

    for(var j=0; j<answers.length; j++){
      if(p2[j] == answers[i]) cnt2+=1;
    }

    for(var j=0; j<answers.length; j++){
      if(p3[j] == answers[i]) cnt3+=1;
    }

    if(answers.length%40 == 0){
      cnt1 *= x;
    }

    return cnt1;
}
console.log(solution([1,2,3,4,5]));
