document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    // Function to return a promise resolving with an array after 3 seconds
    function getNumbers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4]);
            }, 3000);
        });
    }

    // Function to filter even numbers after 1 second
    function filterEvenNumbers(numbers) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = numbers.filter(num => num % 2 === 0);
                outputDiv.textContent = Filtered Evens: ${evens.join(", ")};
                resolve(evens);
            }, 1000);
        });
    }

    // Function to multiply even numbers by 2 after 2 seconds
    function multiplyByTwo(numbers) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = numbers.map(num => num * 2);
                outputDiv.textContent = Doubled Values: ${doubled.join(", ")};
                resolve(doubled);
            }, 2000);
        });
    }

    // Execute the chained promises
    getNumbers()
        .then(filterEvenNumbers)
        .then(multiplyByTwo)
        .catch(error => {
            outputDiv.textContent = Error: ${error};
        });
});