// "use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dataFilmApi = 'http://localhost:3000/films';

const app = {
    getListFilms: function (callback) {
        fetch(dataFilmApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
    },

    renderListFilms: function (data) {
        var listFilms = $('.row.s-gutters.content__product__list');
        var films = data.map(function (film) {
            return `
            <li class="col l-3 m-3 c-12 content__product__item">
                <div class="content__product__background">
                    <div class="content__product__block-img">
                        <img src="${film.img}" alt="${film.nameVi}"
                            class="product__img content__product__img">
                        <a href="#" class="content__product__item-overlay product__overlay">
                            <i class="product__overlay__icon far fa-play-circle"></i>
                        </a>
                    </div>
                    <div class="status">
                        <div class="status__episodes">${film.eps}/${film.eps}</div>
                        <div class="status__language">Thuyết Minh</div>
                    </div>
                    <div class="content__product-block">
                        <div class="content__product__info">
                            <div class="content__product__info-vi name-film__vi s-product">${film.nameVi}</div>
                            <div class="content__product__info-eng name-film__eng s-product">${film.nameEng}</div>
                        </div>
                        <div class="content__product__plot">
                            <b>${film.nameVi}</b> ${film.info}
                        </div>
                        <div class="product__origin">
                            <div class="product__origin__year">${film.year}</div>
                            <div class="product__origin__like">
                                <i class="product__origin__like-icon fas fa-heart"></i>
                                <div class="product__origin__like-count">${film.love}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `;
        })
        listFilms.innerHTML = films.join('');
    },

    start: function () {
        var _this = this;

        this.getListFilms(function (dataFilms) {
            _this.renderListFilms(dataFilms);
        })
    }
}

app.start();