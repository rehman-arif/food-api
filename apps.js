//Food REST API

const btn = document.querySelector('.btn');

const recipeContainer = document.querySelector('.recipe-container');



btn.addEventListener('click', ()=>{
	const searchInput = document.querySelector('#search-input').value.trim();
	
	
	let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`;
	
	let foodMenu = async ()=> {
		let response = await fetch(url);
		let data = await response.json();
		//console.log(data)
		
		let html = '';
		
		if (data.meals){
			data.meals.map(meal => {
				html += `
					
					<article class="recipe-items" data-id=${meal.idMeal}>
						<img src="${meal.strMealThumb}" alt="Food Curnival" />
						<div class="recipe-items-title">
							<h4 class="left">${meal.strMeal}</h4>
							<h4 class="right">${meal.strMeasure6}</h4>
						</div>
					</article>
					
				`;
			})
			
		}else {
			html = 'Page Not Found';
			//recipeContainer.classList.add('not-found');
		}
		
		
		recipeContainer.innerHTML = html;
		
		
	}
	
	foodMenu();
	
	
});
//api end



//current Year
const year = document.querySelector('.year');

const currentYear = new Date().getFullYear();

year.textContent = currentYear; 


//close button








	
	
	
	