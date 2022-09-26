import {defineStore} from "pinia"

export interface Book {
    isbn: string
    dateRead: string
    title: string
    authors: string
    description: string
    averageRating: number
    categories: string[]
    imageLink: string
}

export const useBookStore = defineStore("books", {
    state: () => ({
        books: <Book[]>[]
    }),
    getters: {
        bookshelf(state) {
            const years: { [year: number]: Book[] } = state.books.reduce((years: any, book: Book) => {
                const year = new Date(book.dateRead).getFullYear()
                years[year] = years[year] || [];
                years[year].push(book);
                return years;
            }, <any>{});

            const result = Object.keys(years).map((year) => ({
                year: <any>year,
                books: years[<any>year],
            }));

            result.sort((a, b) => b.year - a.year);

            return result;
        }
    },
    actions: {
        async getBooks() {
            const res = await fetch("/api/books.json");
            const books = await res.json();

            this.books = books;
        }
    }
})