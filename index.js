let cardContainer = document.getElementById("cards")
let search = document.getElementById("searchBar")
let fireEmoji = document.getElementById("fire")
let trendingSection = document.getElementById("trire")
let trendingText = document.getElementById("trext")
let heroSection = document.getElementById("search-section")
let mainContentConatainer = document.getElementById("main-content")
let detailsContainer = document.getElementById("details-content")
let backButton = document.getElementById("back-button")
let details = document.getElementById("details-container")

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
                    details.innerHTML = ""
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

                            let bigThumbnail= mealData.meals[0].strMealThumb
                            let detMealName = mealData.meals[0].strMeal
                            let detMealCategory = mealData.meals[0].strCategory

                            // Instructions
                            let instructions = mealData.meals[0].strInstructions

                            let thumbnailContentContainer = document.createElement("div")
                            thumbnailContentContainer.classList.add("thumbnail-big-content")
                            let bThumbnailContainer = document.createElement("div")
                            bThumbnailContainer.classList.add("thumbnail-big")
                            let thumbnailBig = document.createElement("img")
                            thumbnailBig.setAttribute("src", `${bigThumbnail}`)
                            let contentContainer = document.createElement("div")
                            contentContainer.classList.add("content")
                            let mealNameTimeContainer = document.createElement("div")
                            mealNameTimeContainer.classList.add("meal-name-time")
                            let mealNameContainer = document.createElement("div")
                            mealNameContainer.classList.add("meal-name-d")
                            let dMealName = document.createElement("h1")
                            dMealName.textContent = detMealName
                            let prepTimeContainer = document.createElement("div")
                            prepTimeContainer.classList.add("prep-time")
                            let paragraph = document.createElement("p")
                            paragraph.textContent = "Approximately 30 mins to prepare"    
                            let categoryContainer = document.createElement("div")
                            categoryContainer.classList.add("category")
                            let categoryParagraph = document.createElement("p")
                            categoryParagraph.textContent = detMealCategory

                            let ingInstContainer = document.createElement("div")
                            ingInstContainer.classList.add("ingd-inst")
                            let ingredientsContainer = document.createElement("div")
                            ingredientsContainer.classList.add("ingredients-container")
                            let ingredientTextContainer = document.createElement("div")
                            ingredientTextContainer.classList.add("ingredients-text")
                            let ingredientText = document.createElement("h1")
                            ingredientText.textContent = "Ingredients"
                            let unorderedList = document.createElement("ul")
                            for(let n = 0; n <= 20; n++){
                                let measurement = mealData.meals[0][`strMeasure${n}`]?.trim()
                                let ingredient = mealData.meals[0][`strIngredient${n}`]?.trim()

                                if (measurement && ingredient){
                                    let ingItem = document.createElement("li")
                                    ingItem.textContent = `${measurement} ${ingredient}`
                                    unorderedList.appendChild(ingItem)
                                }
                            }
                            let instructionsContainer = document.createElement("div")
                            instructionsContainer.classList.add("instructions-container")
                            let instructionTextContainer = document.createElement("div")
                            instructionTextContainer.classList.add("instructions-text")
                            let instructionText = document.createElement("h1")
                            instructionText.textContent = "Instructions"
                            let orderedList = document.createElement("ol")
                            let inst = document.createElement("li")
                            inst.textContent = instructions

                            orderedList.append(inst)
                            instructionTextContainer.append(instructionText)
                            instructionsContainer.append(instructionTextContainer,orderedList)

                            ingredientTextContainer.append(ingredientText)
                            ingredientsContainer.append(ingredientTextContainer,unorderedList)
                            ingInstContainer.append(ingredientsContainer,instructionsContainer)

                            categoryContainer.append(categoryParagraph)
                            prepTimeContainer.append(paragraph)
                            mealNameContainer.append(dMealName)
                            mealNameTimeContainer.append(mealNameContainer,prepTimeContainer)
                            contentContainer.append(mealNameTimeContainer,categoryContainer)
                            bThumbnailContainer.append(thumbnailBig)
                            thumbnailContentContainer.append(bThumbnailContainer,contentContainer)
                            details.classList.add("details")
                            details.append(thumbnailContentContainer,ingInstContainer)
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
                    let mealID = mealDetails.idMeal

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
                    details.innerHTML = ""
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

                    if(mealID){
                        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).then((response)=>{
                            return response.json()
                        }).then((mealData)=>{
                            console.log(mealData);

                            let bigThumbnail= mealData.meals[0].strMealThumb
                            let detMealName = mealData.meals[0].strMeal
                            let detMealCategory = mealData.meals[0].strCategory

                            // Instructions
                            let instructions = mealData.meals[0].strInstructions

                            let thumbnailContentContainer = document.createElement("div")
                            thumbnailContentContainer.classList.add("thumbnail-big-content")
                            let bThumbnailContainer = document.createElement("div")
                            bThumbnailContainer.classList.add("thumbnail-big")
                            let thumbnailBig = document.createElement("img")
                            thumbnailBig.setAttribute("src", `${bigThumbnail}`)
                            let contentContainer = document.createElement("div")
                            contentContainer.classList.add("content")
                            let mealNameTimeContainer = document.createElement("div")
                            mealNameTimeContainer.classList.add("meal-name-time")
                            let mealNameContainer = document.createElement("div")
                            mealNameContainer.classList.add("meal-name-d")
                            let dMealName = document.createElement("h1")
                            dMealName.textContent = detMealName
                            let prepTimeContainer = document.createElement("div")
                            prepTimeContainer.classList.add("prep-time")
                            let paragraph = document.createElement("p")
                            paragraph.textContent = "Approximately 30 mins to prepare"    
                            let categoryContainer = document.createElement("div")
                            categoryContainer.classList.add("category")
                            let categoryParagraph = document.createElement("p")
                            categoryParagraph.textContent = detMealCategory

                            let ingInstContainer = document.createElement("div")
                            ingInstContainer.classList.add("ingd-inst")
                            let ingredientsContainer = document.createElement("div")
                            ingredientsContainer.classList.add("ingredients-container")
                            let ingredientTextContainer = document.createElement("div")
                            ingredientTextContainer.classList.add("ingredients-text")
                            let ingredientText = document.createElement("h1")
                            ingredientText.textContent = "Ingredients"
                            let unorderedList = document.createElement("ul")
                            for(let n = 0; n <= 20; n++){
                                let measurement = mealData.meals[0][`strMeasure${n}`]?.trim()
                                let ingredient = mealData.meals[0][`strIngredient${n}`]?.trim()

                                if (measurement && ingredient){
                                    let ingItem = document.createElement("li")
                                    ingItem.textContent = `${measurement} ${ingredient}`
                                    unorderedList.appendChild(ingItem)
                                }
                            }
                            let instructionsContainer = document.createElement("div")
                            instructionsContainer.classList.add("instructions-container")
                            let instructionTextContainer = document.createElement("div")
                            instructionTextContainer.classList.add("instructions-text")
                            let instructionText = document.createElement("h1")
                            instructionText.textContent = "Instructions"
                            let orderedList = document.createElement("ol")
                            let inst = document.createElement("li")
                            inst.textContent = instructions

                            orderedList.append(inst)
                            instructionTextContainer.append(instructionText)
                            instructionsContainer.append(instructionTextContainer,orderedList)

                            ingredientTextContainer.append(ingredientText)
                            ingredientsContainer.append(ingredientTextContainer,unorderedList)
                            ingInstContainer.append(ingredientsContainer,instructionsContainer)

                            categoryContainer.append(categoryParagraph)
                            prepTimeContainer.append(paragraph)
                            mealNameContainer.append(dMealName)
                            mealNameTimeContainer.append(mealNameContainer,prepTimeContainer)
                            contentContainer.append(mealNameTimeContainer,categoryContainer)
                            bThumbnailContainer.append(thumbnailBig)
                            thumbnailContentContainer.append(bThumbnailContainer,contentContainer)
                            details.classList.add("details")
                            details.append(thumbnailContentContainer,ingInstContainer)
                        })
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