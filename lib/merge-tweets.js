#!/usr/bin/env node

if (process.argv.length !== 5) {
  console.info('Usage: ' +
    'node merge-tweets.js tweets.json tweets-20190305-2355.json tweets-merged.json')
  process.exit()
}

const fs = require('fs')

const existingTweetsBuffer = fs.readFileSync(process.argv[2])
const currentTweetsBuffer = fs.readFileSync(process.argv[3])

const existingTweets = JSON.parse(existingTweetsBuffer)
const currentTweets = JSON.parse(currentTweetsBuffer)

const newTweets = currentTweets.filter(newTweet => {
  return !existingTweets.map(t => t.id).includes(newTweet.id)
})

const mergedTweets = [ ...existingTweets, ...newTweets ]

fs.writeFileSync(process.argv[4], JSON.stringify(mergedTweets, null, 2))
