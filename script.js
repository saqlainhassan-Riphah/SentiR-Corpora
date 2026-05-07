document.getElementById("searchBox").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    let items = document.querySelectorAll(".dataset li");

    items.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(value)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});