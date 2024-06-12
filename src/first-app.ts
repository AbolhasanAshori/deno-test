function printHello(): void {
  console.log('Hello World form Deno');
}

printHello();

const obj = {
  items: [1, 2, 3],
  index: 0,

  [Symbol.iterator](): Iterator<number, null> {
    const that = this as typeof obj;
    return {
      next(): IteratorResult<number> {
        if (that.index < that.items.length) {
          return {
            value: ++that.index,
          };
        } else {
          return {
            value: null,
            done: true,
          };
        }
      },
    };
  },
};

for (const n of obj) {
  console.log(n);
}
