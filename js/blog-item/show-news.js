let newsTemplate = document.querySelector("#news-item-template").innerHTML;
let output = document.querySelector("#check-news__content");
let currentArray,optionsArray, currentItem, itemId = 1, maxItemId = 0;



mainCycle:
while(1) {
    for(let key in news) {
        currentArray = news[key];

        for(let i = 0; i < currentArray.length; i++) {
            currentItem = currentArray[i];
            // for(let j = 0; j < currentArray.length; j++) {
            //     let currentLink = optionsArray[j];
                // if(currentLink.topic == currentLink.getAttribute('data-option')) 
                if(currentItem.id > maxItemId) { 
                    maxItemId = currentItem.id;
                    console.log(maxItemId)
                }

                if(itemId == currentItem.id) {
                    // if(currentItem.time !== "") {
                    //         document.querySelectorAll(".item-news__info").forEach(element => {
                    //             let elem = element.insertAdjacentHTML("beforeend" , ' | <span class="item-news__time-span icon-clock">{{time}}</span>');
                    //             renderedHTML.insertAdjacentHTML("beforeend", elem)
                    //         }); 
                    //         // = document.querySelector(".item-news__info").insertAdjacentHTML("beforeend" , ' | <span class="item-news__time-span icon-clock">{{time}}</span>');
                    //         // document.querySelector("news__item")
                    // }
                
                    let renderedHTML = Mustache.render(newsTemplate, currentItem);
                    
                    output.insertAdjacentHTML("beforeend", renderedHTML);   
                    itemId++;
                }

                

        }

        // secondCycle:
        //     while(1) {
                
        //     }
        
    // let allCoursesNumSpans = document.querySelectorAll(".courses__all-category-quantity");
    // allCoursesNumSpans.forEach(el => el.textContent = maxItemId)
    
        if(maxItemId + 1 == itemId) break mainCycle;
    }

// let topicSpans = document.querySelectorAll(".item-courses__topic");
// topicSpans.forEach(el => {
//     if(el.textContent === "Marketing")
//         el.classList.add("marketing-span")
//     else if(el.textContent === "Management")
//         el.classList.add("management-span")
//     else if(el.textContent === "HR & Recruting")
//         el.classList.add("hr-span")
//     else if(el.textContent === "Design")
//         el.classList.add("design-span")
//     else if(el.textContent === "Development")
//         el.classList.add("development-span")
// })
}

optionsArray = document.querySelectorAll(".item-news__option");
        // console.log(optionsArray)
        
    for(let j = 0; j < optionsArray.length; j++) {
        let currentLink = optionsArray[j];
        // console.log(currentLink)

            if(currentLink.getAttribute("data-option") == "Podcast"){ 
                currentLink.classList.add("icon-mic");
                currentLink.closest(".item-news").querySelector(".item-news__link").textContent = "Listen";
            }
            else if(currentLink.getAttribute("data-option") == "Video"){
                currentLink.classList.add("icon-play");
                currentLink.closest(".item-news").querySelector(".item-news__link").textContent = "Watch";
            }
                
            else if(currentLink.getAttribute("data-option") == "Article"){
                currentLink.classList.add("icon-file");
                currentLink.closest(".item-news").querySelector(".item-news__link").textContent = "Read";
            }
            
    }


    // for(let key in news) {
    //     currentArray = news[key];

    //     for(let i = 0; i < currentArray.length; i++) {
    //         currentItem = currentArray[i];

                
    //         // }
    //     }
    // }

