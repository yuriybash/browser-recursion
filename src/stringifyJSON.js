// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    // your code goes here

    // console.log("obj: " + obj);
    // console.log("typeof obj: " + typeof obj);

    if (typeof obj === 'number') {
        return "" + obj;
    } else if (obj === null) {
        return "" + obj;
    } else if (typeof obj == 'boolean') {
        return "" + obj
    } else if (typeof obj == 'string') {
        return "\"" + obj + "\"";
    } else if (Array.isArray(obj)) {
        var result ="";

        if (obj.length == 0) {
            return '[]';
        } else {
        	
        	for (var i = 0; i <= obj.length-1; i++) {
        		
        		result += stringifyJSON(obj[i]);
        		if(i >= 0 && i < obj.length-1){
        			console.log("TEST")
        			result += ","
        		}
        	};

        	console.log(result)
        	return ("[" + result + "]")


        }
    }







};
