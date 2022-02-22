const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"

function decode(expr) {
   let arr = []
   let arr2 = []
   for (i = 0; i < expr.length; i += 2) {
      arr.push(expr.slice(i, (i + 2)))
   }
   
  let arr3 = arr.map(item => {
      if (item == '00') {
         return item = ''
      } if (item == '10') {
         return item = '.'
      } if (item == '11') {
         return item = '-'
      } if (item == '**') {
         return item = ' '
      }
   })
 
   for (i = 0; i < arr3.length; i += 5) {
      arr2.push(arr3.slice(i, (i + 5)).join(''))
   }
   let arr4 = arr2.map(item => {
      for (let key of Object.keys(MORSE_TABLE)) {
         if (item == key) {
            return item = MORSE_TABLE[key]
         } if (item.includes(' ')) {
            return item = ' '
         }
     }
   
   })


   console.log(arr)
   
   console.log(arr3)
   console.log(arr2)
   console.log(arr4)
   
return arr4.join('')
  
}

decode(expr)



module.exports = {
    decode(expr)
}

