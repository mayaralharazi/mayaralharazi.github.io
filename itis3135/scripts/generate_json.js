document.getElementById("jsonBtn").addEventListener("click", function () {
    const data = window.buildFormData();

    document.body.innerHTML = `
        <h2>Introduction JSON</h2>
        <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
        <p><a href="intro_form.html">Reset</a></p>
    `;
});
