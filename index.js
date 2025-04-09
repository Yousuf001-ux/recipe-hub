let cardContainer = document.getElementById("cards")
let search = document.getElementById("searchBar")
let trendingSection = document.getElementById("trire")

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

search.addEventListener("keyup", performSearch)
function performSearch(event){
    if(event.key === "Enter"){
        let searchValue = search.value.trim()
        // console.log(searchValue);

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`).then((response)=>{
            return response.json()
        }).then((data)=>{
            trendingSection.innerHTML = " "
            cardContainer.innerHTML = " "

            let searchResults = data.meals
            searchResults.forEach((mealDetails)=>{
                let mealName = mealDetails.strMeal
                let thumbnailImage = mealDetails.strMealThumb
                let mealCategory = mealDetails.strCategory

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
        })

        search.value = " "
        search.blur()
    }
}























// let mealName = `cake`

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`).then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })