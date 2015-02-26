// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {



    var result = [];



    for (var x = 0; x < document.body.classList.length; x++) {

                if (document.body.classList && document.body.classList[x] == className) {
                	
                    result.push(document.body);
                }

            }

    function recurseOverChildNodes(node) {
    	


    	if(node.tagName == "SPAN"){
    		console.log(allElementsAreTextOrCommentNodes(node));
    	}




        if ((node.childNodes.length == 0 && node.classList) || ((node.childNodes.length>=1) && allElementsAreTextOrCommentNodes(node))) {

            for (var x = 0; x < node.classList.length; x++) {
            	
                if (node.classList[x] == className) {
                	
                    result.push(node);
                }

            }

        }
        else{


        	for(var y = 0; y <= node.childNodes.length - 1; y++){
        		

        		recurseOverChildNodes(node.childNodes[y]);
        	}

        }

    }

    recurseOverChildNodes(document.body);


    function allElementsAreTextOrCommentNodes(inputNode){
    	for(var x = 0; x< inputNode.childNodes.length; x++){

    		if(inputNode.childNodes[x].nodeType == 1){
    			return false;
    		}

    	}
    	return true;
    }



    return result;
    // your code here
};

//document.body, element.childNodes, and element.classList
