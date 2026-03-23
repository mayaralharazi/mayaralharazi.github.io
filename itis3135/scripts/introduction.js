const form = document.getElementById("form");
const imageInput = document.getElementById("image");
const imagePreview = document.getElementById("imagePreview");
const coursesContainer = document.getElementById("coursesContainer");
const addCourseBtn = document.getElementById("addCourseBtn");
const clearBtn = document.getElementById("clearBtn");

const defaultImagePath = "images/IMG_8326.jpeg";
let uploadedImageData = "";

// Default course data
const defaultCourses = [
    {
        department: "ITIS",
        number: "3135",
        name: "Web-Based Application Design and Development",
        reason: "Required course for my major and useful for learning web development."
    },
    {
        department: "ITSC",
        number: "2214",
        name: "Data Structures and Algorithms",
        reason: "Required course and important for programming foundations."
    },
    {
        department: "MATH",
        number: "2164",
        name: "Matrices and Linear Algebra",
        reason: "Required course for Computer Science."
    },
    {
        department: "STAT",
        number: "2122",
        name: "Introduction to Probability and Statistics",
        reason: "Required course and useful for problem solving and data analysis."
    }
];

function createCourseBlock(course = { department: "", number: "", name: "", reason: "" }) {
    const wrapper = document.createElement("div");
    wrapper.className = "course-block";

    wrapper.innerHTML = `
        <label>Department:</label><br>
        <input type="text" class="course-department" value="${course.department}" placeholder="e.g. ITIS" required><br><br>

        <label>Number:</label><br>
        <input type="text" class="course-number" value="${course.number}" placeholder="e.g. 3135" required><br><br>

        <label>Name:</label><br>
        <input type="text" class="course-name" value="${course.name}" placeholder="Course name" required><br><br>

        <label>Reason:</label><br>
        <textarea class="course-reason" placeholder="Why are you taking this course?" required>${course.reason}</textarea><br><br>

        <button type="button" class="remove-course-btn">Delete Course</button>
        <hr>
    `;

    wrapper.querySelector(".remove-course-btn").addEventListener("click", function () {
        wrapper.remove();
    });

    coursesContainer.appendChild(wrapper);
}

function loadDefaultCourses() {
    coursesContainer.innerHTML = "";
    defaultCourses.forEach(course => createCourseBlock(course));
}

function getCoursesData() {
    const courseBlocks = document.querySelectorAll(".course-block");
    const courses = [];

    courseBlocks.forEach(block => {
        const department = block.querySelector(".course-department").value.trim();
        const number = block.querySelector(".course-number").value.trim();
        const name = block.querySelector(".course-name").value.trim();
        const reason = block.querySelector(".course-reason").value.trim();

        if (department || number || name || reason) {
            courses.push({
                department,
                number,
                name,
                reason
            });
        }
    });

    return courses;
}

function getLinksData() {
    return [
        {
            name: document.getElementById("link1Name").value.trim(),
            href: document.getElementById("link1Url").value.trim()
        },
        {
            name: document.getElementById("link2Name").value.trim(),
            href: document.getElementById("link2Url").value.trim()
        },
        {
            name: document.getElementById("link3Name").value.trim(),
            href: document.getElementById("link3Url").value.trim()
        },
        {
            name: document.getElementById("link4Name").value.trim(),
            href: document.getElementById("link4Url").value.trim()
        },
        {
            name: document.getElementById("link5Name").value.trim(),
            href: document.getElementById("link5Url").value.trim()
        }
    ];
}

function escapeHtml(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function getImageSrc() {
    return uploadedImageData || defaultImagePath;
}

function buildFormData() {
    return {
        first_name: document.getElementById("firstName").value.trim(),
        middle_name: document.getElementById("middleName").value.trim(),
        preferred_name: document.getElementById("nickname").value.trim(),
        last_name: document.getElementById("lastName").value.trim(),
        acknowledgment: document.getElementById("acknowledgment").value.trim(),
        acknowledgment_date: document.getElementById("ackDate").value,
        mascot_adjective: document.getElementById("adjective").value.trim(),
        mascot_animal: document.getElementById("animal").value.trim(),
        divider: document.getElementById("divider").value.trim(),
        image: getImageSrc(),
        image_caption: document.getElementById("caption").value.trim(),
        personal_statement: document.getElementById("statement").value.trim(),

        personal_background: document.getElementById("personalBackground").value.trim(),
        professional_background: document.getElementById("professionalBackground").value.trim(),
        academic_background: document.getElementById("academicBackground").value.trim(),
        subject_background: document.getElementById("subjectBackground").value.trim(),
        primary_computer: document.getElementById("primaryComputer").value.trim(),
        funny_thing: document.getElementById("funnyThing").value.trim(),
        share: document.getElementById("share").value.trim(),

        quote: document.getElementById("quote").value.trim(),
        quote_author: document.getElementById("quoteAuthor").value.trim(),

        courses: getCoursesData(),
        links: getLinksData()
    };
}

function buildDisplayName(data) {
    const middle = data.middle_name ? ` ${data.middle_name}` : "";
    const preferred = data.preferred_name ? ` "${data.preferred_name}"` : "";
    return `${data.first_name}${middle}${preferred} ${data.last_name} ${data.divider} ${data.mascot_adjective} ${data.mascot_animal}`;
}

function renderIntroPage(data, h2Text = "Introduction Form") {
    const coursesHtml = data.courses.map(course => `
        <li>
            <strong>${escapeHtml(course.department)} ${escapeHtml(course.number)} - ${escapeHtml(course.name)}:</strong>
            ${escapeHtml(course.reason)}
        </li>
    `).join("");

    const linksHtml = data.links.map(link => `
        <li><a href="${escapeHtml(link.href)}" target="_blank">${escapeHtml(link.name)}</a></li>
    `).join("");

    const funnyThingHtml = data.funny_thing
        ? `<li><strong>Funny Thing:</strong> ${escapeHtml(data.funny_thing)}</li>`
        : "";

    const shareHtml = data.share
        ? `<li><strong>Something I Would Like to Share:</strong> ${escapeHtml(data.share)}</li>`
        : "";

    document.body.innerHTML = `
        <h2>${escapeHtml(h2Text)}</h2>
        <h3>${escapeHtml(buildDisplayName(data))}</h3>

        <figure>
            <img src="${data.image}" alt="${escapeHtml(data.image_caption)}" width="250">
            <figcaption>${escapeHtml(data.image_caption)}</figcaption>
        </figure>

        <ul>
            <li><strong>Personal Background:</strong> ${escapeHtml(data.personal_background)}</li>
            <li><strong>Professional Background:</strong> ${escapeHtml(data.professional_background)}</li>
            <li><strong>Academic Background:</strong> ${escapeHtml(data.academic_background)}</li>
            <li><strong>Subject Background:</strong> ${escapeHtml(data.subject_background)}</li>
            <li><strong>Primary Computer:</strong> ${escapeHtml(data.primary_computer)}</li>
            <li><strong>Personal Statement:</strong> ${escapeHtml(data.personal_statement)}</li>
            ${funnyThingHtml}
            ${shareHtml}
            <li><strong>Courses I'm Taking:</strong>
                <ul>
                    ${coursesHtml}
                </ul>
            </li>
            <li><strong>Favorite Quote:</strong> "${escapeHtml(data.quote)}" - ${escapeHtml(data.quote_author)}</li>
            <li><strong>Acknowledgment:</strong> ${escapeHtml(data.acknowledgment)}</li>
            <li><strong>Acknowledgement Date:</strong> ${escapeHtml(data.acknowledgment_date)}</li>
            <li><strong>Links:</strong>
                <ul>
                    ${linksHtml}
                </ul>
            </li>
        </ul>

        <p><a href="intro_form.html">Reset</a></p>
    `;
}

// expose helpers for other JS files
window.buildFormData = buildFormData;
window.buildDisplayName = buildDisplayName;
window.escapeHtml = escapeHtml;

// image preview
imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];

    if (!file) {
        uploadedImageData = "";
        imagePreview.src = defaultImagePath;
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        uploadedImageData = event.target.result;
        imagePreview.src = uploadedImageData;
    };
    reader.readAsDataURL(file);
});

// add course
addCourseBtn.addEventListener("click", function () {
    createCourseBlock();
});

// submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = buildFormData();
    renderIntroPage(data, "Introduction Form");
});

// clear
clearBtn.addEventListener("click", function () {
    document.querySelectorAll("form input[type='text'], form input[type='url'], form input[type='date'], form textarea").forEach(field => {
        field.value = "";
    });

    imageInput.value = "";
    uploadedImageData = "";
    imagePreview.src = defaultImagePath;
    coursesContainer.innerHTML = "";
});

// reset
form.addEventListener("reset", function () {
    setTimeout(() => {
        uploadedImageData = "";
        imagePreview.src = defaultImagePath;
        loadDefaultCourses();
    }, 0);
});

// initialize
loadDefaultCourses();
