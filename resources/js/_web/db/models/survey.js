export class Survey {
    async createTweet(tweet) {
        return fetch('https://api/tweets', {
          method: 'POST',
          body: JSON.stringify({
            content: tweet.content,
            author_id: tweet.author.id
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(error => {
          this.saveTweetInOffline(tweet, 'POST');
          throw error;
        });
      }
    
      async updateTweet(tweet) {
        return fetch('https://api/tweets', {
          method: 'PUT',
          body: JSON.stringify({
            id: tweet.id,
            content: tweet.content,
            author_id: tweet.author.id
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(error => {
          this.saveTweetInOffline(tweet, 'PUT');
          throw error;
        });
      }
}