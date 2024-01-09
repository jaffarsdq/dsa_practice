function gcd(A, B) {
    while (A != B) {
        if (A > B) A -= B;
        else B -= A;
    }
    return A;
}

console.log(gcd(18, 24));
