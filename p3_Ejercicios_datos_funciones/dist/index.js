//console.log('Hola Mundo!');
/**
 * ### Adds two numbers
 * @param year Consists of the **first** operand of the addition
 *
 */
function isLeapYear(year) {
    if (year % 4 == 0)
        return true;
    else if (year % 100 != 0) {
        if (year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}
const leapYear = isLeapYear(1997);
console.log(`mySum = ${leapYear}`);
