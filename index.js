let cardContainer = document.getElementById("cards")

// This function randomly prints recipe on the UI. The function loops through the api 15times and randomly selects recipe and prints it on the UI
function initializeUI(){
    for (let n = 0; n < 15; n++){
        setTimeout(() => {
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((response)=>{
                return response.json()
            }).then((data)=>{
                // console.log(data);
                let mealName = data.meals[0].strMeal
                let thumbnailImage = data.meals[0].strMealThumb
                let mealCategory = data.meals[0].strCategory
                // console.log(mealCategory);
                
                let card = document.createElement("div")
                card.classList.add("card")

                let thumbnail = document.createElement("div")
                thumbnail.classList.add("thumbnail")
                let image = document.createElement("img")
                image.setAttribute("src",`${thumbnailImage}`)

                let mealInfoContainer = document.createElement("div")
                mealInfoContainer.classList.add("meal-info")

                let mealNameContainer = document.createElement("div")
                mealNameContainer.classList.add("meal-name")
                let heading = document.createElement("h1")
                heading.classList.add("heading")
                heading.textContent = mealName

                let mealCategoryContainer = document.createElement("div")
                mealCategoryContainer.classList.add("meal-category")
                let paragraph = document.createElement("p")
                paragraph.classList.add("paragraph")
                paragraph.textContent = mealCategory

                mealCategoryContainer.append(paragraph)
                mealNameContainer.append(heading)
                mealInfoContainer.append(mealNameContainer,mealCategoryContainer)
                thumbnail.append(image)
                card.append(thumbnail,mealInfoContainer)
                cardContainer.append(card)
            })  
        }, n * 500);
    }
}
initializeUI()























// let mealName = `cake`

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`).then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })