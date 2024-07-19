const btn = document.getElementById('btn')
const hexCode = document.getElementById('hex-code')

const randomColorGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomHexCode = "#" + randomNumber.toString(16)
    // console.log(randomNumber, randomHexCode)
    hexCode.innerText = randomHexCode
    document.body.style.backgroundColor = randomHexCode

    // Copy Hex Value
    navigator.clipboard.writeText(randomHexCode)
}

randomColorGenerator()

btn.addEventListener('click', randomColorGenerator)