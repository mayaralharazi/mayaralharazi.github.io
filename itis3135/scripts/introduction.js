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

    document.body.innerHTML = `
        <h2>Introduction Form</h2>
        <h3>${firstName} ${middleName} "${nickname}" ${lastName} ${divider} ${adjective} ${animal}</h3>

        <figure>
            <img src="images/yourphoto.jpg" width="200">
            <figcaption>${caption}</figcaption>
        </figure>

        <p>${statement}</p>

        <br><a href="intro_form.html">Reset</a>
    `;
});

// clear button
document.getElementById("clearBtn").addEventListener("click", function () {
    document.querySelectorAll("form input, form textarea").forEach(input => input.value = "");
});
