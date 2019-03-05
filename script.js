const tweetElement = document.querySelector('.tweet')

const randomIndex = length => Math.floor(Math.random() * length)

let tweet = null

async function run() {
  const tweetsResponse = await fetch('data/tweets.json')
  const tweets = await tweetsResponse.json()
  const filteredTweets = tweets.filter(tweet => !tweet.excluded)
  const randomTweet = filteredTweets[randomIndex(filteredTweets.length)]

  tweet = randomTweet
  tweetElement.innerText = randomTweet.text
}

run()
