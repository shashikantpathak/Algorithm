
function sort(arr) {
  var n = arr.length;
  var i,j,k;
  for( i = 1; i < n; ++i) {
   k = arr[i];
     j = i - 1;
    for(; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = k;
  }
}
var a=[2,5,1,9,8,6,7,0,3];
console.log(sort(a));