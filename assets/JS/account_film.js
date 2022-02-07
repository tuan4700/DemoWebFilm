const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const createAccount = $('.account-film__tocreate');
const haveAccount = $('.account-film__tosign-in');

const app = {
    handle: function () {
        // Chuyển sang form đăng ký
        createAccount.onclick = function () {
            $('.account-film').classList.add('create');
        }

        // Chuyển sang form đăng nhập
        haveAccount.onclick = function () {
            $('.account-film.create').classList.remove('create');
        }

    },

    start: function () {
        this.handle();
    }
}

app.start();