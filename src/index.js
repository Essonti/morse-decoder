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

function decode(expr) {    
    let sent = '';
    let charNumber = expr.length / 10;
    let charMorse = '';
    let charBin = '';
    let result = '';  
    for (let i = 0; i < charNumber; i++) {
        charBin = expr.slice(0, 10);
        for (let j = 0; j < 5; j++) {            
            if (j === 0) {result = (charBin.slice(-2, charBin.length))}
            else {result = (charBin.slice(-2 - 2 * j, -2 * j))};
            if (result == '10') {
                charMorse = '.' + charMorse;
            } else if (result == '11') {
                charMorse = '-' + charMorse;
            } else if (result == '**') {charMorse = ' '};            
        };
        for (let key in MORSE_TABLE) {
            if (key === charMorse) {sent += MORSE_TABLE[key]};
        };
        if (charMorse == ' ') {sent += ' '};
        charMorse = '';
        expr = expr.slice(10);
    };     
    return sent;       
};


module.exports = {
    decode
}