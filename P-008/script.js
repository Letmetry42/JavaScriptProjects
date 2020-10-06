const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const resultHeading = document.getElementById('result-heading');
const mealContainer = document.getElementById('meals');
const selectdMeal = document.getElementById('Selected-meal');

// Funtion to search meal from  API and fetch the data

function searchMeal(e) {
    e.preventDefault()

    // Get the search term from input field
    const term = search.value;
    

    // Check if search term exists
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

    } else  {
        alert('Please enter a valid search')

    }


}



// Event listeners
// 1: Submit
submit.addEventListener('submit', searchMeal)



