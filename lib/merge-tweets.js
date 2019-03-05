#!/usr/bin/env node

if (process.argv.length !== 5) {
  console.info('Usage: ' +
    'node merge-tweets.js tweets.json tweets-20190305-2355.json tweets-merged.json')
  process.exit()
}

const fs = require('fs')

const existingTweetsBuffer = fs.readFileSync(process.argv[2])
const newTweetsBuffer = fs.readFileSync(process.argv[3])

const existingTweets = JSON.parse(existingTweetsBuffer)
const newTweets = JSON.parse(newTweetsBuffer)

const mergedTweets = newTweets.map(newTweet => {
  const existingTweet = existingTweets.filter(t => t.id === newTweet.id)[0]
  return existingTweet ? existingTweet : newTweet
})

fs.writeFileSync(process.argv[4], JSON.stringify(mergedTweets, null, 2))
