const sentence = "hello there from lighthouse labs";

function animateSentence(sentence) {
  let delay = 0;

  for (const char of sentence) {
    setTimeout(function() {
      process.stdout.write(char);
    }, delay);
    delay += 100;
  }
}

animateSentence(sentence);