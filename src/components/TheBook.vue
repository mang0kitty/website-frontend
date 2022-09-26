<template>
  <div class="book">
    <el-popover
      data-html="true"
      placement="right-start"
      :title="book.title"
      :width="470"
      trigger="hover"
      @hide="!showFullDescription"
    >
    <template #default>
      <div id="bookContent">
        <p id="author">
          by {{ (book.authors || ' ')[0] }}
          <br />
          <el-rate
            v-model="book.averageRating"
            disabled
            allow-half
            show-score
            text-color="#ff9900"
            score-template="{ value }"
          ></el-rate>
        </p>
        <p
          id="description"
        >
        {{book.description}}
        </p>
      </div>
    </template>
      <template v-slot:reference>
        <img :src="cdnEndpoint + book.imageLink" class="book" />
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
import {ref, computed, toRefs} from "vue"
import {GetPreview} from "../helpers/preview"
import type {Book} from "../stores";

export default {
  name: "Book",
  props: {
    book: Object,
  },
  setup(props: { book: Book }) {
    const { book } = toRefs(props)
    const cdnEndpoint = ref(localStorage.getItem("cdn:url") || "https://cdn.aideen.dev")
    const showFullDescription = ref(false)
    const preview = computed(() =>
      GetPreview(book.value.description)
    )

    return {
      cdnEndpoint,
      showFullDescription,
      preview,
      book,
    }
  },
};
</script>

<style scoped>
img {
  float: left;
  aspect-ratio: 2/3;
  width: 150px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 2px 5px 20px 0 rgba(0, 0, 0, 0.2);
}
p {
  font-family: "avenir", sans-serif;
  font-size: 12px;
  letter-spacing: 0.7px;
}
.el-popover .el-popover__title {
  font-family: "Karla", sans-serif;
  font-weight: 500;
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
