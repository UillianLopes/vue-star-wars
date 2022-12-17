<template>
  <nav class="row row--gap-8 row--jc-center sticky sticky--top">
    <router-link to="/people">People</router-link> |
    <router-link to="/movies">Movies</router-link> |
    <router-link to="/spaceships">Spaceships</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  height: 100vh;
  width: 100vw;
  padding: 0px;
  margin: 0px;
}

:root {
  --primary-bg: rgb(37, 37, 37);
  --primary-color: white;
}

* {
  box-sizing: border-box;
}

.row,
.column {
  display: flex;

  &--ai-center {
    align-items: center;
  }

  &--ai-start {
    align-items: flex-start;
  }

  &--ai-end {
    align-items: flex-end;
  }

  &--jc-center {
    justify-content: center;
  }

  &--jc-space-between {
    justify-content: space-between;
  }

  &--jc-space-around {
    justify-content: space-around;
  }

  &--jc-space-evenly {
    justify-content: space-evenly;
  }

  &--gap-4 {
    gap: 4px;
  }

  &--gap-8 {
    gap: 8px;
  }

  &--gap-16 {
    gap: 16px;
  }

  &--gap-32 {
    gap: 32px;
  }
}

.sticky {
  position: sticky;
  &--top {
    top: 0px;
  }
  background: var(--primary-bg);
  color: var(--primary-color);
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts"></script>
