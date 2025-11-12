// get greatest common divisor
export const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));
