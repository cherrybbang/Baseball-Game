window.onload = console.log(generateUniqueRandomNumber())

function generateUniqueRandomNumber() {
  while (true) {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
    const digits = String(randomNumber).split(''); // Convert number to string and split into individual digits
    const uniqueDigits = new Set(digits); // Use Set to check for unique digits
    
    if (uniqueDigits.size === 4) { // If all digits are unique
      return randomNumber;
    }
  }
}


document.querySelector('.submit_btn').addEventListener('click', function(e) {

  e.preventDefault()

  if (document.querySelector('#number').value == '') {
    // e.preventDefault()
    alert('숫자를 입력해주세요.')
    return false
  }
  if (isNaN(document.querySelector('#number').value) == true) {
    // e.preventDefault()
    alert('숫자만 입력가능합니다.')
    return false
  }
  if (document.querySelector('#number').value.length !== 4) {
    // e.preventDefault()
    alert('숫자는 꼭 4자리로 입력해주세요.')
    return false
  }

  const inputNumber = document.querySelector('#number').value.split('');
  const repeatNumber = [...new Set(inputNumber)];

  if (inputNumber.length !== repeatNumber.length) {
    alert('같은 숫자가 중복되어 있습니다.');
    return false;
  }
});


const input = document.querySelector('#number');
const input_print = document.querySelector('.text');

document.querySelector('.submit_btn').addEventListener('click', function(e) {
  e.preventDefault();
  // console.log('PRINT')

  const msg = input.value;
  const inputNumber = document.querySelector('#number').value.split('');
  const repeatNumber = [...new Set(inputNumber)];

  if (isNaN(msg) == false && msg.length == 4 && inputNumber.length == repeatNumber.length) {
      input_print.textContent = `${msg}`;  
    }
});

