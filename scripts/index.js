//-------Copyright Date Script-------
const date = new Date;
const year = document.getElementById("copyright-year");

year.innerHTML += date.getFullYear();

//Last Modified Script
const modified = document.getElementById("lastModified");
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;
//-------Hamburger Button Script -------

const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//-------List-----

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

let creditsList = [];
//------Functions

createClassCard(courses)

const allLink = document.querySelector("#all")
allLink.addEventListener("click", () => {
    document.querySelector(".classes").innerHTML = "";
    createClassCard(courses);
});

const wddLink = document.querySelector("#wdd")
wddLink.addEventListener("click", () => {
    document.querySelector(".classes").innerHTML = "";
    createClassCard(courses.filter(subject => subject.subject === 'WDD'));
    document.getElementByID()
});

const cseLink = document.querySelector("#cse")
cseLink.addEventListener("click", () => {
    document.querySelector(".classes").innerHTML = "";
    createClassCard(courses.filter(subject => subject.subject === 'CSE'));
    document.getElementByID()
});

function createClassCard(filteredSubject) {
    idNumber = 0;
    creditsList = [];
    filteredSubject.forEach(subject => {
        let completeCheck = subject.completed
        let card = document.createElement("section");
        let classSubject = document.createElement("div");
        let dialogBox = document.createElement("dialog");
        let credit = subject.credits;
        let classTitle = document.createElement("h4");
        let credits = document.createElement("h5");
        let certificate = document.createElement("h5");
        let description = document.createElement("p");
        let technology = document.createElement("h5");
        let openButton = document.createElement("button")
        let closeButton = document.createElement("button")
        idNumber += 1;


        //Button Creation
        classSubject.className = "class-buttons";

        if (completeCheck == true) {
            openButton.textContent = `${subject.subject} ${subject.number}`
            openButton.id = `openButton${idNumber}`
            openButton.className = "open-button-t"
            classSubject.appendChild(openButton)
            creditsList.push(credit);
            console.log(openButton.id)
        }
        else {
            openButton.textContent = `${subject.subject} ${subject.number}`
            openButton.id = `openButton${idNumber}`
            openButton.className = "open-button-f"
            classSubject.appendChild(openButton)
            console.log(openButton.id)
        }
        // Original Text For Classes
        // if (completeCheck == true) {
        //     classSubject.innerHTML = `<p class="subject-t"> ${subject.subject} ${subject.number}</>`
        //     creditsList.push(credit)
        // }
        // else {
        //     classSubject.innerHTML = `<p class="subject-f"> ${subject.subject} ${subject.number}</>`;
        // }

        closeButton.textContent = `Close`
        closeButton.id = `dialogCloseButton${idNumber}`

        //Modal Creation
        dialogBox.id = `dialogBoxText${idNumber}`;
        dialogBox.className = "dialogbox";

        classTitle.textContent = `${subject.title}`;
        credits.textContent = `${subject.credits} Credits`;
        certificate.textContent = `Certificate ${subject.certificate}`;
        description.textContent = `${subject.description}`;
        technology.textContent = `Technology: ${subject.technology}`;



        //Appending card
        card.appendChild(classSubject);
        card.appendChild(dialogBox);

        //Append modal
        dialogBox.appendChild(classTitle);
        dialogBox.appendChild(closeButton);
        dialogBox.appendChild(credits);
        dialogBox.appendChild(certificate);
        dialogBox.appendChild(description);
        dialogBox.appendChild(technology);



        document.querySelector(".classes").appendChild(card);
    })
    let creditsSum = creditsList.reduce((accumulator, current) => accumulator + current, 0);
    let creditsEarned = `Credits earned from completed classes completed: ${creditsSum}`
    const creditAmount = document.getElementById("credits");
    creditAmount.innerHTML = creditsEarned;

    // ========================Dialog Buttons=========================

    const openButton = document.querySelector("#openButton")
    const dialogBoxText = document.querySelector("#dialogBoxText");
    const dialogCloseButton = document.querySelector("#dialogCloseButton");


    // Class Button 1
    openButton1.addEventListener("click", () => {
        dialogBoxText1.showModal();
    });

    dialogCloseButton1.addEventListener("click", () => {
        dialogBoxText1.close();
    });
    // Class Button 2
    openButton2.addEventListener("click", () => {
        dialogBoxText2.showModal();
    });

    dialogCloseButton2.addEventListener("click", () => {
        dialogBoxText2.close();
    });

    // Class Button 3
    openButton3.addEventListener("click", () => {
        dialogBoxText3.showModal();
    });

    dialogCloseButton3.addEventListener("click", () => {
        dialogBoxText3.close();
    });

    // Class Button 4
    openButton4.addEventListener("click", () => {
        dialogBoxText4.showModal();
    });

    dialogCloseButton4.addEventListener("click", () => {
        dialogBoxText4.close();
    });

    // Class Button 5
    openButton5.addEventListener("click", () => {
        dialogBoxText5.showModal();
    });

    dialogCloseButton5.addEventListener("click", () => {
        dialogBoxText5.close();
    });

    // Class Button 6
    openButton6.addEventListener("click", () => {
        dialogBoxText6.showModal();
    });

    dialogCloseButton6.addEventListener("click", () => {
        dialogBoxText6.close();
    });
};

