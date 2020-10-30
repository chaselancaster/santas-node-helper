// From https://adventofcode.com/2015/day/1

const fs = require('fs')

// 1 - What floor does Santa end on?
// ( --> should go up one floor
// ) --> should go down one floor

const question1 = () => {
    fs.readFile('./santa.text', (err, data) => {
        const directions = data.toString()
        const directionsArray = directions.split('')
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else  if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.log('floor:', answer)
    })
}

question1()

// 2 - When does Santa first enter the basement?

const question2 = () => {
    
}


