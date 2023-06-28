const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoFixed = parseFloat(leoBalance*-1).toFixed(2)
const sarahFixed = parseFloat(sarahBalance*-1).toFixed(2)

const owed = "R " + parseFloat(leoBalance*-1 + sarahBalance*-1).toFixed(2) + "\n"

const leo = `\n ${leoName} ${leoSurname.trim()} (Owed: R ${leoFixed})\n`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahFixed})\n\n`

const total = "\n Total amount owed: "
const result = leo + sarah  + divider + total + owed + divider

console.log(result)