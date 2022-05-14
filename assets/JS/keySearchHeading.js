const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export default function keySearchHeading(keySearch, type) {
    const heading = $('.filter-film__category-heading');

    switch (type) {
        case "bo":
            heading.innerHTML = `
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">TVHAY</div>
            </div>
            <div class="filter-film__category-heading__seperate"></div>
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">PHIM BỘ</div>
            </div>
            `;
            break;
        case "le":
            heading.innerHTML = `
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">TVHAY</div>
            </div>
            <div class="filter-film__category-heading__seperate"></div>
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">PHIM LẺ</div>
            </div>
            `;
            break;
        case "vietsub":
            heading.innerHTML = `
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">TVHAY</div>
            </div>
            <div class="filter-film__category-heading__seperate"></div>
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">PHIM VIETSUB</div>
            </div>
            `;
            break;
        case "thuyetminh":
            heading.innerHTML = `
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">TVHAY</div>
            </div>
            <div class="filter-film__category-heading__seperate"></div>
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">PHIM THUYẾT MINH</div>
            </div>
            `;
            break;
        default:
            heading.innerHTML = `
            <div class="filter-film__category-heading__content">
                <div class="filter-film__category-heading__name">TVHAY</div>
            </div>
            `;
            break;
    }

    if(keySearch) {
        return heading.innerHTML = `
        <div class="filter-film__category-heading__content">
            <div class="filter-film__category-heading__name">TVHAY</div>
        </div>
        <div class="filter-film__category-heading__seperate"></div>
        <div class="filter-film__category-heading__content">
            <div class="filter-film__category-heading__name">${keySearch.toUpperCase()}</div>
        </div>
        `;
    }
}