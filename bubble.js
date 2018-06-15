function sort(arr){
	var n = arr.length;
	var i,j,k;
	for (i = n-1; i>=0; i--){
	  for(j = 1; j<=i; j++){
		if(arr[j-1]>arr[j]){
			var temp = arr[j-1];
			arr[j-1] = arr[j];
			arr[j] = temp;
		 }
	  }
	}
	return arr;
 }
 var a=[2,5,1,9,8,6,7,0,3];
 console.log(sort(a));
