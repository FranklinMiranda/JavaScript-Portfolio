// JavaScript Quicklookup
console.log(new Date());

// Strings
strings();
function strings() {
  const string = `string`;
  const string0 = "string";
  const string1 = "string";

  console.log(string === string0);
  console.log(string.length);

  console.log(string.slice(2, 5));
  console.log(string.slice(0, 5));
  console.log(string.slice(-5, -2));
  console.log(string.slice(-5, -4));

  console.log(string.substring(1, 4));
  console.log(string.substring(0, 4));
  console.log(string.substring(1, 5));

  const sentence1 = "This is a sentence.";
  let newSentence = sentence1.replace("sentence", "paragraph");
  console.log(sentence1);
  console.log(newSentence);

  console.log(newSentence.toUpperCase());
  console.log(newSentence.toLowerCase());
  console.log(string.concat(sentence1, newSentence));

  let int = "5";
  let padSentence = int.padStart(5, "0");
  let padEnd = int.padEnd(5, "0");
  console.log(int);
  console.log(padSentence);
  console.log(padEnd);
}
