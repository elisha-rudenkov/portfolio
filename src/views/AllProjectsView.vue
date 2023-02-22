<template>
  <div class="home">
    <section class="projects">
      <div class="info">
        <h2>My Recent Work</h2>
        <p>
          I enjoy simplifying my life and the life of others by building custom
          tools. I love the process of creation and problem-solving. Here are a
          few of my recent projects.
        </p>
      </div>
      <div class="projects-wrap">
        <projectCardVue
          v-for="(project, index) in $store.state.projects"
          :key="index"
          :title="project.title"
          :description="project.short_description"
          :website_link="project.url"
        
          :show_website_link="project.private"
          :status="project.status"
          @click="$router.push('/projects/' + project.id)"
        ></projectCardVue>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import projectCardVue from "@/components/home/project-card.vue";

export default defineComponent({
  name: "HomeView",
  components: { projectCardVue },

  data() {
    return {
      show_notification: false as boolean,
    };
  },
  methods: {
    /**
     * Shows a notification for a given amount of time.
     * Sets show_notification to a given state value [optional]
     * @param ms Time for the notification to be shown
     * @param state Optional param, if a specific notification state needs to be set.
     */
    toggleNotification(ms: number, state?: boolean) {
      if (typeof state === "undefined") {
        this.show_notification = !this.show_notification;
      } else {
        this.show_notification = state;
      }

      setTimeout(() => {
        if (typeof state === "undefined") {
          this.show_notification = !this.show_notification;
        } else {
          this.show_notification = !state;
        }
      }, ms);
    },
    /**
     * Copies a given string to the clipboard.
     * @param text Text to be copied
     */
    copyToClipboard(text: string) {
      navigator.clipboard.writeText(text);
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 2rem;
  max-width: 1800px;
}

section {
  padding: 0px;
  display: flex;
  width: 100%;
}

.left {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
}

.right {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
}

.vertical {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  color: black;
  opacity: 0.7;
  cursor: pointer;

  a {
    margin: 10px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 0.35em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    color: black;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;

    position: relative;
  }
  a:hover {
    color: var(--accent-3);
  }
}

.vertical::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: grey;
}

.hero {
  display: flex;
  min-height: 100vh;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;

  .small-text {
    font-size: clamp(16px, 5vw, 18px);
    font-family: var(--font-mono);
    font-weight: 400;
    margin: 0px 0px 30px 4px;
  }
  h2 {
    margin: 0px;
    line-height: 1.1;
    font-weight: 800;
    font-size: clamp(40px, 8vw, 80px);
  }
  #light {
    color: var(--text-color-grey);
  }

  p {
    margin: 20px 0px 0px;
    max-width: 540px;
  }
  a {
    color: var(--text-color);
    text-decoration: none;
    text-decoration-skip-ink: auto;
    font-weight: 500;
  }
  .resume-btn {
    margin-top: 2rem;

    a {
      margin: 2rem 0;
      padding: 16px 32px;
      background: var(--accent-4);
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;

      :hover {
        background: var(--accent-5);
      }
    }
  }
}

.projects {
  justify-content: center;
  flex-direction: column;

  .info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      margin: 20px 0px 0px;
      max-width: 800px;
    }
    h2 {
      margin: 0px;
      margin-top: 3rem;
      line-height: 1.1;
      font-weight: 800;
      font-size: clamp(20px, 4vw, 40px);
      margin-bottom: 4rem;
    }
  }

  #title {
    font-size: clamp(20px, 4vw, 40px);
    font-family: var(--font-sans);
    margin: 0px;
    line-height: 1.1;
    font-weight: 600;
  }

  .projects-wrap {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.stack {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  .carousell {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 2rem;

    .carousell-item {
      display: flex;
      flex-direction: column;

      font-size: 20px;

      align-items: center;

      svg {
        width: 4rem;
      }
    }
  }
  p {
    margin: 20px 0px 0px;
    max-width: 800px;
  }
  h2 {
    margin: 0px;
    margin-top: 3rem;
    line-height: 1.1;
    font-weight: 800;
    font-size: clamp(20px, 4vw, 40px);
    margin-bottom: 4rem;
  }
}

.about {
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  p {
    margin: 20px 0px 0px;
    max-width: 800px;
  }
  h2 {
    margin: 0px;
    margin-top: 3rem;
    line-height: 1.1;
    font-weight: 800;
    font-size: clamp(40px, 4vw, 40px);
    margin-bottom: 4rem;
  }

  .hello-btn {
    margin: 2rem 0;
    padding: 16px 32px;
    max-width: 400px;
    background: var(--accent-2);
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;

    a {
      color: var(--text-color);
      text-decoration: none;
      text-decoration-skip-ink: auto;
      font-weight: 500;
    }
  }
  .hello-btn:hover {
    background: var(--accent-3);
  }

  .copy-notification {
    position: absolute;
    bottom: 4rem;
    padding: 2rem 3rem;
    background-color: var(--accent-4);
    border-radius: 16px;
    font-size: clamp(14px, 4vw, 18px);
    font-weight: 600;
  }
}

.footer {
  font-size: clamp(13px, 2vw, 14px);
  font-family: var(--font-mono);
  font-weight: 400;
  padding: 2rem 0;
}

/* Large screens */
@media only screen and (min-width: 600px) {
}

/* Mid screens */
@media only screen and (max-width: 1100px) {
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .right,
  .left {
    display: none;
  }
  .projects .info h2 {
    margin-bottom: 1rem;
  }
  .projects .carousell .carousell-item {
    font-size: 18px;

    svg {
      width: 15px;
    }
  }
}
</style>
