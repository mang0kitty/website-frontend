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
              <el-popover
                v-for="book in yearEntry.books"
                :key="book.title"
                placement="top-start"
                :title="book.title"
                width="200"
                trigger="hover"
                :content="book.description"
              >
                <img
                  :src="'http://localhost:8000' + book.photo"
                  class="book"
                  slot="reference"
                />
              </el-popover>
            </slot>
          </el-step>
        </el-steps>
      </div>
    </div>

    <div id="tags"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      bookShelf: {},
      bookDescription: "No description",
      bookRatings: {},
    };
  },
  beforeMount() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      const res = await fetch("http://localhost:8000/books");
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
  /* columns: 4;
  column-gap: 10px; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* justify-content: flex-start; */
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
img {
  float: left;
  height: 210px;
  width: 150px;
  object-fit: cover;
}
</style>
