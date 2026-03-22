document.getElementById("htmlBtn").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const nickname = document.getElementById("nickname").value;
    const lastName = document.getElementById("lastName").value;
    const adjective = document.getElementById("adjective").value;
    const animal = document.getElementById("animal").value;
    const divider = document.getElementById("divider").value;
    const caption = document.getElementById("caption").value;
    const statement = document.getElementById("statement").value;

    const htmlCode = `
<h2>Introduction HTML</h2>
<h3>${firstName} ${middleName} "${nickname}" ${lastName} ${divider} ${adjective} ${animal}</h3>
<figure>
    <img src="images/yourphoto.jpg" alt="${caption}">
    <figcaption>${caption}</figcaption>
</figure>
<p>${statement}</p>
`;

    document.body.innerHTML = `
        <h2>Introduction HTML</h2>
        <pre><code>${htmlCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
        <br><a href="intro_form.html">Reset</a>
    `;
});
