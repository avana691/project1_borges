const toggleHole = document.getElementById('key-button');

function toggleDoors() {
    const leftDoor = document.getElementById('left-door');
    const rightDoor = document.getElementById('right-door');

    leftDoor.classList.toggle('open');
    rightDoor.classList.toggle('open');
}

toggleHole.addEventListener('click', toggleDoors);


document.addEventListener("DOMContentLoaded", function () {
    const p = document.getElementById("gfpText");
    const sections = p.innerHTML.split("<br><br>");
    p.innerHTML = "";

    let index = 0;

    const interval = setInterval(() => {
        if (index < sections.length) {
            const span = document.createElement("div");
            span.classList.add("fade");
            span.innerHTML = sections[index];
            p.appendChild(span);

            setTimeout(() => {
                span.classList.add("show");
            }, 100);

            p.appendChild(document.createElement("br"));
            p.appendChild(document.createElement("br"));

            index++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
    const p = document.getElementById("crText");
    const sections = p.innerHTML.split("<br><br>");
    p.innerHTML = "";

    let index = 0;

    const interval = setInterval(() => {
        if (index < sections.length) {
            const span = document.createElement("div");
            span.classList.add("fade");
            span.innerHTML = sections[index];
            p.appendChild(span);

            setTimeout(() => {
                span.classList.add("show");
            }, 100);

            p.appendChild(document.createElement("br"));
            p.appendChild(document.createElement("br"));

            index++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
    const p = document.getElementById("bosText");
    const sections = p.innerHTML.split("<br><br>");
    p.innerHTML = "";

    let index = 0;

    const interval = setInterval(() => {
        if (index < sections.length) {
            const span = document.createElement("div");
            span.classList.add("fade");
            span.innerHTML = sections[index];
            p.appendChild(span);

            setTimeout(() => {
                span.classList.add("show");
            }, 100);

            p.appendChild(document.createElement("br"));
            p.appendChild(document.createElement("br"));

            index++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});