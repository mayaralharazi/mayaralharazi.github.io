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

    // NEW fields
    const acknowledgment = document.getElementById("acknowledgment").value;
    const ackDate = document.getElementById("ackDate").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const share = document.getElementById("share").value;

    const data = {
        first_name: firstName,
        middle_name: middleName,
        preferred_name: nickname,
        last_name: lastName,
        divider: divider,
        mascot_adjective: adjective,
        mascot_animal: animal,
        image_caption: caption,
        personal_statement: statement,

        // NEW data added
        acknowledgment: acknowledgment,
        acknowledgment_date: ackDate,
        quote: quote,
        quote_author: quoteAuthor,
        funny_thing: funnyThing,
        share: share
    };

    document.body.innerHTML = `
        <h2>Introduction JSON</h2>
        <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
        <br><a href="intro_form.html">Reset</a>
    `;
});
