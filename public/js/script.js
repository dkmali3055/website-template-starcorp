// local reviews data
const reviews = [
	{
	  id: 1,
	  name: "susan Jain",
	  img:
	  "images/women1.png",
	  text:
		" StarCorp website works really well with Google for great SEO ranking. It's provide top class UI design for my firm online portal."	},
	{
	  id: 2,
	  name: "anna Patil",
	  img:
		"images/women2.jpg",
	  text:" StarCorp website works really well with Google for great SEO ranking. It's provide top class UI design for my firm online portal."
	},
	{
	  id: 3,
	  name: "Mukund Gupta",
	  img:
		"images/men1.jpg",
	  text:
		" StarCorp website works really well with Google for great SEO ranking. It's provide top class UI design for my firm online portal."
	},
	{
	  id: 4,
	  name: "bill anderson",
	 
	  img:
		"images/men2.jpg",
	  text:
		" StarCorp website works really well with Google for great SEO ranking. It's provide top class UI design for my firm online portal. "
	}
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
	currentItem++;
	if (currentItem > reviews.length - 1) {
	  currentItem = 0;
	}
	showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
	currentItem--;
	if (currentItem < 0) {
	  currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
  });
  