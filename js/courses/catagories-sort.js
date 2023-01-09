window.addEventListener("load", function() {

	// Ваш код
    let filterCategory = function() {
        
        let categories = document.querySelectorAll(".courses__category"),
            coursesItems = document.querySelectorAll(".courses__item")
            outputForFilteredCourses = document.querySelector("#courses__items");

        let coursesItemsArray = Array.from(coursesItems);
        
        let filteredCategoryItems = [],
            categotyDataAttibute;

        categories.forEach(item => {
            item.addEventListener("click", selectCategory)
        })

        function selectCategory() {
            categories.forEach(item => {
                item.classList.remove("active--category");
            })
            this.classList.add("active--category");
            categoryDataAttibute = this.getAttribute("data-category");
            
            showFilteredCourses(categoryDataAttibute);
        }

        function showFilteredCourses(categoryDataAttibute) {
            outputForFilteredCourses.innerHTML = "";

            filteredCategoryItems = coursesItemsArray.filter(item => item.getAttribute('data-item-category') === categoryDataAttibute);

            for(let i = 0; i < filteredCategoryItems.length; i++) {
                let currentEl = filteredCategoryItems[i];

                outputForFilteredCourses.insertAdjacentHTML("beforeend", currentEl.outerHTML);
            }

            if(categoryDataAttibute === "All") {
                coursesItems.forEach(item => {
                    outputForFilteredCourses.insertAdjacentHTML("beforeend", item.outerHTML);
                })
            }
    // outputForFilteredCourses.insertAdjacentHTML("beforeend", currentEl.outerHTML);
            // for(let categoryDataAttibute in courses) {
            //     let currentArray = courses[categoryDataAttibute.toLocaleLowerCase()]

            //     for(let i = 0; i < currentArray.length; i++) {

            //     }
            // }
            
            // filteredCategoryItems.length = 0;
            // coursesItems.forEach(item => {
            //     if(item.getAttribute("data-item-category") === categoryDataAttibute) {
            //         filteredCategoryItems.push(item);
            //     }
            // })

            
            
        }

        console.log(filteredCategoryItems)
        console.log(coursesItems)

    }

    filterCategory();
});



