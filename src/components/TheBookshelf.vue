<template>
  <div>
    <div class="container">
      <div style="height: 300px;">
        <el-steps direction="vertical">
          <el-step
            :title="yearEntry.year"
            v-for="yearEntry in store.bookshelf"
            :key="yearEntry.year"
            :icon="Close"
            :active="2020"
          >
            <template v-slot:description>
              <div class="book-container">
                <Book
                  v-for="book in yearEntry.books"
                  v-bind:key="book.isbn"
                  :book="book"
                />
              </div>
            </template>
          </el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "@/components/TheBook.vue";
import {useBookStore} from "../stores/books"
import {ElSteps, ElStep} from "element-plus";
import {Close} from "@element-plus/icons-vue"

export default {
  name: "App",
  components: {
    Book,
    ElSteps,
    ElStep,
  },
  setup() {
    const store = useBookStore()

    store.getBooks()

    return {
      store,
      Close
    }
  }
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

.book-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
}
</style>
