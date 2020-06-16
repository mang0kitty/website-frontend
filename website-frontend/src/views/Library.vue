<template>
  <div class="library">
    <TheBookShelf />
  </div>
</template>

<script>
import TheBookShelf from "@/components/TheBookshelf";
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
  max-width: 980px;
}
h1 {
  font-size: 17px;
}
</style>
