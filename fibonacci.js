function fibonacciGenerator (n) {
    if (n==1){
        let sequence = [0];
        return sequence;
    }
    
    if (n==2){
        let sequence = [0,1];
        return sequence;
    }
    
    if (n>2){
        let sequence = [0,1];
    	for (var i = 2; i < n; i++) {
    		sequence[i] = sequence[i-1]+ sequence[i-2];
    	}
	    return sequence;
      }
    }
    //Return an array of fibonacci numbers.
