'use strict'

const {strictEqual} = require('assert')
const letters = require('.')

const totalPoints = Object.entries(letters)
.filter(([letter]) => letter !== ' ')
.map(([_, props]) => props)
.map(({points, tiles}) => points * tiles)
.reduce((sum, x) => sum + x, 0)

// from https://scrabble.hasbro.com/en-us/faq
strictEqual(totalPoints, 187, 'total points should be 187')
console.info('looks good!')
