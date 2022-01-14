/*
  1383 - Camelize
  -------
  by Denis (@denchiklut) #hard #union #recursion
  
  ### Question
  
  Implement Camelize which converts object from snake_case to to camelCase
  
  ```ts
  Camelize<{
    some_prop: string, 
    prop: { another_prop: string },
    array: [{ snake_case: string }]
  }>
  
  // expected to be
  // {
  //   someProp: string, 
  //   prop: { anotherProp: string },
  //   array: [{ snakeCase: string }]
  // }
  ```
  
  > View on GitHub: https://tsch.js.org/1383
*/

/* _____________ Your Code Here _____________ */

type CamelCase<T> = T extends `${infer L}_${infer R}`
  ? `${L}${CamelCase<Capitalize<R>>}`
  : T;

type Camelize<T> = {
  [P in keyof T as CamelCase<P>]: T[P] extends Record<string, unknown>
    ? Camelize<T[P]>
    : T[P] extends [infer Rec]
    ? [Camelize<Rec>]
    : T[P];
};

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string;
        prop: { another_prop: string };
        array: [{ snake_case: string }];
      }>,
      {
        someProp: string;
        prop: { anotherProp: string };
        array: [{ snakeCase: string }];
      }
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1383/answer
  > View solutions: https://tsch.js.org/1383/solutions
  > More Challenges: https://tsch.js.org
*/
