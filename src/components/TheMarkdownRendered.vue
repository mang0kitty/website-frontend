<template>
  <div class="markdownRendered">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "MarkdownRendered",
  props: {
    value: String,
  },
};
</script>
