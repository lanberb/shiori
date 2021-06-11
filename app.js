const express = require('express');
const app = express();

// app.get('/', res => res.send('Hello World!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use(express.static('public'));

let Twitter = require('twitter');

let client = new Twitter({
  consumer_key: 'eVQvMudJiiIgOUPyebnAN6XwJ',
  consumer_secret: 'Ma4noqvoTL4AAIsa4S9vxJExXjgcazVCUbKCUfeKvwgc4jhYg8',
  access_token_key: '1039137961202184205-jkUPy7YPsE6F9fCZFX27CWrT7gmsbf',
  access_token_secret: '0HgEzxCkNEfzBsVA1YxmQMUJl9m8X8wTxNO3rcxED94Ta'
});

let params = {
    screen_name: 'lanberb_',
    count: 100,
    include_rts: false,
    exclude_replies: true,
};

app.get('/api/timeline/', (req, res) => {
    client.get('statuses/user_timeline', params, (error, tweets, response) =>  {
        if (!error) res.send(tweets);
        else res.send([]);
    });
});
// app.get('/api/favorites/', (req, res) => {
//     client.get('favorites/list', params, (error, tweets, response) =>  {
//         if (!error) return tweets;
//         else return [];
//     });
// });

// API Key: eVQvMudJiiIgOUPyebnAN6XwJ
// API Secret Key: Ma4noqvoTL4AAIsa4S9vxJExXjgcazVCUbKCUfeKvwgc4jhYg8
// Bearer Token: AAAAAAAAAAAAAAAAAAAAADm9QQEAAAAAWh7fMxZhIfvKUswFP90seVJB8Po%3DeImsBLYVYalUOCNeGkvDFFP5bIbrLUibHOqbUY7p554xSISnIy

// Access Token: 1039137961202184205-jkUPy7YPsE6F9fCZFX27CWrT7gmsbf
// Access Token Secret: 0HgEzxCkNEfzBsVA1YxmQMUJl9m8X8wTxNO3rcxED94Ta