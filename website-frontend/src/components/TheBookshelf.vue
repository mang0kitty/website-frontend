<template>
  <div>
    <div class="container">
      <div style="height: 300px;">
        <el-steps direction="vertical">
          <el-step
            :title="yearEntry.year"
            v-for="yearEntry in data"
            :key="yearEntry.year"
            icon="el-icon-close"
            :active="1"
          >
            <slot slot="description">
              <img
                :src="'http://localhost:8000' + book.photo"
                class="book"
                v-for="book in yearEntry.books"
                :key="book.photo"
                :store="book.photo"
              />
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
  data() {
    return {
      data: {},
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

      this.data = Object.keys(years).map((year) => ({
        year,
        books: years[year],
      }));

      this.data.sort((a, b) => b.year - a.year);
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
