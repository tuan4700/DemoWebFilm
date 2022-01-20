// // --------------------Handle Watch Film----------------------------
// var handleZoomIn = document.querySelector('.watch-film__btn-video__handle.watch-film__zoom-in');

// // ----Handle Zoom In----
// handleZoomIn.onclick = function() {
//     document.querySelector('.col.l-8-5.watch-film__block').classList.add('extend-film');
//     document.querySelector('.s-gutters.filter-film__path-category').classList.add('extend-film');
//     document.querySelector('.watch-film__handle-video').classList.add('resize');
//     document.querySelector('.watch-film__video').classList.add('resize');
//     handleZoomIn.classList.add('status--hidden');
//     document.querySelector('.watch-film__btn-video__handle.watch-film__zoom-out.status--hidden').classList.remove('status--hidden');
//     document.querySelector('.block-content').classList.add('extend-film', 'resize');
//     document.querySelector('.col.l-12').classList.add('status--hidden');
//     document.querySelector('.col.l-8-5.watch-film__block-content__info.extend-film.status--hidden').classList.remove('extend-film', 'status--hidden');
//     document.querySelector('.col.l-3-5.watch-film__more-film__resize.extend-film').classList.remove('extend-film');
//     document.querySelector('.col.l-3-5.watch-film__more-film').classList.add('extend-film');
//     document.querySelector('.content__movie-more__info.zoom-in .content__movie-more__time:first-child').classList.add('movie-more__time-click');
//     document.querySelector('.content__movie-more__info.zoom-out .content__movie-more__time.movie-more__time-click').classList.remove('movie-more__time-click');
//     document.querySelector('.content__nom-com-movie__heading.zoom-in .nom-com-movie__heading__frames:first-child .nom-com-movie__heading__text').classList.add('nom-com-movie__heading__text-click');
//     document.querySelector('.content__nom-com-movie__heading.zoom-out .nom-com-movie__heading__frames .nom-com-movie__heading__text.nom-com-movie__heading__text-click').classList.remove('nom-com-movie__heading__text-click');
// }

// var handleZoomOut = document.querySelector('.watch-film__btn-video__handle.watch-film__zoom-out');

// // ----Handle Zoom Out----
// handleZoomOut.onclick = function() {
//     document.querySelector('.col.l-8-5.watch-film__block.extend-film').classList.remove('extend-film');
//     document.querySelector('.s-gutters.filter-film__path-category.extend-film').classList.remove('extend-film');
//     document.querySelector('.watch-film__handle-video.resize').classList.remove('resize');
//     document.querySelector('.watch-film__video.resize').classList.remove('resize');
//     document.querySelector('.watch-film__btn-video__handle.watch-film__zoom-in.status--hidden').classList.remove('status--hidden');
//     document.querySelector('.watch-film__btn-video__handle.watch-film__zoom-out').classList.add('status-hidden');
//     document.querySelector('.block-content.extend-film.resize').classList.remove('extend-film', 'resize');
//     document.querySelector('.col.l-12.status--hidden').classList.remove('status--hidden');
//     document.querySelector('.col.l-8-5.watch-film__block-content__info').classList.add('extend-film', 'status--hidden');
//     document.querySelector('.col.l-3-5.watch-film__more-film__resize').classList.add('extend-film');
//     document.querySelector('.col.l-3-5.watch-film__more-film.extend-film').classList.remove('extend-film');
//     document.querySelector('.content__movie-more__info.zoom-in .content__movie-more__time.movie-more__time-click').classList.remove('movie-more__time-click');
//     document.querySelector('.content__movie-more__info.zoom-out .content__movie-more__time:first-child').classList.add('movie-more__time-click');
//     document.querySelector('.content__nom-com-movie__heading.zoom-in .nom-com-movie__heading__frames .nom-com-movie__heading__text.nom-com-movie__heading__text-click').classList.remove('nom-com-movie__heading__text-click');
//     document.querySelector('.content__nom-com-movie__heading.zoom-out .nom-com-movie__heading__frames:first-child .nom-com-movie__heading__text').classList.add('nom-com-movie__heading__text-click');
//     // reload lại trang nếu trong onclick thì nên return ra false ngay sau đó
//     location.reload();
//     return false;
// }