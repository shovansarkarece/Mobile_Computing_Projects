async function activate() {

    const selected = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
        .map(cb => cb.value);

    if (selected.length === 0) {
        alert("Select at least one use case");
        return;
    }

    const body = document.body;
    const button = document.querySelector("button");
    const resultBox = document.getElementById("result");

    // Reset previous themes
    body.classList.remove("theme-blue", "theme-purple", "theme-green");
    button.classList.remove("btn-blue", "btn-purple", "btn-green");
    resultBox.classList.remove("result-blue", "result-purple", "result-green");

    let themeClass = "";
    let btnClass = "";
    let resultClass = "";

    if (selected.includes("UC-01")) {
        themeClass = "theme-blue";
        btnClass = "btn-blue";
        resultClass = "result-blue";
    }

    if (selected.includes("UC-02")) {
        themeClass = "theme-purple";
        btnClass = "btn-purple";
        resultClass = "result-purple";
    }

    if (selected.includes("UC-03")) {
        themeClass = "theme-green";
        btnClass = "btn-green";
        resultClass = "result-green";
    }

    body.classList.add(themeClass);
    button.classList.add(btnClass);
    resultBox.classList.add(resultClass);

    document.getElementById("loader").style.display = "block";
    resultBox.innerText = "";

    const response = await fetch("http://localhost:5000/api/usecases/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ use_cases: selected })
    });

    const data = await response.json();

    document.getElementById("loader").style.display = "none";

    let message = "";

    data.activated.forEach(item => {
        message += `${item.use_case} → ${item.slice_id} activated\n`;
    });

    resultBox.innerText = message;

    animateTopology(selected);
}


function animateTopology(selectedUseCases) {

    const nodes = document.querySelectorAll(".node");

    // Remove previous colors
    nodes.forEach(node => {
        node.classList.remove("slice-blue", "slice-purple", "slice-green");
    });

    let colorClass = "";

    if (selectedUseCases.includes("UC-01")) {
        colorClass = "slice-blue";
    }

    if (selectedUseCases.includes("UC-02")) {
        colorClass = "slice-purple";
    }

    if (selectedUseCases.includes("UC-03")) {
        colorClass = "slice-green";
    }

    nodes.forEach((node, index) => {
        setTimeout(() => {
            node.classList.add(colorClass);
        }, index * 400);
    });
}

