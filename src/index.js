module.exports = function getZerosCount(number, base) {
    let multipliers = [];
    next: 
    for (let i = 2; i <= base; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue next;
            }
        }
        if (base % i == 0) {
            multipliers.push(i);
        }
    }

    let exponents = [];
    let currentExponent;

    for (let i = 0;i < multipliers.length;i++) {
        currentExponent = 0;
        while (base % multipliers[i] == 0) {
            base /= multipliers[i];
            currentExponent++;
        }
        exponents.push(currentExponent);
    }

    let temp;
    let num;
    let tailingZeros = [];

    for (let i = 0; i < multipliers.length; i++) {
    	temp = 0;
        num = number;
        while (num > 0) {
            num = parseInt(num / multipliers[i]);
            temp += num;
        }
        tailingZeros.push(parseInt(temp / exponents[i]));
    }

    tailingZeros = tailingZeros.sort((left, right)=> left - right);
    return tailingZeros[0];
}
