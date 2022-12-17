<template>
  <div class="home">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class PeopleView extends Vue {}
</script>
