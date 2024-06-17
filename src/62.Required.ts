type required<T> = {
  [item in keyof T]-?: T[item];
};

type ex = required<{
  x?: number;
}>;
