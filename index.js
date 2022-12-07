// Jawaban  soal nomor 1

const array = [1,2,3,4,5,6,7,8,9,10];

const fizzBuzz = (arr) => {
    const output = [];

    arr.forEach(val => {
        if (val % 3 == 0) {
            output.push('fizz');

        } else if (val % 5 == 0) {
            output.push('buzz');

        } else {
            output.push(val);
            
        };
    });

    return output;
};

console.log('Jwaban no 1: ', fizzBuzz(array));

// Jawaban soal nomor 2

const words = ["kodok", "kadal", "radar", "lincah"];
const numbers = [202, 123, 404, 246];

const isPalindrome = (arr) => {

    let result = [];

    arr.forEach(val => {

        // Menambahkan methode toString() agar tidak terjadi error ketika memasukan number sebagai parameter
        if (val == val.toString().split('').reverse().join('')) {
            result.push(true);
        } else {
            result.push(false);
        }
        
    });

    return result;

}

console.log('Jwaban no 2: ',isPalindrome(words));

// Jawaban soal no 3

const numbs = [1,2,3,2,5,4,4,5,9,8];

const isDuplicated = (arr) => {
    let result = [];
    let dumy = [];

    arr.forEach(val => {
        if (!dumy.includes(val)) {
            dumy.push(val);
        } else {
            result.push(val)
        }
    });

    return `${result.length} data duplicate` ;
}

console.log('Jwaban no 3: ', isDuplicated(numbs));





