// -------------------Sign Out----------------------
// ----On PC----
var handleIconSignOut = document.querySelector('.heading__user__sign-out.fas.fa-sign-out-alt');
var handleIconSignOutOK = document.querySelector('.btn.notification-log-out__btn__ok');
var handleIconSignOutCancel = document.querySelector('.btn.notification-log-out__btn__cancel');

handleIconSignOut.onclick = function() {
    if(window.innerWidth > 1023) {
        document.querySelector('.user-action__overlay.status--hidden').classList.remove('status--hidden');
        document.querySelector('.notification-log-out.status--hidden').classList.remove('status--hidden');
    }
};

handleIconSignOutCancel.onclick = function() {
    document.querySelector('.user-action__overlay').classList.add('status--hidden');
    document.querySelector('.notification-log-out').classList.add('status--hidden');
}

handleIconSignOutOK.onclick = function() {
    document.querySelector('.btn__no-boder.heading__login.status--hidden').classList.remove('status--hidden');
    document.querySelector('.btn__no-boder.heading__register.status--hidden').classList.remove('status--hidden');
    document.querySelector('.heading__user').classList.add('status--hidden');
    document.querySelector('.user-action__overlay').classList.add('status--hidden');
    document.querySelector('.notification-log-out').classList.add('status--hidden');
}

// ----On Tablet and Mobile----
var handleTabSignOut = document.querySelector('.user-action__log-out');

handleTabSignOut.onclick = function() {
    document.querySelector('.user-action__overlay').classList.add('status--hidden');
    document.querySelector('.user-action__block').classList.add('status--hidden');
    document.querySelector('.btn__no-boder.heading__login.status--hidden').classList.remove('status--hidden');
    document.querySelector('.btn__no-boder.heading__register.status--hidden').classList.remove('status--hidden');
    document.querySelector('.heading__user').classList.add('status--hidden');
}

// -------------------Handle Menu User------------------------------
var actionData = document.querySelector('.heading__user');
var closeWidthIcon = document.querySelector('.ti-close.user-action__close-icon');
var closeWidthOverlay = document.querySelector('.user-action__overlay');
var userActionBlock = document.querySelector('.user-action__block.status--hidden');
// console.log(window.innerWidth);

// ----Show/Hidden Menu User On Tablet and Mobile----
actionData.onclick = function() {
    if(window.innerWidth <= 1023) {
        document.querySelector('.user-action__overlay.status--hidden').classList.remove('status--hidden');
        document.querySelector('.user-action__block.status--hidden').classList.remove('status--hidden');
    }
}

closeWidthIcon.onclick = function() {
    document.querySelector('.user-action__overlay').classList.add('status--hidden');
    document.querySelector('.user-action__block').classList.add('status--hidden');
}

closeWidthOverlay.onclick = function() {
    if(userActionBlock.className === "user-action__block") {
        document.querySelector('.user-action__overlay').classList.add('status--hidden');
        document.querySelector('.user-action__block').classList.add('status--hidden');
    }
}


// -------------------Movie More----------------------
// ----Day/Week/Month----
var handleDayWeekMonth = document.querySelectorAll('.content__movie-more__time');

handleDayWeekMonth.forEach((tab, index) => {
    tab.onclick = function() {
        document.querySelector('.content__movie-more__time.movie-more__time-click').classList.remove('movie-more__time-click');
        this.classList.add('movie-more__time-click');
    };
})

// ----Nominated movies and Completed----
var handleNomComMovie = document.querySelectorAll('.nom-com-movie__heading__text');

handleNomComMovie.forEach((tab, index) => {
    tab.onclick = function() {
        document.querySelector('.nom-com-movie__heading__text.nom-com-movie__heading__text-click').classList.remove('nom-com-movie__heading__text-click');
        this.classList.add('nom-com-movie__heading__text-click');
    };
})