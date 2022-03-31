// "use strict";
import recommend from "./recommend_film.js";
import { dataListFilms, dataListOfferFlims } from "./data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const filmId = window.location.href.slice(52).split('-');

const app = {

    handleEventFilm: function () {
        recommend();
    },

    renderVideo: function (numberEpisode) {
        var video = $('.watch-film__handle-video__film');
        var episodeNameFilm = $('.watch-film__episode__name-film');
        
        if(filmId[0] === 'list' || filmId[0] === 'offer') {
            if(filmId[0] === 'list') {
                dataListFilms(films => {
                    films.map(film => {
                        if(film.id === Number(filmId[1])) {
                            video.src = 'https://www.youtube.com/embed/' + film.listEpisode[numberEpisode] + '?modestbranding=1';
                            episodeNameFilm.textContent = film.nameVi;
                        }
                    })
                })
            } else {
                dataListOfferFlims(films => {
                    films.map(film => {
                        if(film.id === Number(filmId[1])) {
                            video.src = 'https://www.youtube.com/embed/' + film.listEpisode[numberEpisode] + '?modestbranding=1';
                            episodeNameFilm.textContent = film.nameVi;
                        }
                    })
                })
            }
        }
        return;
    },

    renderEpisode: function () {
        const episodes = $('.watch-film__episode__list');

        if(filmId[0] === 'list' || filmId[0] === 'offer') {
            if(filmId[0] === 'list') {
                dataListFilms(films => {
                    films.map(film => {
                        if (film.id === Number(filmId[1])) {
                            episodes.innerHTML = film.listEpisode.map((episode, index) => {
                                if(index === 0) {
                                    return `
                                    <li class="watch-film__episode__item watch-film__episode__click" data-id=${index + 1}>${index + 1}</li>
                                    `;
                                }
                                return `
                                <li class="watch-film__episode__item">${index + 1}</li>
                                `;
                            }).join('');
                        }
                        return;
                    })
                })
            } else {
                dataListOfferFlims(films => {
                    films.map(film => {
                        if (film.id === Number(filmId[1])) {
                            episodes.innerHTML = film.listEpisode.map((episode, index) => {
                                if(index === 0) {
                                    return `
                                    <li class="watch-film__episode__item watch-film__episode__click" data-id=${index + 1}>${index + 1}</li>
                                    `;
                                }
                                return `
                                <li class="watch-film__episode__item">${index + 1}</li>
                                `
                            }).join('');
                        }
                        return;
                    })
                })
            }
        }
        return;
    },

    test: function () {
        if(filmId[0] === 'list' || filmId[0] === 'offer') {
            if(filmId[0] === 'list') {
                dataListFilms(films => {
                    let testEpisode = $$('.watch-film__episode__item');
                    console.log(testEpisode);
                })
            } else {
                dataListOfferFlims(films => {
                    let testEpisode = $$('.watch-film__episode__item');
                    console.log(testEpisode);
                })
            }
        }
        return;
    },

    start: function () {
        this.handleEventFilm();
        this.renderEpisode();
        this.renderVideo(0);
        this.test();
    }
}

app.start();