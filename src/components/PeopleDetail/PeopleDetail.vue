<style scoped src="./PeopleDetail.scss" lang="scss"></style>
<template src="./PeopleDetail.html"></template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class PeopleDetail extends Vue {
  override created(): void {
    this.load();
  }

  load() {
    const id = this.$route.params.id;
    console.log(id);
  }
}
</script>
