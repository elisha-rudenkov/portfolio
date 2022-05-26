<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --font-sans: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

  --accent-1: #cdb4db;
  --accent-2: #ffc8dd;
  --accent-3: #ff91b9;
  --accent-4: #bde0fe;
  --accent-5: #a2d2ff;

  --text-color: #2c3e50;
  --text-color-grey: #2c3e50a4;
  --text-color-white: #ffffff;
}

html,
body {
  margin: 0px;
  height: 100%;
  overflow-x: hidden;

}
#app {
  font-family: var(--font-sans);

  text-align: center;
  color: var(--text-color);
  padding: 0px 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(209, 209, 209);
  border-radius: 8px;
}
/* Large screens */
@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
  #app {
    padding: 0 100px;
  }
}
/* Small screens */
@media only screen and (max-width: 600px) {
  #app {
    padding: 0 25px;
  }
}
</style>
