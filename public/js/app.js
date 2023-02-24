const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = `Loading...`
    messageTwo.textContent = ``

    // Local VS
    // http://localhost:3000/weather?address=${search.value}

    // Codespace VS
    // https://jasonjun1221-opulent-space-giggle-4p67wgw97693qpjq-3000.preview.app.github.dev/weather?address=${search.value}

    fetch(`/weather?address=${search.value}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = `Location: ${data.location}`
            messageTwo.textContent = `Forecast: ${data.forecast}`
        }
    })
})
})

// fetch('https://puzzle.mead.io/puzzle',).then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })