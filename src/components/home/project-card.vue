<template>
  <div class="project-card">
    <div id="header">
      <img
        v-if="logo_name != null"
        :src="require('@/assets/' + logo_name + '')"
        alt="project-logo"
      />
      <h2>{{ title }}</h2>
    </div>

    <div class="description">
      {{ description }}
    </div>
    <div v-if="show_website_link" class="link">
      <a :href="'https://' + website_link" target="_blank">{{
        website_link
      }}</a>
    </div>
    <div v-else class="status">
      <img
        :src="require('@/assets/icons/' + icon_name + '')"
        alt="project-status"
      />

      {{ status }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    website_link: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    show_website_link: {
      required: true,
      type: Boolean,
    },
    icon_name: {
      required: true,
      type: String,
    },
    logo_name: {
      required: false,
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--text-color-white);
  padding: 60px 35px;
  max-width: 300px;

  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
cursor: pointer;
  border-radius: 16px;

  #header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
      width: 2rem;
    }
  }

  .link a {
    text-decoration: none;
    font-size: 18px;
    color: var(--accent-3);
    font-weight: 700;
  }

  .description {
    min-height: 100px;
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
    color: var(--accent-2);
    font-weight: 700;

    img,
    svg {
      width: 18px;
      fill: var(--accent-2) !important;
    }
  }
  
}
.project-card:hover {
    box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #d0d9eb;
   
  }
</style>
