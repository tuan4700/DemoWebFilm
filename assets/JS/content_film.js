// "use strict";
import recommend from "./recommend_film.js";
import { dataListFilms, dataListOfferFlims } from "./data.js";
import keySearchHeading from "./keySearchHeading.js";
import { HandleNavBar, CheckKeyParams } from "../JS/utils.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const filmId = window.location.href.slice(54).split('-');
const filmId = window.location.href.slice(52);
const paramsKeys = CheckKeyParams(filmId);
const keyFilm = paramsKeys.key.split('-');

const app = {

    renderContentFilm: function () {
        var contentFilm = $('.content-film__info');
        if (keyFilm[0] === 'offer' || keyFilm[0] === 'list') {
            if (keyFilm[0] === 'list') {
                dataListFilms(films => {
                    contentFilm.innerHTML = films.map(film => {
                        if (film.id === Number(keyFilm[1])) {
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
                                                <div class="content-film__info__episodes">${film.listEpisode.length}/${film.episode}</div>
                                                <div class="content-film__info__language">${film.translate}</div>
                                            </div>
                                            <div class="content-film__info__nation">
                                                Qu???c gia:
                                                <div class="content-film__info__nation-name">Phim ${film.national}</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__actor-director">
                                            <div class="content-film__info__actor">
                                                Di???n vi??n:
                                                <div class="content-film__info__actor-name">??ang c???p nh???t</div>
                                            </div>
                                            <div class="content-film__info__director">
                                                ?????o di???n:
                                                <div class="content-film__info__director-name">??ang c???p nh???t</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__genre-time">
                                            <div class="content-film__info__genre">
                                                Th??? lo???i:
                                                <div class="content-film__info__genre-name">${film.categorys.map(category => " " + category)}</div>
                                            </div>
                                            <div class="content-film__info__time">
                                                Th???i l?????ng:
                                                <div class="content-film__info__time-number">${film.episode} t???p</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__watch-like-rating">
                                            <a href="/assets/html/watch_film.html?type=${paramsKeys.type}&keyID=list-${film.id}" class="content-film__info__watch">
                                                XEM PHIM
                                                <div class="content-film__info__block-play">
                                                    <i class="content-film__info__watch-play fas fa-play"></i>
                                                </div>
                                            </a>
                                            <div class="content-film__info__like-rating">
                                                <div class="content-film__info__like">
                                                    L?????t th??ch: ${film.love}
                                                    <i class="like-icon fas fa-thumbs-up"></i>
                                                </div>
                                                <!-- ?????i m??u rating add class "number-rating" -->
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
                                            <div class="content-film__content-heading__text nom-com-movie__heading__text-click">Th??ng tin phim</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__content"><b>${film.nameVi}</b> ${film.info}</span>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__key">
                                        T??? kh??a:
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

                    const getFilm = films.find((film, index) => {
                        return Number(keyFilm[1]) === index + 1;
                    })
                    keySearchHeading("", paramsKeys.type, getFilm.nameVi);
                })
            } else {
                dataListOfferFlims(films => {
                    contentFilm.innerHTML = films.map(film => {
                        if (film.id === Number(keyFilm[1])) {
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
                                                <div class="content-film__info__episodes">${film.listEpisode.length}/${film.episode}</div>
                                                <div class="content-film__info__language">${film.translate}</div>
                                            </div>
                                            <div class="content-film__info__nation">
                                                Qu???c gia:
                                                <div class="content-film__info__nation-name">Phim ${film.national}</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__actor-director">
                                            <div class="content-film__info__actor">
                                                Di???n vi??n:
                                                <div class="content-film__info__actor-name">??ang c???p nh???t</div>
                                            </div>
                                            <div class="content-film__info__director">
                                                ?????o di???n:
                                                <div class="content-film__info__director-name">??ang c???p nh???t</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__genre-time">
                                            <div class="content-film__info__genre">
                                                Th??? lo???i:
                                                <div class="content-film__info__genre-name">${film.categorys.map(category => " " + category)}</div>
                                            </div>
                                            <div class="content-film__info__time">
                                                Th???i l?????ng:
                                                <div class="content-film__info__time-number">${film.episode} t???p</div>
                                            </div>
                                        </div>
                                        <div class="content-film__info__watch-like-rating">
                                            <a href="/assets/html/watch_film.html?type=${paramsKeys.type}&keyID=offer-${film.id}" class="content-film__info__watch">
                                                XEM PHIM
                                                <div class="content-film__info__block-play">
                                                    <i class="content-film__info__watch-play fas fa-play"></i>
                                                </div>
                                            </a>
                                            <div class="content-film__info__like-rating">
                                                <div class="content-film__info__like">
                                                    L?????t th??ch: ${film.love}
                                                    <i class="like-icon fas fa-thumbs-up"></i>
                                                </div>
                                                <!-- ?????i m??u rating add class "number-rating" -->
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
                                            <div class="content-film__content-heading__text nom-com-movie__heading__text-click">Th??ng tin phim</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__content"><b>${film.nameVi}</b> ${film.info}</span>
                                </div>
                                <div class="row no-gutters">
                                    <span class="content-film__info__key">
                                        T??? kh??a:
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

                    const getFilm = films.find((film, index) => {
                        return Number(keyFilm[1]) === index + 1;
                    })
                    console.log(getFilm.nameVi);
                    keySearchHeading("", paramsKeys.type, getFilm.nameVi);
                })
            }
        }
        return;
    },

    handleEventFilm: function () {

        // X??? l?? more-time offer-film v?? state offer-film
        recommend();

        // X??? l?? NavBar
        HandleNavBar();

    },

    start: function () {
        this.handleEventFilm();
        this.renderContentFilm();
    }
}

app.start();