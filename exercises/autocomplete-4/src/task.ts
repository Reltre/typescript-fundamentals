import { isPromise } from './utils/promise';
import {PlaceDetails, PlaceSummary } from './utils/places';
/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task<T>(genFn: () => IterableIterator<any>): Promise<T> {
  let p = new Promise<T>((resolve) => {
    let result: IteratorResult<any>;
    let iterator = genFn(); // Get the iterator
    // TODO: implement your solution here
    iterator.next().value.then(
      (result: any) => { 
        iterator.next(result).value.then(
          (result: any) => {
            iterator.next(result);
            resolve(result);
          }
        )
      }
    );
  });
  return p;
}
