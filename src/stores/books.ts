import {defineStore} from "pinia"

export const useBookStore = defineStore("books", {
    state: () => ({
        books: <any>[]
    }),
    getters: {
        bookshelf(state) {
            const years: { [year: number]: any[] } = state.books.reduce((years: any, book: any) => {
                years[book.date_read] = years[book.date_read] || [];
                years[book.date_read].push(book);
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