const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

leoEven = parseFloat(leoBalance*-1)
sarahEven = parseFloat(sarahBalance*-1)

totalRounded = (leoEven + sarahEven).toFixed(2)

leoRounded = leoEven.toFixed(2)
sarahRounded = sarahEven.toFixed(2) 

const owed = `R ${totalRounded}\n`
const leo = `\n${leoName} ${leoSurname.trim()} (Owed: R ${leoRounded})\n`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahRounded})\n\n`
const total = "\n  Total amount owed: "
const result = leo + sarah + divider + total + owed + divider

// const owed = `R ${totalRounded}`
// const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${leoRounded})`
// const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahRounded})`
// const total = "Total amount owed: "
// const result = `\n${leo}\n${sarah}\n\n${divider}\n  ${total}${owed}  \n${divider}`

console.log(result) 