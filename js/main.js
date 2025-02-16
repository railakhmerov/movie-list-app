const movieInputNode = document.querySelector('.js-movie-input');
const addMovieBtnNode = document.querySelector('.js-add-movie-btn');
const moviesListItems = document.querySelector('.js-movies-list__items');
const selectMovieBtnNode = document.querySelector('.js-select-movie-btn');
const deleteMovieBtnNode = document.querySelector('.js-delete-movie-btn');
const deleteMovieSvgNode = document.querySelector('.js-delete-movie-svg');

let movieInputValue = '';

const films = [];

// Обработчики событий -------------------------
addMovieBtnNode.addEventListener('click', function() {
    // 1. Получаем значение из input
    movieInputValue = getValueInputFromUser();

    // 2. Выводим данные из input
    let moviesItemHTML = `
        <li class="movies-list__item js-movies-list__item"> <!--Элемент списка, который выводим-->
            <div class="btn-and-name-movie js-btn-and-name-movie">
                <div class="btn-and-name-movie__btn-select js-btn-and-name-movie__btn-select">
                    <button class="select-movie-btn js-select-movie-btn" type="button" name="select-movie-btn" title="select-movie-btn">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x="0.5" y="0.5" width="18" height="17" rx="8.5" stroke="#F3F6F9"/>
                        </svg>
                    </button>
                </div>
                <div class="btn-and-name-movie__name-movie">
                    <p>${movieInputValue}</p>
                </div>
            </div>
            <div class="btn-delete-movie-btn">
                <button class="delete-movie js-delete-movie-btn" type="button" title="btn-delete-movie">
                    <svg class="delete-movie-svg js-delete-movie-svg" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z"/>
                    </svg>
                </button>
            </div>
        </li>
    `;
    moviesListItems.innerHTML += moviesItemHTML;
    console.log(moviesListItems);

    films.push(movieInputValue);
    console.log(films)
});

moviesListItems.addEventListener('click', function(event) {
    // Вещаем обработчик на родителя для всех кнопок, чтобы отслеживать оба действия
    // 1. Если фильм просмотрели, то изменится дизайн
    keystrokeTestOnDeletedMovie(event); // Проверка на нажатие на кнопку удаления фильма
});
// --------------------------------------

// Функции -------------------------------
function getValueInputFromUser() {
    const inputValue = movieInputNode.value;
    return inputValue;
}

function keystrokeTestOnDeletedMovie(event) { // Проверка на нажатие на кнопку удаления фильма
    let currentClicked = event.target.closest('.js-select-movie-btn'); // ищем элемент с таким класом

    if (currentClicked) {
        let movieItem = currentClicked.closest('.js-movies-list__item'); // находим родительский li
        if (movieItem) {
            movieItem.classList.toggle('deleted-movie'); // Добавляем/удаляем класс
        }
    };
}