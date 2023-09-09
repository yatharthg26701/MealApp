function addMeal() {
    const name = document.getElementById('meal-name').value;
    const description = document.getElementById('meal-description').value;
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${name}</strong>: ${description}`;

    const mealList = document.getElementById('meal-items');
    mealList.appendChild(listItem);

    document.getElementById('meal-name').value = '';
    document.getElementById('meal-description').value = '';
}

function searchMeals(query) {
    const mealList = document.getElementById('meal-items');
    const meals = mealList.getElementsByTagName('li');

    for (const meal of meals) {
        const text = meal.innerText.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            meal.style.display = 'block';
        } else {
            meal.style.display = 'none';
        }
    }
}

const mealForm = document.getElementById('meal-form');
mealForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addMeal();
});

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
    const query = searchInput.value;
    searchMeals(query);
});
