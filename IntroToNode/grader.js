function average(arr){
    var sum = 0;
    var av;
    for(var i=0; i<arr.length; i++){
        sum =  sum + arr[i];
    }
    av = Math.round(sum / arr.length);
    return av;
}

var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80,54,73,63,95,49] 
console.log(average(scores));
console.log(average(scores2));