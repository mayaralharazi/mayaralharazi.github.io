const form = document.getElementById("form");

// prevent refresh
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const nickname = document.getElementById("nickname").value;
    const lastName = document.getElementById("lastName").value;
    const adjective = document.getElementById("adjective").value;
    const animal = document.getElementById("animal").value;
    const divider = document.getElementById("divider").value;
    const caption = document.getElementById("caption").value;
    const statement = document.getElementById("statement").value;

    // background fields
    const personalBackground = document.getElementById("personalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const subjectBackground = document.getElementById("subjectBackground").value;
    const primaryComputer = document.getElementById("primaryComputer").value;

    // other fields
    const acknowledgment = document.getElementById("acknowledgment").value;
    const ackDate = document.getElementById("ackDate").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const share = document.getElementById("share").value;

    // courses
    const course1 = document.getElementById("course1").value;
    const course2 = document.getElementById("course2").value;
    const course3 = document.getElementById("course3").value;
    const course4 = document.getElementById("course4").value;
    const course5 = document.getElementById("course5").value;

    document.body.innerHTML = `
        <h2>Introduction Form</h2>
        <h3>${firstName} ${middleName} "${nickname}" ${lastName} ${divider} ${adjective} ${animal}</h3>

        <figure>
            <img src="images/IMG_8326.jpeg" width="200">
            <figcaption>${caption}</figcaption>
        </figure>

        <p>${statement}</p>

        <h3>Background</h3>
        <ul>
            <li><strong>Personal:</strong> ${personalBackground}</li>
            <li><strong>Academic:</strong> ${academicBackground}</li>
            <li><strong>Professional:</strong> ${professionalBackground}</li>
            <li><strong>Subject:</strong> ${subjectBackground}</li>
            <li><strong>Primary Computer:</strong> ${primaryComputer}</li>
        </ul>

        <h3>Courses</h3>
        <ul>
            <li>${course1}</li>
            <li>${course2}</li>
            <li>${course3}</li>
            ${course4 ? `<li>${course4}</li>` : ""}
            ${course5 ? `<li>${course5}</li>` : ""}
        </ul>

        <p><strong>Acknowledgment:</strong> ${acknowledgment}</p>
        <p><strong>Date:</strong> ${ackDate}</p>

        <p><strong>Quote:</strong> "${quote}"</p>
        <p><strong>Author:</strong> ${quoteAuthor}</p>

        <p><strong>Funny Thing:</strong> ${funnyThing}</p>
        <p><strong>Share:</strong> ${share}</p>

        <br><a href="intro_form.html">Reset</a>
    `;
});

// clear button
document.getElementById("clearBtn").addEventListener("click", function () {
    document.querySelectorAll("form input, form textarea").forEach(input => input.value = "");
});
