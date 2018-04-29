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
    
    function nextStep(value=undefined) {
      let itResult = iterator.next(value);
     
      if (itResult.done) {
        resolve(value);
        return;
      } else {
        let { value } = itResult;
        if (isPromise(value)) {
          console.log('is a promise');
          value.then((promiseResult: any) => {
            nextStep(promiseResult);
          });
        } else {
          console.log('not a promise');
        }
      }
    }

    nextStep();
  });
  return p;
}
