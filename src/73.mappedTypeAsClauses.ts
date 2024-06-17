type State = {
  name: string;
  age: number;
};
/**
    * {
    setName: (value: string) → void;
    * age: (value: number) = void;
    * }.
    */
type Setters = {
  [K in keyof State as `set${Capitalize<K>}`]: (value: State[K]) => void;
};

////////////////////////////////////////

export type Setters1<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (
    value: State[K]
  ) => void;
};
export type Getters1<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};
export type Store<State> = Setters1<State> & Getters1<State>;
type PersonState = {
  name: string;
  age: number;
};
type PersonStore = Store<PersonState>;
declare const personStore: PersonStore;
personStore.setName("John");
personStore.setAge(20);
const name: string = personStore.getName();
const age: number = personStore.getAge();
