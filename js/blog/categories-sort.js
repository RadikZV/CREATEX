window.addEventListener("load", function() {

    let filterCategory = function() {
        
        let categories = document.querySelectorAll(".news__category"),
            coursesItems = document.querySelectorAll(".news__item")
            outputForFilteredCourses = document.querySelector("#news__items"),
            selectTopics = document.querySelectorAll(".filter-news__item");

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
            // selectedTopicDataAttribute = this.
            
            showFilteredCourses(categoryDataAttibute);
        }

        selectTopics.forEach(item => {
            item.addEventListener("click", selectBlogTopicAttribute)
        })

        function selectBlogTopicAttribute() {
            selectTopics.forEach(item => {
                item.classList.remove("filter-news__current");
            })
            this.classList.add("filter-news__current");
            selectedTopicDataAttribute = this.getAttribute("data-select-topic");

            console.log(selectedTopicDataAttribute)
            showFilteredCourses(selectedTopicDataAttribute)
        }

        function showFilteredCourses(categoryDataAttibute, selectedTopicDataAttribute) {

            outputForFilteredCourses.innerHTML = "";

            filteredCategoryItems = coursesItemsArray.filter(item => item.getAttribute('data-option-select') === categoryDataAttibute)
                                                    // .filter(item => item.getAttribute('data-select-topic') === selectedTopicDataAttibute;)

            for(let i = 0; i < filteredCategoryItems.length; i++) {
                let currentEl = filteredCategoryItems[i];

                currentEl.dataset.selectedTopicDataAttribute

                outputForFilteredCourses.insertAdjacentHTML("beforeend", currentEl.outerHTML);
            }

            if(categoryDataAttibute === "All") {
                coursesItems.forEach(item => {
                    outputForFilteredCourses.insertAdjacentHTML("beforeend", item.outerHTML);
                })
            }
        }






        

        selectTopics.forEach(item => {
            item.addEventListener("click", selectBlogTopicAttribute)
        })

        function selectBlogTopicAttribute() {
            selectTopics.forEach(item => {
                item.classList.remove("filter-news__current");
            })
            this.classList.add("filter-news__current");
            selectedTopicDataAttibute = this.getAttribute("data-select-topic");

            console.log(selectedTopicDataAttibute)
            selectBlogTopic(selectedTopicDataAttibute)
        }

        

        function selectBlogTopic(selectedTopicDataAttibute) {

            outputForFilteredCourses.innerHTML = "";

            filteredCategoryItems = coursesItemsArray.filter(item => item.getAttribute('data-select-topic') === selectedTopicDataAttibute);
            for(let i = 0; i < filteredCategoryItems.length; i++) {
                let currentEl = filteredCategoryItems[i];

                outputForFilteredCourses.insertAdjacentHTML("beforeend", currentEl.outerHTML);
            }

            if(selectedTopicDataAttibute === "All themes") {
                coursesItems.forEach(item => {
                    outputForFilteredCourses.insertAdjacentHTML("beforeend", item.outerHTML);
                })
            }
        }

        console.log(filteredCategoryItems)
        console.log(coursesItems)

    }

    filterCategory();

    
});