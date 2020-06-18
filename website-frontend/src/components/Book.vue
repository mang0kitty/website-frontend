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
          by {{ book.author[0] }} <br />
          <el-rate
            v-bind:value="book.rating"
            disabled
            allow-half
            show-score
            text-color="#ff9900"
            score-template="{ value }"
          >
          </el-rate>
        </p>
        <p id="description" v-if="fullDesc == false">
          {{ book.description | striphtml | preview }}
          <el-link v-on:click="fullDesc = true" type="danger">
            Read more
          </el-link>
        </p>
        <p v-else>
          {{ book.description | striphtml }}
        </p>
      </div>

      <img
        :src="'http://localhost:8000' + book.photo"
        class="book"
        slot="reference"
      />
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "book",
  props: {
    book: Object,
  },
  data: function() {
    return {
      fullDesc: false,
    };
  },
  methods: {
    changeDescState: function() {
      this.fullDesc = !this.fullDesc;
    },
  },
};
</script>

<style scoped>
img {
  float: left;
  height: 210px;
  width: 150px;
  object-fit: cover;
}
</style>
