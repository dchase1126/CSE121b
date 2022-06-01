// gets a set of 50 new quotes from zenquotes.io and adds them to the end of the collection
/*async function fetchNewQuotes() {
    return new Promise((resolve) => {
      fetch("https://zenquotes.io/api/quotes/")
        .then((response) => response.json())
        .then(async (quotes) => {
          let newQuotes = [];
          for (const quote of quotes) {
            const formatedQuote = { q: quote.q, a: quote.a };
            newQuotes.push(formatedQuote);
          }

          const oldQuotes = await getQuotesFromStorage();
          const allQuotes = oldQuotes.concat(newQuotes);

          chrome.storage.local.set({ speeddialQuotes: allQuotes });

          if (allQuotes.length >= 1) {
            resolve(allQuotes);
          } else {
            resolve([{ q: "APIs are great, but sometimes they break.", q: "nomadic" }]);
          }
        });
    });
  }*/