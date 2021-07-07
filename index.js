const prompt = require('prompt');

prompt.start();

const calculate = (sell, buy, length, init) => {
  console.log(`Total: ${((sell/buy)**length)*init}`);
};

prompt.get(['sell', 'buy', 'length', 'init'], (err, result) => {
  if (err) { console.log(err); return 1; }
  calculate(result.sell, result.buy, result.length, result.init);
});

module.exports = { calculate };
