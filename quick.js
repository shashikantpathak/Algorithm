function sort(arr) {
    if (arr.length == 0) 
            return [];
  
    var left = [];
    var right = [];
    var pivot = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < pivot)
            left.push(arr[i]);
        else
            right.push(arr[i]);
    }
  
    return sort(left).concat(pivot, sort(right));
}
var a=[2,5,1,9,8,6,7,0,3];
console.log(sort(a));