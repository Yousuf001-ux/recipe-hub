let cardContainer = document.getElementById("cards")
let search = document.getElementById("searchBar")
let fireEmoji = document.getElementById("fire")
let trendingSection = document.getElementById("trire")
let trendingText = document.getElementById("trext")
let heroSection = document.getElementById("search-section")
let mainContentConatainer = document.getElementById("main-content")
let detailsContainer = document.getElementById("details-content")
let backButton = document.getElementById("details-content")

// This function randomly prints recipe on the UI. The function loops through the api 15times and randomly selects recipe and prints it on the UI
function initializeUI(){
    for (let n = 0; n < 15; n++){
        setTimeout(() => {
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data);
                let mealName = data.meals[0].strMeal
                let thumbnailImage = data.meals[0].strMealThumb
                let mealCategory = data.meals[0].strCategory
                let mealID = data.meals[0].idMeal
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

                card.addEventListener("click", showDetails)
                function showDetails(){
                    if(heroSection.classList.contains("search-section")){
                        heroSection.classList.remove("search-section")
                        heroSection.classList.add("search-section-hidden")
                    }
                    if(mainContentConatainer.classList.contains("main-content")){
                        mainContentConatainer.classList.remove("main-content")
                        mainContentConatainer.classList.add("main-content-hidden")
                    }
                    if(detailsContainer.classList.contains("details-content")){
                        detailsContainer.classList.remove("details-content")
                        detailsContainer.classList.add("details-content-visible")
                    }  
                    // console.log(mealID);
                    if(mealID){
                        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).then((response)=>{
                            return response.json()
                        }).then((mealData)=>{
                            console.log(mealData);
                        })
                    }
                }

                backButton.addEventListener("click", goBack)
                function goBack(){
                    if(heroSection.classList.contains("search-section-hidden")){
                        heroSection.classList.remove("search-section-hidden")
                        heroSection.classList.add("search-section")
                    }
                    if(mainContentConatainer.classList.contains("main-content-hidden")){
                        mainContentConatainer.classList.remove("main-content-hidden")
                        mainContentConatainer.classList.add("main-content")
                    }
                    if(detailsContainer.classList.contains("details-content-visible")){
                        detailsContainer.classList.remove("details-content-visible")
                        detailsContainer.classList.add("details-content")
                    }  
                }
            })  
        }, n * 100);
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
            cardContainer.innerHTML = " "

            if(!data.meals){
                trendingText.innerHTML = `No results found for '${searchValue}'`
                fireEmoji.innerHTML = ""
                return;
            }

            trendingText.innerHTML = `Delicious matches for '${searchValue}'`
            let searchResults = data.meals
            searchResults.forEach((mealDetails)=>{
                setTimeout(()=>{
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

                    card.addEventListener("click", showDetails)
                    function showDetails(){
                    if(heroSection.classList.contains("search-section")){
                        heroSection.classList.remove("search-section")
                        heroSection.classList.add("search-section-hidden")
                    }
                    if(mainContentConatainer.classList.contains("main-content")){
                        mainContentConatainer.classList.remove("main-content")
                        mainContentConatainer.classList.add("main-content-hidden")
                    }
                    if(detailsContainer.classList.contains("details-content")){
                        detailsContainer.classList.remove("details-content")
                        detailsContainer.classList.add("details-content-visible")
                    }

                    backButton.addEventListener("click", goBack)
                function goBack(){
                    if(heroSection.classList.contains("search-section-hidden")){
                        heroSection.classList.remove("search-section-hidden")
                        heroSection.classList.add("search-section")
                    }
                    if(mainContentConatainer.classList.contains("main-content-hidden")){
                        mainContentConatainer.classList.remove("main-content-hidden")
                        mainContentConatainer.classList.add("main-content")
                    }
                    if(detailsContainer.classList.contains("details-content-visible")){
                        detailsContainer.classList.remove("details-content-visible")
                        detailsContainer.classList.add("details-content")
                    }  
                }
                }

                },300)
            })
        })

        search.value = ""
        search.blur()
    }
}























// let mealName = `cake`

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`).then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })