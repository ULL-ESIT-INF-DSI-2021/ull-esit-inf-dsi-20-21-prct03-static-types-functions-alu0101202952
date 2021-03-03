function decimalToFactorial(ndecimal) {
}
function factorialrecursive(nfactorial) {
    if (nfactorial == 0) {
        return 1;
    }
    return nfactorial * factorialrecursive(nfactorial - 1);
}
