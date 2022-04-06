"use strict";
import recommend from "./recommend_film.js";
import { dataListFilms } from "../JS/data.js";
import handleAccentedString from "./accented_string.js"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameFilmSearch = window.location.href.slice(53).replace(/%20/g, " ").toLowerCase();

const app = {

    handleEventFilms: function () {

        // Xử lý more-time offer-film và state offer-film
        recommend();

    },

    renderFilmSearch: function (listFilms) {
        var showFilms = 0;
        var elementListFilms = $('.row.s-gutters.content__product__list');
        elementListFilms.innerHTML = listFilms.map(film => {
            var checkFilmNameVi = handleAccentedString(film.nameVi).toLowerCase().indexOf(nameFilmSearch);
            var checkFilmNameEng = handleAccentedString(film.nameEng).toLowerCase().indexOf(nameFilmSearch);
            if(checkFilmNameVi !== -1 || checkFilmNameEng !== -1) {
                showFilms++;
                return this.renderListFilms(film);
            }
            return;
        }).join('');
        this.showListPage(showFilms);
    },

    renderListFilms: function (films) {
        return `
        <li class="col l-3 m-3 c-12 content__product__item">
            <div class="content__product__background">
                <img src="${films.img}" alt="${films.nameVi}"
                    class="product__img content__product__img">
                <a href="./content_film.html?q=list-${films.id}" class="content__product__item-overlay product__overlay">
                    <i class="product__overlay__icon far fa-play-circle"></i>
                </a>
                <div class="status">
                    <div class="status__episodes">${films.listEpisode.length}/${films.episode}</div>
                    <div class="status__language">${films.translate}</div>
                </div>
                <div class="content__product-block">
                    <div class="content__product__info">
                        <div title="${films.nameVi}" class="content__product__info-vi name-film__vi s-product">${films.nameVi}</div>
                        <div title="${films.nameEng}" class="content__product__info-eng name-film__eng s-product">${films.nameEng}</div>
                    </div>
                    <div class="content__product__plot">
                        <b>${films.nameVi}</b> ${films.info}
                    </div>
                    <div class="product__origin">
                        <div class="product__origin__year">${films.year}</div>
                        <div class="product__origin__like">
                            <i class="product__origin__like-icon fas fa-heart"></i>
                            <div class="product__origin__like-count">${films.love}</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        `;
    },

    showListPage: function (films) {
        var pages = Math.ceil(films / 20);
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

    handleListPage: function () {
        var pages = $$('.content__product__item-pages');
        var listPage = $('.content__product__list');
        Array.from(pages).forEach(function (page) {
            page.onclick = function (e) {
                var newPage = e.target.innerText;
                if (newPage) {
                    if (window.innerWidth >= 740) {
                        var rangePages = 0 - ((newPage - 1) * 1415);
                        listPage.style.transform = 'translateY(' + rangePages + 'px)';
                        $('.content__product__item-pages.content__product__click-page').classList.remove('content__product__click-page');
                        e.target.classList.add('content__product__click-page');
                    } else {
                        var rangePages = 0 - ((newPage - 1) * 4240);
                        listPage.style.transform = 'translateY(' + rangePages + 'px)';
                        $('.content__product__item-pages.content__product__click-page').classList.remove('content__product__click-page');
                        e.target.classList.add('content__product__click-page');
                    }

                }
            }
        });
    },

    start: function () {
        var _this = this;

        dataListFilms(films => {
            _this.renderFilmSearch(films);
            _this.handleListPage();
        })

        this.handleEventFilms();
    }
}

app.start();