const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(cleanValue) {
    let j = cleanValue.length - 1;
    for (let i = 0; i < cleanValue.length / 2; i++) {
        if (cleanValue[i] != cleanValue[j]) {
            return false;
        }
        j--;
    }
    return true;
}

function cleanString(textInputValue) {
    return textInputValue.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").replace(/ /g, "");
}

checkBtn.addEventListener("click", () => {
    const textInputValue = textInput.value;
    const cleanValue = cleanString(textInputValue);
    if (textInputValue === "") {
        alert("Please input a value");
    } else if (isPalindrome(cleanValue)) {
        result.innerText = `${textInputValue} is a palindrome`;
} else if (!isPalindrome(cleanValue)) {
    result.innerText = `${textInputValue} is not a palindrome`;
}
});