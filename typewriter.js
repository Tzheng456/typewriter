const sentence = "hello there from lighthouse labs";
let iterator = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, iterator++ * 50);
}
setTimeout(() => {
  // print the char here
  process.stdout.write("\n");
}, iterator * 50);
