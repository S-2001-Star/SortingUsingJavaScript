document.getElementById("sortButton").addEventListener("click", function () {
    var input = document.getElementById("numbers").value;
    var numbers = input.split(",").map(Number);

    if (numbers.some(isNaN)) {
        document.getElementById("result").textContent = "Invalid input. Please enter valid numbers separated by commas.";
    } else {
        numbers.sort(function (a, b) {
            return b - a; // Compare in descending order
        });

        document.getElementById("result").textContent = "Sorted in descending order: " + numbers.join(", ");
    }
});