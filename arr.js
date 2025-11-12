let text = "i am learning data structure and algorithm"

let single = text.split(" ")

function Capitalize() {
    let word = ""
    for (let i = 0; i < single.length; i++) {
        word += single[i][0].toUpperCase() + single[i].slice(1) + " "
    }
    return word
}

console.log(Capitalize())

// let num = 1

// function PrintNum(num) {
//     for (let i = 1; i < num ; i++){
//         console.log(i);
//     }
// }

// PrintNum(3)

//write a function that detects how many vowels are in a sentence
function howManyVowels(sentence) {
 
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let i = 1; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            count++
        }
    }
    return count
}
console.log(howManyVowels ("I am learning data structure and algorithm"));

// write a function that detects if a word is palidrome
function isPalindrome(word) {
   
    let palidromeWord = word.split("").reverse().join("")
    if (palidromeWord === word) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome("racecar"));

// write a reversed function | reversedWord ("hello") => "olleh"
function reversedWord(word) {
    let reversed = word.split("").reverse().join("")
    return reversed
}
console.log(reversedWord("data"));


//write a function that adds two numbers
function AddTwoNumbers(a,b) {
  return a + b
}

console.log(AddTwoNumbers(10,8));

