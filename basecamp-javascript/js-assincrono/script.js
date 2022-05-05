const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catButton = document.getElementById('change-cat')
const catImage = document.getElementById('cat')

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL)
        const json = await data.json()

        return json.webpurl
    }
    catch(e) {
        console.log(e.message)
    }
}

const loadImage = async () => {
    catImage.src = await getCats()
}

catButton.addEventListener('click', loadImage)

loadImage()

/* 
const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e))

return data.webpurl
*/