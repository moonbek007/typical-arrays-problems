exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let answer = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < answer) {
            answer = array[i];
        }
    }
    return answer;
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let answer = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > answer) {
            answer = array[i];
        }
    }
    return answer;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
};
