
const upperset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerset = 'abcdefghijklmnopqrstuvwxyz'
const numberset = '1234567890'
const symbolset = '!@#$%^&*()_+/'


const getrandomdeta = (dataset) => {

    return dataset[Math.floor(Math.random() * dataset.length)]
}
const totalchar = document.getElementById('totalchar');
const passbox = document.getElementById('pass-box')
const upperInput = document.getElementById('upper-case')
const lowerInput = document.getElementById('lower-case')
const numberInput = document.getElementById('numbers')
const symbolInput = document.getElementById('symbols')


const generatepassword = (password = " ") => {
    if (upperInput.checked) {
        password += getrandomdeta(upperset)

    }

    if (lowerInput.checked) {
        password += getrandomdeta(lowerset)
    }
    if (numberInput.checked) {
        password += getrandomdeta(numberset)
    }
    if (symbolInput.checked) {
        password += getrandomdeta(symbolset)
    }


    if (password.length < totalchar.value) {
        return generatepassword(password)
    }
    passbox.innerText = truncatestring(password, totalchar.value);
    ;

}
document.getElementById('btn').addEventListener('click',
    function () {
        generatepassword()
    }
)

function truncatestring(str, num) {
    if (str.length > num) {
        let substr = str.substring(0, num)
        return substr
    } else {
        return str
    }
}