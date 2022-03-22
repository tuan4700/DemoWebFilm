// "use strict";
import recommend from "./recommend_film.js";
import { dataListFilms, dataListOfferFlims } from "./data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const filmId = window.location.href.slice(54).split('-');

const app = {

    renderContentFilm: function () {
        var contentFilm = $('.content-film__info');
        if (filmId[0] === 'offer' || filmId[0] === 'list') {
            if (filmId[0] === 'list') {
                dataListFilms(films => {
                    contentFilm.innerHTML = films.map(film => {
                        if (film.id === Number(filmId[1])) {
                            return `
                            <div class="content-film__info">
                                <div class="row no-gutters content-film__info-block">
                                    <div class="col l-3-5 m-3-5">
                                        <div class="content-film__info__block-img">
                                            <img src="${film.img}" alt="${film.nameVi}" class="content-film__info__img">
                                        </div>
                                    </div>
                                    <div class="col l-8-5 m-8-5 content-film__detail">
                                        <h2 class="content-film__info__name">${film.nameVi}</h2>
                                        <div class="content-film__info__sub-name">${film.nameEng}</div>
                                        <div class="content-film__info__status-nation">
                                            <div class="content-film__info__status">
                                                Status:
                                                <div class="content-film__info__episodes">${film.eps}/${film.eps}</div>
                                                <div class="content-film__info__language">${film.translate}</div>
                                            </div>
                                            <div class="content-film__info__nation">
                                                Quốc gia:
                                                <div class="content-film__info__nation-name">Phim Trung Quốc</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__actor-director">
                                            <div class="content-film__info__actor">
                                                Diễn viên:
                                                <div class="content-film__info__actor-name">Đang cập nhật</div>
                                            </div>
                                            <div class="content-film__info__director">
                                                Đạo diễn:
                                                <div class="content-film__info__director-name">Đang cập nhật</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__genre-time">
                                            <div class="content-film__info__genre">
                                                Thể loại:
                                                <div class="content-film__info__genre-name">Phim Cổ Trang, Phim Hoạt Hình</div>
                                            </div>
                                            <div class="content-film__info__time">
                                                Thời lượng:
                                                <div class="content-film__info__time-number">${film.eps} tập</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__watch-like-rating">
                                            <a href="http://127.0.0.1:5500/assets/html/watch_film.html" class="content-film__info__watch">
                                                XEM PHIM
                                                <div class="content-film__info__block-play">
                                                    <i class="content-film__info__watch-play fas fa-play"></i>
                                                </div>
                                            </a>
                                            <div class="content-film__info__like-rating">
                                                <div class="content-film__info__like">
                                                    Lượt thích: ${film.love}
                                                    <i class="like-icon fas fa-thumbs-up"></i>
                                                </div>
                                                <!-- Đổi màu rating add class "number-rating" -->
                                                <div class="content-film__info__rating">
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="content__nom-com-movie__heading content-film__info__content-heading">
                                        <div class="content-film__content-heading__heading">
                                            <div class="content-film__content-heading__text nom-com-movie__heading__text-click">Thông tin phim</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__content"><b>${film.nameVi}</b> ${film.info}</span>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__key">
                                        Từ khóa:
                                        <br>
                                        <b>
                                            Xem phim ${film.nameVi}, ${film.nameEng}, ${film.nameVi} ${film.translate}, ${film.nameVi} tvhay
                                        </b>
                                    </span>
                                </div>
                            </div>
                            `
                        }
                        return;
                    }).join('');
                })
            } else {
                dataListOfferFlims(films => {
                    contentFilm.innerHTML = films.map(film => {
                        if (film.id === Number(filmId[1])) {
                            return `
                            <div class="content-film__info">
                                <div class="row no-gutters content-film__info-block">
                                    <div class="col l-3-5 m-3-5">
                                        <div class="content-film__info__block-img">
                                            <img src="${film.img}" alt="${film.nameVi}" class="content-film__info__img">
                                        </div>
                                    </div>
                                    <div class="col l-8-5 m-8-5 content-film__detail">
                                        <h2 class="content-film__info__name">${film.nameVi}</h2>
                                        <div class="content-film__info__sub-name">${film.nameEng}</div>
                                        <div class="content-film__info__status-nation">
                                            <div class="content-film__info__status">
                                                Status:
                                                <div class="content-film__info__episodes">${film.eps}/${film.eps}</div>
                                                <div class="content-film__info__language">${film.translate}</div>
                                            </div>
                                            <div class="content-film__info__nation">
                                                Quốc gia:
                                                <div class="content-film__info__nation-name">Phim Trung Quốc</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__actor-director">
                                            <div class="content-film__info__actor">
                                                Diễn viên:
                                                <div class="content-film__info__actor-name">Đang cập nhật</div>
                                            </div>
                                            <div class="content-film__info__director">
                                                Đạo diễn:
                                                <div class="content-film__info__director-name">Đang cập nhật</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__genre-time">
                                            <div class="content-film__info__genre">
                                                Thể loại:
                                                <div class="content-film__info__genre-name">Phim Cổ Trang, Phim Hoạt Hình</div>
                                            </div>
                                            <div class="content-film__info__time">
                                                Thời lượng:
                                                <div class="content-film__info__time-number">${film.eps} tập</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__watch-like-rating">
                                            <a href="http://127.0.0.1:5500/assets/html/watch_film.html" class="content-film__info__watch">
                                                XEM PHIM
                                                <div class="content-film__info__block-play">
                                                    <i class="content-film__info__watch-play fas fa-play"></i>
                                                </div>
                                            </a>
                                            <div class="content-film__info__like-rating">
                                                <div class="content-film__info__like">
                                                    Lượt thích: ${film.love}
                                                    <i class="like-icon fas fa-thumbs-up"></i>
                                                </div>
                                                <!-- Đổi màu rating add class "number-rating" -->
                                                <div class="content-film__info__rating">
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon number-rating fas fa-star"></i>
                                                    <i class="content-film__info__rating-icon fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="content__nom-com-movie__heading content-film__info__content-heading">
                                        <div class="content-film__content-heading__heading">
                                            <div class="content-film__content-heading__text nom-com-movie__heading__text-click">Thông tin phim</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__content"><b>${film.nameVi}</b> ${film.info}</span>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__key">
                                        Từ khóa:
                                        <br>
                                        <b>
                                            Xem phim ${film.nameVi}, ${film.nameEng}, ${film.nameVi} ${film.translate}, ${film.nameVi} tvhay
                                        </b>
                                    </span>
                                </div>
                            </div>
                            `
                        }
                        return;
                    }).join('');
                })
            }
        }
        return;
    },

    handleEventFilm: function () {
        recommend();
    },

    start: function () {
        var _this = this;
        this.handleEventFilm();
        console.log(window.location.href);
        // dataListFilms(films => {
        //     _this.renderContentFilm(films);
        // })
        this.renderContentFilm();
    }
}

app.start();