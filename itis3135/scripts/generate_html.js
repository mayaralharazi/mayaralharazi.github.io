document.getElementById("htmlBtn").addEventListener("click", function () {
    const data = window.buildFormData();

    const coursesHtml = data.courses.map((course) => `
<li>
    <strong>${window.escapeHtml(course.department)} ${window.escapeHtml(course.number)}: ${window.escapeHtml(course.name)}</strong>${course.reason ? ` - ${window.escapeHtml(course.reason)}` : ""}
</li>`).join("");

    const linksHtml = data.links.map((link) => `
<li><a href="${window.escapeHtml(link.href)}" target="_blank">${window.escapeHtml(link.name)}</a></li>`).join("");

    const funnyThingHtml = data.funny_thing
        ? `<li><strong>Funny Thing:</strong> ${window.escapeHtml(data.funny_thing)}</li>`
        : "";

    const shareHtml = data.share
        ? `<li><strong>Something I Would Like to Share:</strong> ${window.escapeHtml(data.share)}</li>`
        : "";

    const htmlCode = `<h2>Introduction HTML</h2>
<h3>${window.escapeHtml(window.buildDisplayName(data))}</h3>
<figure>
    <img src="${window.escapeHtml(data.image)}" alt="Photo of ${window.escapeHtml(data.first_name)} ${window.escapeHtml(data.last_name)}" width="300">
    <figcaption>${window.escapeHtml(data.image_caption)}</figcaption>
</figure>
<p>${window.escapeHtml(data.personal_statement)}</p>
<ul>
    <li><strong>Personal Background:</strong> ${window.escapeHtml(data.personal_background)}</li>
    <li><strong>Professional Background:</strong> ${window.escapeHtml(data.professional_background)}</li>
    <li><strong>Academic Background:</strong> ${window.escapeHtml(data.academic_background)}</li>
    <li><strong>Subject Background:</strong> ${window.escapeHtml(data.subject_background)}</li>
    <li><strong>Primary Computer:</strong> ${window.escapeHtml(data.primary_computer)}</li>
    ${funnyThingHtml}
    ${shareHtml}
</ul>
<h3>Courses</h3>
<ul>
${coursesHtml}
</ul>
<blockquote>
    "${window.escapeHtml(data.quote)}"
    <cite> - ${window.escapeHtml(data.quote_author)}</cite>
</blockquote>
<h3>Links</h3>
<ul>
${linksHtml}
</ul>`;

    const pageHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mayar Alharazi's Jolly Dolphin ~ ITIS 3135 ~ Introduction HTML</title>
    <link rel="stylesheet" href="styles/default.css">
    <script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>
</head>
<body>

<div data-include="components/header.html"></div>

<main>
    <h2>Introduction HTML</h2>
    <pre><code>${window.escapeHtml(htmlCode)}</code></pre>
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
