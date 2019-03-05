getReplies = () =>
  Array.from(document.querySelectorAll(
    '.ThreadedConversation--loneTweet .tweet, ' +
    '.ThreadedConversation .stream-items ' +
    '.ThreadedConversation-tweet:first-child .tweet'
  ))
    .map(tweet => ({
      id: tweet.dataset.tweetId,
      text: tweet.querySelector('.tweet-text').innerText.replace(/@\w+\s*/g, '')
    }))
