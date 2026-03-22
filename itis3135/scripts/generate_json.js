document.getElementById("jsonBtn").addEventListener("click", function () {
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

    const data = {
        first_name: firstName,
        middle_name: middleName,
        preferred_name: nickname,
        last_name: lastName,
        divider: divider,
        mascot_adjective: adjective,
        mascot_animal: animal,
        image: "images/IMG_8326.jpeg",
        image_caption: caption,
        personal_statement: statement,

        personal_background: personalBackground,
        academic_background: academicBackground,
        professional_background: professionalBackground,
        subject_background: subjectBackground,
        primary_computer: primaryComputer,

        acknowledgment: acknowledgment,
        acknowledgment_date: ackDate,
        quote: quote,
        quote_author: quoteAuthor,
        funny_thing: funnyThing,
        share: share,

        courses: [course1, course2, course3, course4, course5].filter(c => c !== "")
    };

    document.body.innerHTML = `
        <h2>Introduction JSON</h2>
        <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
        <br><a href="intro_form.html">Reset</a>
    `;
});
