document.addEventListener("DOMContentLoaded", function () {

    fetch("./data.json")
        .then(res => res.json())
        .then(data => {

            // Dataset 1
            document.getElementById("d1_docs").innerText = data.dataset1.size_docs;
            document.getElementById("d1_tokens").innerText = data.dataset1.tokens;

            // Dataset 2
            document.getElementById("d2_docs").innerText = data.dataset2.size_docs;
            document.getElementById("d2_tokens").innerText = data.dataset2.tokens;

        })
        .catch(err => {
            console.log("JSON load error:", err);
        });

});