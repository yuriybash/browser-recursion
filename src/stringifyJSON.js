// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    // your code goes here

    if (typeof obj === 'number') {
        return "" + obj;
    } else if (obj === null) {
        return "" + obj;
    } else if (typeof obj === 'boolean') {
        return "" + obj
    } else if (typeof obj === 'string') {
        return "\"" + obj + "\"";
    } else if (typeof obj === 'undefined' || typeof obj === 'function') {
        return;
    } else if (Array.isArray(obj)) {
        var result = "";

        if (obj.length == 0) {
            return '[]';
        } else {

            for (var i = 0; i <= obj.length - 1; i++) {

                result += stringifyJSON(obj[i]);
                if (i >= 0 && i < obj.length - 1) {

                    result += ","
                }
            };

            return ("[" + result + "]")


        }
    } else if (typeof obj === "object") {
        var result = "";
        if (Object.keys(obj).length == 0) {
            return '{}'
        } else {

            for (var prop in obj) {
                if (typeof stringifyJSON(obj[prop]) == "function" || typeof stringifyJSON(obj[prop]) == "undefined") {
                    break;
                }
                result += "," + stringifyJSON(prop) + ":" + stringifyJSON(obj[prop])
            }
            result = result.substring(1)

            return ("{" + result + "}")


        }

    }






};
