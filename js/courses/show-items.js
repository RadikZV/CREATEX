// if (!Object.prototype.length) {
//     Object.defineProperty(Object.prototype, 'length', {
//         get: function() {
//             return Object.keys(this).length
//         }
//     })
// }
        
let couseTemplate = document.querySelector("#course-item-template").innerHTML;
let output = document.querySelector(".courses__items");
let currentArray, currentItem, itemId = 1, maxItemId = 0;

let quantitySpanArray = document.querySelectorAll(".courses__category-quantity");

mainCycle:
while(1) {
    for(let key in courses) {
        currentArray = courses[key];

        for(let i = 0; i < currentArray.length; i++) {
            currentItem = currentArray[i];

            for(let j = 0; j < quantitySpanArray.length; j++) {
                let currentSpan = quantitySpanArray[j];
                let currentSpanParent = currentSpan.closest('.courses__category');

                if(currentItem.topic == currentSpanParent.getAttribute("data-category"))
                    currentSpan.textContent = currentArray.length;
            }

            if(currentItem.id > maxItemId)  
                maxItemId = currentItem.id;

            if(itemId == currentItem.id) {
                let renderedHTML = Mustache.render(couseTemplate, currentItem);
                output.insertAdjacentHTML("beforeend", renderedHTML);   
                itemId++;
            }
        }
    }
    let allCoursesNumSpans = document.querySelectorAll(".courses__all-category-quantity");
    allCoursesNumSpans.forEach(el => el.textContent = maxItemId)
    
    if(maxItemId + 1 == itemId) break mainCycle;
}

let topicSpans = document.querySelectorAll(".item-courses__topic");
topicSpans.forEach(el => {
    if(el.textContent === "Marketing")
        el.classList.add("marketing-span")
    else if(el.textContent === "Management")
        el.classList.add("management-span")
    else if(el.textContent === "HR & Recruting")
        el.classList.add("hr-span")
    else if(el.textContent === "Design")
        el.classList.add("design-span")
    else if(el.textContent === "Development")
        el.classList.add("development-span")
});




        
        
        