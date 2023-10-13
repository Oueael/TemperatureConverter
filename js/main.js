document.querySelector('#convert').addEventListener('click', convert)

function convert() {
  let temp = document.querySelector('#cel').value
  temp = temp * 9/5 +32
  document.querySelector('#outputValue').innerText = temp
}

document.querySelector('#convert2').addEventListener('click', convert2)

function convert2() {
  let temp = document.querySelector('#fah').value
  temp = 5/9 * (temp-32)
  document.querySelector('#outputValue2').innerText = temp
}
