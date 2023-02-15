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
            '*':      ' ',
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
            
            result = [] 
            char = ''
        
            for (let i = 0; i < expr.length; i+= 10){
                secondIter = expr.slice(i, i+10)

                if (secondIter== "**********"){
                    result.push("*")
                    continue
                }

                for (let k = secondIter.length; k>=0; k=k-2){

                    tmp = secondIter.slice(k-2, k) 
                    
                    if (tmp == '10'){
                        char = '.' + char
                    }

                    if (tmp == '11'){
                        char = '-' + char
                    }

                    if (tmp == '00'){
                        result.push(char) 
                        char = ''
                        tmp = ''
                        break
                    }
                    
                }
                if (char != ''){
                    result.push(char)
                    char = ''
                } 
            }

            function decodeStr(arrMorse){
                resultStr = ''
                for(let j = 0; j< arrMorse.length; j++)
                {
                    decodedChar = MORSE_TABLE[arrMorse[j]]
                    resultStr = resultStr + decodedChar
                    decodedChar = ''
                }
                return resultStr
            }
            return decodeStr(result)
        }

        module.exports = {
            decode

        }

