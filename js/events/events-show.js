let eventTemplate = document.querySelector("#events-item-template").innerHTML;
		let output = document.querySelector(".events__items");

		for(let i = 0; i < events.length; i++) {
			const currentItem = events[i];
			

			

			let renderedHTML = Mustache.render(eventTemplate, currentItem);
			output.insertAdjacentHTML("beforeend", renderedHTML);
		}

		// let topicSpans = document.querySelectorAll(".item-courses__topic");
		// topicSpans.forEach(el => {
		// 	if(el.textContent === "Marketing")
		// 		el.classList.add("marketing-span")
		// 	else if(el.textContent === "Management")
		// 		el.classList.add("management-span")
		// 	else if(el.textContent === "HR & Recruting")
		// 		el.classList.add("hr-span")
		// 	else if(el.textContent === "Design")
		// 		el.classList.add("design-span")
		// 	else if(el.textContent === "Development")
		// 		el.classList.add("development-span")
		// });