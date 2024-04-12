export function calculatePrimesInRange(start: number, end: number): number[] {
  const primes: number[] = [];
  for (let num = Math.max(2, start); num <= end; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}
