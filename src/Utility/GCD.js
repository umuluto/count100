function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;    
    x = Math.abs(x);
    y = Math.abs(y);
    if (x === 0 && y === 0) return false
    if (x === 0 || y === 0) return x + y
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

export default gcd_two_numbers;