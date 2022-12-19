<style scoped src="./PeopleDetail.scss" lang="scss"></style>
<template src="./PeopleDetail.html"></template>

<script lang="ts">
import { ArrayToString } from "@/core/functions";
import { PersonModel } from "@/core/models";
import { peopleService } from "@/core/services/PeopleService";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class PeopleDetail extends Vue {
  isLoading = false;
  person: PersonModel | null = null;

  override created(): void {
    this.load();
  }

  load() {
    const id = this.$route.params.id;

    if (typeof id !== "string") return;

    peopleService.get(parseInt(id)).then((person) => {
      this.person = PersonModel.fromJson(person);
    });
  }

  get films(): string | null {
    return this.person && ArrayToString(this.person.films);
  }
}
</script>
