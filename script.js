const API_URL='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=ca854388443655533d7e2bdb3029fa49'

const IMG_PATH='https://image.tmdb.org/t/p/w500'

const SEARCH_API='https://api.themoviedb.org/3/search/movie?api_key=ca854388443655533d7e2bdb3029fa49="'

const main = document.getElementById("main")

const form = document.getElementById("form")

const search = document.getElementById("search") 


getMovies(API_URL)

async function getMovies(url){
    const res =await fetch(url)
    const data = await res.json()

    console.log(data.results)
    showMovies(data.results)

}

// movies to be displayed in our DOM /

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie

        const movieEl = document.createElement
        ('div')
        movieEl.classList.add('movie')


        movieEl.innerHTML = `
        <div class="movie">
        <img
          src="${IMG_PATH + poster_path}"
          alt=""
        />

        <div class="movie-info">
          <h3>${title}</h3>
        </div>

        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
      </div>
        `

        main.appendChild(movieEl)
  
    })
}



// search configuration //

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)
        
        search.value = ''
    }else {
        window.location.reload()
    }

})