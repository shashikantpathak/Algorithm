

  function sort(array) {

    var length = array.length,
        mid    = Math.floor(length /2),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    if(length === 1) {
      return array;
    }

    return merge(sort(left), sort(right));

  }

  
  function merge(left, right) {
       var sorted = [];
	var i = 0; 
	var j = 0; 

	while (i < left.length || j < right.length) {
 	 if (i < left.length && j < right.length){
    	if (left[i] < right[j]){
     	 sorted.push(left[i]);
	i++;
    	}else{
    	  sorted.push(right[j]);
     	 j++;
    }
  }else if (i < left.length){
    sorted.push(left[i]);
    i++;
  }else{
    sorted.push(right[j]);
    j++;
  }
}

return sorted;
}

var a=[2,5,1,9,8,6,7,0,3];
console.log(sort(a));
