<style scoped src="./PeopleCard.scss" lang="scss"></style>
<template src="./PeopleCard.html"></template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Person as PersonModel } from "../../core/person.model";
@Options({
  props: {
    person: PersonModel,
  },
})
export default class PeopleCard extends Vue {
  person!: PersonModel;
}
</script>
