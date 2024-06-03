var factorial = function(num) {
    var result = 1;
    for (var p = num; p > 1; p--) {
        result = result * p;
    }
    return result;
};