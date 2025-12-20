// Startup file for writing and debugging TypeScript code


export function testFunction(input: number): number {
  return input * 2;
}


function main(): void {
  console.log("Hello OpenX!2");

  const result = testFunction(6);
  console.log(`testFunction(3) = ${result}`);
}

main();
  