document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'puppy1',
            img: 'img/img1.jpeg'
        },
        {
            name: 'puppy1',
            img: 'img/img1.jpeg'
        },
        {
            name: 'puppy2',
            img: 'img/img2.jpeg'
        },
        {
            name: 'puppy2',
            img: 'img/img2.jpeg'
        },
        {
            name: 'puppy3',
            img: 'img/img3.jpeg'
        },
        {
            name: 'puppy3',
            img: 'img/img3.jpeg'
        },
        {
            name: 'puppy4',
            img: 'img/img4.jpeg'
        },
        {
            name: 'puppy4',
            img: 'img/img4.jpeg'
        },
        {
            name: 'puppy5',
            img: 'img/img5.jpeg'
        },
        {
            name: 'puppy5',
            img: 'img/img5.jpeg'
        },
        {
            name: 'puppy6',
            img: 'img/img6.jpeg'
        },
        {
            name: 'puppy6',
            img: 'img/img6.jpeg'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // create your board
    function createBoard() {
        for (i in cardArray) {
            const card = document.createElement('img');
            card.setAttribute('src', 'img/img7.jpeg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'img/img8.jpeg');
            cards[optionTwoId].setAttribute('src', 'img/img8.jpeg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/img7.jpeg');
            cards[optionTwoId].setAttribute('src', 'img/img7.jpeg');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    // flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})