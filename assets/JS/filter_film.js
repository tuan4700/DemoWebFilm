"use strict";
import recommend from "./recommend_film.js";
import { dataListFilms } from "../JS/data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {

    renderListFilms: function (listFilms) {
        var elementListFilms = $('.row.s-gutters.content__product__list');
        var films = listFilms.map(film => {
            return `
            <li class="col l-3 m-3 c-12 content__product__item">
                <div class="content__product__background">
                    <img src="${film.img}" alt="${film.nameVi}"
                        class="product__img content__product__img">
                    <a href="./content_film.html?q=list-${film.id}" class="content__product__item-overlay product__overlay">
                        <i class="product__overlay__icon far fa-play-circle"></i>
                    </a>
                    <div class="status">
                        <div class="status__episodes">${film.eps}/${film.eps}</div>
                        <div class="status__language">Thuyết Minh</div>
                    </div>
                    <div class="content__product-block">
                        <div class="content__product__info">
                            <div title="${film.nameVi}" class="content__product__info-vi name-film__vi s-product">${film.nameVi}</div>
                            <div title="${film.nameEng}" class="content__product__info-eng name-film__eng s-product">${film.nameEng}</div>
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
        elementListFilms.innerHTML = films.join('');
    },

    showListPage: function(listFilms) {
        var pages = Math.ceil(listFilms.length / 20);
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

        // Xử lý more-time offer-film và state offer-film
        recommend();

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
            _this.renderListFilms(films);
            _this.showListPage(films);
            _this.handleListPage();
        })

        this.handleEventFilms();
    }
}

app.start();