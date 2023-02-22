<template>
  <div class="content" v-if="project">
    <h2>{{ project.title }}</h2>

    <p>
      {{ project.description }}
    </p>

    <a v-if="project.url" :href="url" target="_blank">{{ project.url }}</a>

    <img
      v-for="(image, index) in project.images"
      :key="index"
      :src="image"
      alt="main screen"
    />

    <div class="mobile-wrap" v-if="project.mobile_images">
      <img
        v-for="(image, index) in project.mobile_images"
        :key="index"
        class="mobile-img"
        :src="image"
        alt="mobile screen"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  data() {
    return {
      id: "" as any,
    };
  },
  methods: {
    async getNameFromPath(path: string) {
      this.id = path.split("/").pop();
    },
  },
  computed: {
    project(): any {
      return this.$store.state.projects.find((project: any) => {
        return project.id === this.id;
      });
    },
    url(): string {
      return `https://${this.project.url}`;
    },
  },

  //on page load
  mounted() {
    this.getNameFromPath(this.$route.path);
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  gap: 2rem;

  h2 {
    margin: 0px;
    margin-top: 3rem;
    line-height: 1.1;
    font-weight: 800;
    font-size: clamp(40px, 4vw, 40px);
  }
}
img {
  width: 80%;
  height: auto;
  max-width: 792px;
}
p {
  margin: 0px;
  line-height: 1.1;
  font-weight: 300;
  font-size: clamp(20px, 4vw, 30px);
  margin-bottom: 2rem;
}

a {
  all: unset;
  color: var(--accent-5);
  font-weight: 600;
  font-size: clamp(16px, 4vw, 25px);
  margin-bottom: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.mobile-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow-x: scroll;
  max-width: 792px;
}
.mobile-img {
  max-height: 40rem;
  width: auto;
}
/* Large screens */
@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
  .mobile-wrap {
    flex-direction: column;
  }
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .mobile-img {
    max-height: 20rem;
  }
}
</style>
