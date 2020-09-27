<template>
  <div>
    <div class="container">
      <div style="height: 300px;">
        <el-steps direction="vertical">
          <el-step
            :title="yearEntry.year"
            v-for="yearEntry in bookShelf"
            :key="yearEntry.year"
            icon="el-icon-close"
            :active="2020"
          >
            <slot slot="description">
              <Book
                class="book"
                v-for="book in yearEntry.books"
                v-bind:key="book.isbn"
                :book="book"
              />
            </slot>
          </el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "@/components/TheBook.vue";

export default {
  name: "App",
  components: {
    Book,
  },
  data: function () {
    return {
      bookShelf: {},
      fullDesc: false,
    };
  },
  beforeMount() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      const res = await fetch(this.store.state.apiUrl + "/books");
      const books = await res.json();

      const years = books.reduce((years, book) => {
        years[book.date_read] = years[book.date_read] || [];
        years[book.date_read].push(book);
        return years;
      }, {});

      // array[Book] → map[year]array[Book] → array[{ year: int, book: array[Book]}]
      // books → groupBy(year) → project({ year, books })

      this.bookShelf = Object.keys(years).map((year) => ({
        year,
        books: years[year],
      }));

      this.bookShelf.sort((a, b) => b.year - a.year);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1rem;
  font-weight: normal;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.book {
  margin: 30px;
  display: inline-block;
  overflow: hidden;
  justify-self: center;
  -webkit-column-break-inside: avoid-column;
  page-break-inside: avoid;
  break-inside: avoid-column;
}
</style>
