<template>
  <div class="book">
    <el-popover
      data-html="true"
      placement="top-start"
      :title="book.title"
      width="470"
      trigger="hover"
      @hide="fullDesc = false"
    >
      <div id="bookContent">
        <p id="author">
          by {{ book.author[0] }}
          <br />
          <el-rate
            v-bind:value="book.rating"
            disabled
            allow-half
            show-score
            text-color="#ff9900"
            score-template="{ value }"
          ></el-rate>
        </p>
        <p
          id="description"
          v-if="
            fullDesc == false &&
              book.description.length >
                checkPreviewDescLength(book.description).length
          "
        >
          {{ book.description | striphtml | preview }}
          <el-link v-on:click="fullDesc = true" type="danger">Read more</el-link>
        </p>
        <p v-else>{{ book.description | striphtml }}</p>
      </div>
      <img :src="'http://localhost:8000' + book.photo" class="book" slot="reference" />
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: {
    book: Object
  },
  data: function() {
    return {
      fullDesc: false
    };
  },
  methods: {
    checkPreviewDescLength(text) {
      return this.$options.filters.preview(text);
    }
  }
};
</script>

<style scoped>
img {
  float: left;
  height: 210px;
  width: 150px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
p {
  font-family: "avenir", sans-serif;
  font-size: 12px;
  letter-spacing: 0.7px;
}
.el-popover__title {
  font-family: "avenir", sans-serif;
}
</style>
