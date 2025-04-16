function mnumbercalculation(var1,var2,operation){
    var result;
    if (operation == "add") {
        result = var1 + var2;
    } else if (operation == "subtract") {
        result = var1 - var2;
    } else if (operation == "multiply") {
        result = var1 * var2;
    } else if (operation == "divide") {
        result = var1 / var2;
    }
    return result;
}
function mstringmanipulation(string, operation){
    var result;
    if (operation == "uppercase") {
        result = string.toUpperCase();
    } else if (operation == "lowercase") {
        result = string.toLowerCase();
    } else if (operation == "reverse") {
        result = string.split("").reverse().join("");
    } else if (operation == "length") {
        result = string.length;
    }
    return result;
}
