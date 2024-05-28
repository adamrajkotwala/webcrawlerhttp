const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 2 pages', () => {
    const input = {
        'https://theuselessweb.com//sites': 1,
        'https://theuselessweb.com': 4
    }
    const actual = sortPages(input)
    const expected = [
        ['https://theuselessweb.com', 4],
        ['https://theuselessweb.com//sites', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
    const input = {
        'https://theuselessweb.com//sites': 21,
        'https://theuselessweb.com': 4,
        'https://theuselessweb.com//privacy': 2,
        'https://theuselessweb.com//sites/3': 1,
        'https://theuselessweb.com/': 34,
    }
    const actual = sortPages(input)
    const expected = [
        ['https://theuselessweb.com/', 34],
        ['https://theuselessweb.com//sites', 21],
        ['https://theuselessweb.com', 4],
        ['https://theuselessweb.com//privacy', 2],
        ['https://theuselessweb.com//sites/3', 1]
    ]
    expect(actual).toEqual(expected)
})