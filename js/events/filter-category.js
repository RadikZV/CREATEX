window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    let select = function() {
        let selectHeaderParent = document.querySelectorAll(".custom-filter-select__select-item");

        let selectItem = document.querySelectorAll(".custom-filter-select__item");
        let currentText;
        selectHeaderParent.forEach(item => {
            item.addEventListener("click", selectToggle);
            item.closest('.custom-filter-select').classList.toggle('is--active');
            
        })

        selectItem.forEach(item => {
            // item.addEventListener("click", function() {
            //     this.closest('.filter-events__category').classList.toggle('is--active');
            // })

            item.addEventListener("click", selectChoose);
        })

        function selectToggle() {
            this.parentElement.classList.toggle('is--active');
        }

        function selectChoose() {
            let text = this.innerText;
            currentText = this.closest('.custom-filter-select').querySelector('.custom-filter-select__current');

            currentText.innerText = text;
        }


        let kindDataAttribute,
            kinds = document.querySelectorAll(".filter-events__item-kind"),
            outputForFilteredEvents = document.querySelector("#events__items"),
            filteredKindsItems = [],
            eventsItems = document.querySelectorAll('.item-events');

        let eventsItemsArray = Array.from(eventsItems);

        kinds.forEach(item => {
            item.addEventListener("click", selectTopic);
        })

        console.log(kinds)

        function selectTopic() {
            kinds.forEach(item => {
                item.classList.remove("filter-events__current");
            })
            this.classList.add("filter-events__current");
            kindDataAttribute = this.getAttribute("data-select-kind");
            // selectedTopicDataAttribute = this.

            // console.log(kindDataAttribute)

            // console.log(filteredKindsItems)
            
            showFilteredEvents(kindDataAttribute);
        }

        function showFilteredEvents(kindDataAttribute) {
            outputForFilteredEvents.innerHTML = "";

            // console.log(eventsItemsArray)
            console.log(kindDataAttribute)
            filteredKindsItems = eventsItemsArray.filter(item => item.getAttribute('data-select-kind') === kindDataAttribute);
            // filteredKindsItems = eventsItemsArray.filter(item => {
            //     console.log( item.getAttribute('data-select-kind'))
            //     item.getAttribute('data-select-kind') === kindDataAttribute
            // });
                                                    // .filter(item => item.getAttribute('data-select-topic') === selectedTopicDataAttibute;)
            console.log(filteredKindsItems)
            for(let i = 0; i < filteredKindsItems.length; i++) {
                let currentEl = filteredKindsItems[i];
                console.log(filteredKindsItems)

                outputForFilteredEvents.insertAdjacentHTML("beforeend", currentEl.outerHTML);
            }

            if(kindDataAttribute === "All themes") {
                eventsItems.forEach(item => {
                    outputForFilteredEvents.insertAdjacentHTML("beforeend", item.outerHTML);
                })
            }
        }
    }

    select();  
      
  };

