fetch("data.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("d1_docs").innerText = data.dataset1.size_docs;
    document.getElementById("d1_tokens").innerText = data.dataset1.tokens;

    document.getElementById("d2_docs").innerText = data.dataset2.size_docs;
    document.getElementById("d2_tokens").innerText = data.dataset2.tokens;

  })
  .catch(error => {
    console.log("Data loading error:", error);
  });