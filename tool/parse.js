const fs = require('fs');

const args = process.argv[2];

console.log(args);

const file = fs.readFile('quotes.txt', 'utf8', (_, data) => {
  const lines = data.split('\n');

  quotes = [{"quote":"", "author":""}];
  at = 0;
  lines.forEach(line => {
    if (line.trim() == '') {
    } else if (line.startsWith("--")) {
      quotes[at].author = line.slice(3).trim();
      quotes[at].quote = quotes[at].quote.trim();
      at++;
      quotes[at] = {"quote":"", "author":""};
    } else {
      quotes[at].quote += line.trim().replace('\"', "'").replace('\"', "'") + ' ';

    }
  });

  fs.writeFile(args, JSON.stringify(quotes), (_) => {});
});

