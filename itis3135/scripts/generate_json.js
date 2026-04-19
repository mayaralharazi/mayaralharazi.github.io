document.getElementById("jsonBtn").addEventListener("click", function () {
    const data = window.buildFormData();

    const pageHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Introduction JSON</title>
    <link rel="stylesheet" href="styles/default.css">
    <script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>
</head>
<body>

<div data-include="components/header.html"></div>

<main>
    <h2>Introduction JSON</h2>
    <pre><code>${window.escapeHtml(JSON.stringify(data, null, 2))}</code></pre>
    <p><a href="intro_form.html">Reset</a></p>
</main>

<div data-include="components/footer.html"></div>

<script src="scripts/HTMLInclude.min.js"></script>
</body>
</html>`;

    document.open();
    document.write(pageHtml);
    document.close();
});
