export interface Mapper<T, U> {
  mapFrom(input: T): U;
  mapTo(input: U): T;
}
