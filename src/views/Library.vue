<template>
  <div class="library">
    <TheBookShelf />
  </div>
</template>

<script>
import TheBookShelf from "@/components/TheBookshelf.vue";
export default {
  components: {
    TheBookShelf,
  },
};
</script>
<style scoped>
.library {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
}
h1 {
  font-size: 17px;
}
</style>
