main();
async function main() {
  const single: Promise<string> = new Promise((res) => res("1"));
  const triple: Promise<Promise<Promise<string>>> = new Promise((res) => {
    res(
      new Promise<Promise<string>>((res) => {
        res(
          new Promise<string>((res) => {
            res("hurray");
          })
        );
      })
    );
  });

  const singleResult = await single;
  console.log(singleResult); // 1
  const tripleResult = await triple;
  console.log(tripleResult); //hurray
}

async function example<T>(input: T) {
  const output: Awaited<T> = await input;
}
