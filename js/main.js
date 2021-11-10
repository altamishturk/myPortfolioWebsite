const nav__toggleElem = document.querySelector('.nav__toggle');
const nav__menuElem = document.querySelector('.nav__menu');
const bx_plusElem = document.querySelector('#plus');
const bx_menuElem = document.querySelector('#menu');
const nav__linkElem = document.querySelectorAll('.nav__link');


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
showPerson(index)

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








