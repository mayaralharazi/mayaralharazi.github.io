document.getElementById("htmlBtn").addEventListener("click", function () {
    const data = window.buildFormData();

    const coursesHtml = data.courses.map(course => `
    <li>
        <strong>${window.escapeHtml(course.department)} ${window.escapeHtml(course.number)} - ${window.escapeHtml(course.name)}:</strong>
        ${window.escapeHtml(course.reason)}
    </li>`).join("");

    const linksHtml = data.links.map(link => `
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
    <img src="${data.image}" alt="${window.escapeHtml(data.image_caption)}" width="250">
    <figcaption>${window.escapeHtml(data.image_caption)}</figcaption>
</figure>
<ul>
    <li><strong>Personal Background:</strong> ${window.escapeHtml(data.personal_background)}</li>
    <li><strong>Professional Background:</strong> ${window.escapeHtml(data.professional_background)}</li>
    <li><strong>Academic Background:</strong> ${window.escapeHtml(data.academic_background)}</li>
    <li><strong>Subject Background:</strong> ${window.escapeHtml(data.subject_background)}</li>
    <li><strong>Primary Computer:</strong> ${window.escapeHtml(data.primary_computer)}</li>
    <li><strong>Personal Statement:</strong> ${window.escapeHtml(data.personal_statement)}</li>
    ${funnyThingHtml}
    ${shareHtml}
    <li><strong>Courses I'm Taking:</strong>
        <ul>${coursesHtml}
        </ul>
    </li>
    <li><strong>Favorite Quote:</strong> "${window.escapeHtml(data.quote)}" - ${window.escapeHtml(data.quote_author)}</li>
    <li><strong>Acknowledgment:</strong> ${window.escapeHtml(data.acknowledgment)}</li>
    <li><strong>Acknowledgement Date:</strong> ${window.escapeHtml(data.acknowledgment_date)}</li>
    <li><strong>Links:</strong>
        <ul>${linksHtml}
        </ul>
    </li>
</ul>`;

    document.body.innerHTML = `
        <h2>Introduction HTML</h2>
        <pre><code>${window.escapeHtml(htmlCode)}</code></pre>
        <p><a href="intro_form.html">Reset</a></p>
    `;
});
