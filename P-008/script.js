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
    console.log(term);
    

    // Check if search term exists
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                resultHeading.innerHTML = `<h2>Search results for "${term}"</h2>`
                if(data.meals == null){
                    resultHeading.innerHTML = `<p>There are no search results for "${term}". Please enter a valid keyword. </P>`
                } else {
                    mealContainer.innerHTML = data.meals.map( meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `)
                    .join('')
                }


            })

    } else  {
        alert('Please enter a valid search')

    } 

    // Clear Search Term
    search.value= '';
}



// Event listeners
// 1: Submit Form
submit.addEventListener('submit', searchMeal);

// 2: When clicking a Meal
mealContainer.addEventListener('click', e => {
    const mealInfo = e.path.find ( item => {
        console.log(item);
        if(item.classList) {
            return item.classList.contains('meal-Info');
        } else {
                return false
        }
        
    });

    if(mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid');
        console.log(mealID);
    }   // at 1:24:01
});



