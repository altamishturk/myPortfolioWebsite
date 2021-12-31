const nav__toggleElem = document.querySelector('.nav__toggle');
const nav__menuElem = document.querySelector('.nav__menu');
const bx_plusElem = document.querySelector('#plus');
const bx_menuElem = document.querySelector('#menu');
const nav__linkElem = document.querySelectorAll('.nav__link');


// typeWriter effect 
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // get current index 
        const currentInd = this.wordIndex % this.words.length;
        // get current word 
        const currentWord = this.words[currentInd];

        // check if deleting 
        if (this.isDeleting) {
            this.txt = currentWord.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = currentWord.substring(0, this.txt.length + 1);
        }

        // append into UI 
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 200;
        if (this.isDeleting) {
            typeSpeed = typeSpeed / 2;
        }

        if (this.txt == currentWord && !this.isDeleting) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        }
        else if (this.txt == '' && this.isDeleting) {
            this.isDeleting = false;
            this.wordIndex++;
        }


        setTimeout(() => this.type(), typeSpeed);
    }
}




// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}



bx_plusElem.addEventListener('click', () => {

    nav__menuElem.classList.remove('class_toggle');
    bx_plusElem.style.display = 'none';
    bx_menuElem.style.display = 'block';
});

bx_menuElem.addEventListener('click', () => {

    nav__menuElem.classList.add('class_toggle');
    bx_menuElem.style.display = 'none';
    bx_plusElem.style.display = 'block';
});


nav__linkElem.forEach(elem => {
    elem.addEventListener('click', () => {
        nav__menuElem.classList.remove('class_toggle');
        bx_plusElem.style.display = 'none';
        bx_menuElem.style.display = 'block';
    })
});

// ++++++++++++ testimonials section ++++++++++++++++++
const reviews = [
    {
        id: 1,
        name: "Harpreet kaur",
        job: `Social Media Strategist and founder
        OSM Services`,
        img: "./img/testimonials/1.jpg",
        text: `It has been a great experience working
        with Altamish. He was very quick to understand my requirements and execute them. I was so
        Happy to get see my website complete in merely 3 days. keep it up. `,
    },
    {
        id: 2,
        name: "Devapriya Khanna",
        job: `Founder : 212° Brand Lab and Connexus | Early Stage Investor | Member and Contributor : Forbes Business Council`,
        img: "./img/testimonials/2.jpg",
        text: `Very good service. Great communication. Altamish is keen to learn and solve problems, he worked very hard.`,
    }
];


const personImg = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

//initial index of reviews 
let index;

// show one persion first 
index = 0;
showPerson(index);


const prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', () => {

    if (index == 0) {
        index = reviews.length - 1;
        showPerson(index);
    }
    else {
        index = --index;
        showPerson(index);
    }
})

const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', () => {

    if (index == reviews.length - 1) {
        index = 0;
        showPerson(index);
    }
    else {
        index = ++index;
        showPerson(index);
    }

})


function showPerson(index) {
    personImg.src = reviews[index].img;
    author.textContent = reviews[index].name;
    job.textContent = reviews[index].job;
    info.textContent = reviews[index].text;
}

// click on next button in every 2 seconds 
// setInterval(() => {
//     nextBtn.click();
// }, 2000);



// project section
let noOfProjectToShow = 5;
const projects = document.querySelectorAll('.card');

function showProjects(num) {
    projects.forEach((project, ind) => {
        if (ind > num) {
            project.style.display = 'none';
        }
        else {
            project.style.display = 'block';
        }
    })
}
showProjects(noOfProjectToShow);

const moreBtn = document.querySelector('#moreBtn');
moreBtn.addEventListener('click', e => {
    e.preventDefault();

    if (projects.length >= noOfProjectToShow) {
        showProjects(noOfProjectToShow += 3);
    }



    if (projects.length - 1 <= noOfProjectToShow) {
        moreBtn.innerText = 'Less..';
    }


    if (projects.length < noOfProjectToShow) {
        showProjects(noOfProjectToShow = 5);
        moreBtn.innerText = 'More..';
        window.location.href = "#work";
    }
})



// contact form 
const contactForm = document.querySelector('#contact .contact__form');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    Email.send({
        Host: "smtp.gmail.com",
        Username: "altamishpasha@gmail.com",
        Password: "ghfmgauvvpaqmkwe",
        To: 'altamishpasha@gmail.com',
        From: "altamish.busuness@gmail.com",
        Subject: "Website Query",
        Body: `
        Name: ${e.target[0].value}
        Email: ${e.target[1].value}
        Number: ${e.target[2].value}
        Message: ${e.target[3].value}
        `
    }).then(
        message => {
            // console.log(message);
            if (message == 'OK') {
                contactForm.querySelector('.success_message').style.display = 'block';
                e.target[0].value = '';
                e.target[1].value = '';
                e.target[2].value = '';
                e.target[3].value = '';
                setTimeout(() => {
                    contactForm.querySelector('.success_message').style.display = 'none';
                    document.querySelector('.nav__menu ul.nav__list li.nav__item:first-child a').click();
                }, 2000);
            }
            else {
                alert('Server Error! 404');
            }
        }
    );
});













