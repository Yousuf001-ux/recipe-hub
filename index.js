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

                            // measurements
                            let measurement1 = mealData.meals[0].strMeasure1
                            let measurement2 = mealData.meals[0].strMeasure2
                            let measurement3 = mealData.meals[0].strMeasure3
                            let measurement4 = mealData.meals[0].strMeasure4
                            let measurement5 = mealData.meals[0].strMeasure5
                            let measurement6 = mealData.meals[0].strMeasure6
                            let measurement7 = mealData.meals[0].strMeasure7
                            let measurement8 = mealData.meals[0].strMeasure8
                            let measurement9 = mealData.meals[0].strMeasure9
                            let measurement10 = mealData.meals[0].strMeasure10
                            let measurement11 = mealData.meals[0].strMeasure11
                            let measurement12 = mealData.meals[0].strMeasure12
                            let measurement13 = mealData.meals[0].strMeasure13
                            let measurement14 = mealData.meals[0].strMeasure14
                            let measurement15 = mealData.meals[0].strMeasure15
                            let measurement16 = mealData.meals[0].strMeasure16
                            let measurement17 = mealData.meals[0].strMeasure17
                            let measurement18 = mealData.meals[0].strMeasure18
                            let measurement19 = mealData.meals[0].strMeasure19
                            let measurement20 = mealData.meals[0].strMeasure20

                            // Ingredients
                            let ingdts1 = mealData.meals[0].strIngredient1
                            let ingdts2 = mealData.meals[0].strIngredient2
                            let ingdts3 = mealData.meals[0].strIngredient3
                            let ingdts4 = mealData.meals[0].strIngredient4
                            let ingdts5 = mealData.meals[0].strIngredient5
                            let ingdts6 = mealData.meals[0].strIngredient6
                            let ingdts7 = mealData.meals[0].strIngredient7
                            let ingdts8 = mealData.meals[0].strIngredient8
                            let ingdts9 = mealData.meals[0].strIngredient9
                            let ingdts10 = mealData.meals[0].strIngredient10
                            let ingdts11 = mealData.meals[0].strIngredient11
                            let ingdts12 = mealData.meals[0].strIngredient12
                            let ingdts13 = mealData.meals[0].strIngredient13
                            let ingdts14 = mealData.meals[0].strIngredient14
                            let ingdts15 = mealData.meals[0].strIngredient15
                            let ingdts16 = mealData.meals[0].strIngredient16
                            let ingdts17 = mealData.meals[0].strIngredient17
                            let ingdts18 = mealData.meals[0].strIngredient18
                            let ingdts19 = mealData.meals[0].strIngredient19
                            let ingdts20 = mealData.meals[0].strIngredient20

                            // Main ingredients
                            let ingredient1 = `${measurement1} ${ingdts1}`
                            let ingredient2 = `${measurement2} ${ingdts2}`
                            let ingredient3 = `${measurement3} ${ingdts3}`
                            let ingredient4 = `${measurement4} ${ingdts4}`
                            let ingredient5 = `${measurement5} ${ingdts5}`
                            let ingredient6 = `${measurement6} ${ingdts6}`
                            let ingredient7 = `${measurement7} ${ingdts7}`
                            let ingredient8 = `${measurement8} ${ingdts8}`
                            let ingredient9 = `${measurement9} ${ingdts9}`
                            let ingredient10 = `${measurement10} ${ingdts10}`
                            let ingredient11 = `${measurement11} ${ingdts11}`
                            let ingredient12 = `${measurement12} ${ingdts12}`
                            let ingredient13 = `${measurement13} ${ingdts13}`
                            let ingredient14 = `${measurement14} ${ingdts14}`
                            let ingredient15 = `${measurement15} ${ingdts15}`
                            let ingredient16 = `${measurement16} ${ingdts16}`
                            let ingredient17 = `${measurement17} ${ingdts17}`
                            let ingredient18 = `${measurement18} ${ingdts18}`
                            let ingredient19 = `${measurement19} ${ingdts19}`
                            let ingredient20 = `${measurement20} ${ingdts20}`

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