"use strict";
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
        });
        listFilms.innerHTML = films.join('');
    },

    showListPage: function(data) {
        var pages = Math.ceil(data.length / 20);
        var listPage = [];
        for (var i = 0; i < pages; i++) {
            listPage[i] = i;
        }
        var showPage = listPage.map(function(page) {
            if (page === 0) { 
                return `
                <li class="content__product__item-pages content__product__click-page">${page + 1}</li>
                `;
            }
            return `
            <li class="content__product__item-pages">${page + 1}</li>
            `;
        });
        $('.content__product__list-pages').innerHTML = showPage.join('');
    },

    handleEventFilms: function () {
        var _this = this;
        var listOfferTime = $$('.content__movie-more__time');
        var listOfferState = $$('.nom-com-movie__heading__text');
        var listPage = $('.content__product__list-pages');
        var listFilm = $('.content__product__list');

        // Xử lý more-time offer-film
        listOfferTime.forEach(function(offer) {
            
            offer.onclick = function (e) {
                $('.content__movie-more__time.movie-more__time-click').classList.remove('movie-more__time-click');
                e.target.classList.add('movie-more__time-click');
            }
        });

        // Xử lý state offer-film
        listOfferState.forEach(function(offer) {
            offer.onclick = function (e) {
                $('.nom-com-movie__heading__text.nom-com-movie__heading__text-click').classList.remove('nom-com-movie__heading__text-click');
                e.target.classList.add('nom-com-movie__heading__text-click');
            }
        });

    },

    handleListPage: function () {
        var pages = $$('.content__product__item-pages');
        console.log(pages);
        var listPage = $('.content__product__list');
        Array.from(pages).forEach(function (page) {
            page.onclick = function (e) {
                var newPage = e.target.innerText;
                if (newPage) {
                    var rangePages = 0 - ((newPage - 1) * 1415);
                    listPage.style.transform = 'translateY(' + rangePages + 'px)';
                    $('.content__product__item-pages.content__product__click-page').classList.remove('content__product__click-page');
                    e.target.classList.add('content__product__click-page');
                }
            }
        });
    },

    start: function () {
        var _this = this;

        this.getListFilms(function (dataFilms) {
            _this.renderListFilms(dataFilms);
            _this.showListPage(dataFilms);
            _this.handleListPage();
        })
        

        this.handleEventFilms();
    }
}

app.start();