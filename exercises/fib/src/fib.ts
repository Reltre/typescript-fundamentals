
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
  let first = 0;
  let second = 1;
  let result;
  while(true) {
    result = first + second;
    yield result;
    second = first;
    first = result;
  }
}
