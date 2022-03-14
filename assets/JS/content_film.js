// "use strict";
import recommend from "./recommend_film.js";

const app = {

    handleEventFilm: function () {
        recommend();
    },

    start: function () {
        this.handleEventFilm();
    }
}

app.start();