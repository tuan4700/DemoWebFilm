"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dataFilmApi = 'http://localhost:3000/films';
const dataOfferFilmApi = 'http://localhost:3000/offerFilms';
const sortFilm = $$('.content__title-item');
const nextOfferFilms = $('.content__viewport-right');
const prevOfferFilms = $('.content__viewport-left');

const app = {
    widthOfferFilm: 0,

    getFilms: function(callback) {
        fetch(dataFilmApi)
            .then(function(response) {
                return response.json();
            })
            .then(callback)
    },

    getOfferFilms: function(callback) {
        fetch(dataOfferFilmApi)
            .then(function(response) {
                return response.json();
            })
            .then(callback)
    },

    renderFilms: function(listFilms) {
        var i = 0;
        const htmlFilms = listFilms.map(film => {
            i++;
            if (i <= 20) {
                return `
                <li class="col l-3 m-3 c-12 content__product__item">
                    <div class="content__product__background">
                        <img src="${film.img}" alt="${film.nameVi}"
                            class="product__img content__product__img">
                        <a href="#" class="content__product__item-overlay product__overlay">
                            <i class="product__overlay__icon far fa-play-circle"></i>
                        </a>
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
            }
            return;
        })
        $('.row.s-gutters.content__product__list').innerHTML = htmlFilms.join('');
    },

    renderOfferFilms: function(listFilms) {
        var i = 0;
        const htmlFilms = listFilms.map(film => {
            return `
            <li class="col l-3 m-3 content__viewport">
                <div class="content__viewport__banner">
                    <img src="${film.img}"
                        alt="${film.nameVi}" class="product__img content__viewport__img">
                    <a href="http://127.0.0.1:5500/assets/html/content_film.html" class="content__viewport__overlay product__overlay">
                        <i class="product__overlay__icon far fa-play-circle"></i>
                    </a>
                </div>
                <div class="content__viewport__info">
                    <div class="content__info__name-vi name-film__vi">${film.nameVi}</div>
                    <div class="content__info__name-eng name-film__eng">${film.nameEng}</div>
                </div>
                <div class="status">
                    <div class="status__episodes">${film.eps}/${film.eps}</div>
                    <div class="status__language">${film.translate}</div>
                </div>
            </li>
            `;
        })
        $('.content__viewport__list-films').innerHTML = htmlFilms.join('');
    },

    handleEventFilm: function () {
        var listOfferTime = $$('.content__movie-more__time');
        var listOfferState = $$('.nom-com-movie__heading__text');
        var _this = this;

        // Sắp xếp phim theo từng loại
        // sortFilm.forEach(function (film, index) {
        //     film.onclick = function () {
        //         $('.content__title-item .content__title-item__category').classList.add('content__title-item__category-click');
        //     }
        // })
        
        // Xử lý more-time offer-film
        listOfferTime.forEach(function(offer) {
            
            offer.onclick = function (e) {
                $('.content__movie-more__time.movie-more__time-click').classList.remove('movie-more__time-click');
                e.target.classList.add('movie-more__time-click');
            }
        })

        // Xử lý state offer-film
        listOfferState.forEach(function(offer) {
            offer.onclick = function (e) {
                $('.nom-com-movie__heading__text.nom-com-movie__heading__text-click').classList.remove('nom-com-movie__heading__text-click');
                e.target.classList.add('nom-com-movie__heading__text-click');
            }
        })

    },

    // Thay đổi offer-films
    offerFilms: function (changed, list) {
        var listOfferFilms = $('.content__viewport__list-films');
        var widthHiddenOffer = (list.length - 4) * 176.22;
        if (changed === 1) {
            if (this.widthOfferFilm <= `-${widthHiddenOffer}`) {
                this.widthOfferFilm = 0;
            } else {
                this.widthOfferFilm = this.widthOfferFilm - 176.22;
            }
            listOfferFilms.style.transform = 'translateX(' + this.widthOfferFilm + 'px)';
        } else if (changed === -1) {
            if (this.widthOfferFilm >= 0) {
                this.widthOfferFilm = this.widthOfferFilm - widthHiddenOffer;
            } else {
                var prevOffer = Number.parseFloat(this.widthOfferFilm + 176.22).toFixed(2);
                this.widthOfferFilm = Number(prevOffer);
            }
            listOfferFilms.style.transform = 'translateX(' + this.widthOfferFilm + 'px)';
        }
    },

    changeOfferFilms: function (films) {
        var _this = this;
        // Next offer-film
        nextOfferFilms.onclick = function() {
            _this.offerFilms(1, films);
        }

        // Prev offer-film
        prevOfferFilms.onclick = function() {
            _this.offerFilms(-1, films);
        }
    },


    // Xử lý khi chuyển tiếp danh sách films
    // changeFilms: function(films) {
    //     var nextFilms = $('.content__title-item');
    //     var listFilms = $('.content__product__list');
    //     var heightChangeFilms = 0;
    //     nextFilms.onclick = function() {
    //         var numberFilms = Math.ceil(films.length / 20 - 1);
    //         var height = numberFilms * 1415;
    //         if (heightChangeFilms <= `-${height}`) {
    //             heightChangeFilms = heightChangeFilms + height;
    //         } else {
    //             heightChangeFilms = heightChangeFilms - 1415;                
    //         }
    //         listFilms.style.transform = 'translateY(' + heightChangeFilms +'px)';
    //         console.log(heightChangeFilms);
    //     }
    // },

    start: function() {
        var _this = this;
        // Lấy data từ Api
        this.getFilms(function(dataListFilms) {
            // Hiển thị danh sách film
            _this.renderFilms(dataListFilms);
            // Xử lý khi Next List Films
            // _this.changeFilms(dataListFilms);
        });

        this.getOfferFilms(function(dataListFilms) {
            // Hiển thị danh sách offer-film
            _this.renderOfferFilms(dataListFilms);
            // Xử lý Next và Prev cho offer-film
            _this.changeOfferFilms(dataListFilms);
        });

        // Xử lý các sự kiện
        this.handleEventFilm();
        
    }
}

app.start();