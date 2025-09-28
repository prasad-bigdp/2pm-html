let movies = [
	{
		title: "RRR",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
		year: 2022,
	},
	{
		title: "Avengers: Endgame",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
		year: 2019,
	},
	{
		title: "Parasite",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
		year: 2019,
	},
	{
		title: "Dune",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
		year: 2021,
	},
	{
		title: "The Dark Knight",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
		year: 2008,
	},
	{
		title: "Spirited Away",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
		year: 2001,
	},
	{
		title: "Inception",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
		year: 2010,
	},
	{
		title: "Lagaan",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
		year: 2001,
	},
	{
		title: "Interstellar",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
		year: 2014,
    },
    {
		title: "Avatar",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
		year: 2009,
	},
	{
		title: "Titanic",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
		year: 1997,
    },
    {
		title: "Sholay",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Sholay-poster.jpg",
		year: 1975,
	},
	{
		title: "Mughal-e-Azam",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/Mughal-e-azam.jpg",
		year: 1960,
	},
	{
		title: "Dilwale Dulhania Le Jayenge",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
		year: 1995,
	},
	{
		title: "Star Wars: The Force Awakens",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
		year: 2015,
	},
	{
		title: "3 Idiots",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
		year: 2009,
	},
]
function displayMovies() {
	movies.forEach((e, i) => {
		const movieDiv = document.createElement("div")
		movieDiv.classList.add("movie")
		const image = document.createElement("img")
		image.src = e.imageUrl
		image.alt = e.title
		const title = document.createElement("h2")
		title.textContent = e.title
		const para = document.createElement("p")
		para.textContent = e.year
		movieDiv.append(image, title, para)
		document.getElementById("library").appendChild(movieDiv)
	})
}
displayMovies()
