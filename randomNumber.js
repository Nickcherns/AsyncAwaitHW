
function getRandomNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
          let random = Math.floor(Math.random() * 100);
          resolve(random);
        }, 500);
    });
}

async function randomNumber(getRandomNumber) {
    let number = await getRandomNumber();
    return console.log(number);
}

randomNumber(getRandomNumber);

