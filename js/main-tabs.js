//  TABS  ==========================

let tab = function() {
    let tabNav = document.querySelectorAll('.tabs-benefits__item'),
        tabContent = document.querySelectorAll(".tab-content"),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener("click", selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove("active")
        })
        this.classList.add("active");
        tabName = this.getAttribute("data-tab-index");
        console.log(tabName)
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName + "-content") ? item.classList.add("active") : item.classList.remove("active");
        })
    }
};

tab();