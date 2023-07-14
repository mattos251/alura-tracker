<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <Router-view></Router-view>
  </section>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "projetos",
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>

