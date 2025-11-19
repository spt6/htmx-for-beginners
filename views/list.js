import BOOKS_DATA from "../data/data";

const showBooks = () => /*html*/`
    <ul>  +
        BOOKS_DATA.map(books)
    + '</ul>
`;

export default showBooks;