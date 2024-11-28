document.addEventListener('DOMContentLoaded',() => {
    fetch("/js/data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
        console.error("Unable to fetch data:", error);
    });

})