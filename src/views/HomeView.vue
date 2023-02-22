<template>
  <div class="home">
    <div class="right" v-motion-slide-bottom :delay="600">
      <div class="vertical">
        <a href="mailto:hello@elisharudenkov.com" target="_blank" tabindex="-1"
          >hello@elisharudenkov.com</a
        >
      </div>
    </div>
    <div class="left" v-motion-slide-bottom :delay="600">
      <div class="vertical">
        <a href="https://github.com/elisha-rudenkov/" target="_blank"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/elisha-rudenkov" target="_blank"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </div>
    <section class="hero">
      <div class="small-text" v-motion-slide-bottom :delay="100">
        Hi, my name is
      </div>
      <h1 v-motion-slide-bottom :delay="200">Elisha Rudenkov.</h1>
      <h1 id="light" v-motion-slide-bottom :delay="300">
        I build things for the web.
      </h1>
      <p v-motion-slide-bottom :delay="300">
        I am a full-stack web developer focused on Progressive Web Apps and
        fluid user experience. Currently, making awesome stuff at
        <a href="https://doughrise.co/">DoughRise</a>.
      </p>
      <div class="resume-btn" v-motion-slide-bottom :delay="400">
        <router-link to="/resume">Resume</router-link>
      </div>
    </section>
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
          v-for="(project, index) in highlightedProjects"
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

    <section class="stack">
      <h2>My favorite stack</h2>

      <div class="carousell" v-motion-slide-visible-once-right>
        <div class="carousell-item">
          Firebase
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              fill="#ff8f00"
              d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
            />
            <path
              fill="#ffa000"
              d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
            />
            <path
              fill="#ff6f00"
              d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
            />
            <path
              fill="#ffc400"
              d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
            />
          </svg>
        </div>
        <div class="carousell-item">
          Vue.js
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <polygon
              fill="#81c784"
              points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
            />
            <polygon
              fill="#455a64"
              points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
            />
          </svg>
        </div>

        <div class="carousell-item">
          TypeScript
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
            <polygon
              fill="#fff"
              points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
            />
            <path
              fill="#fff"
              d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
            />
          </svg>
        </div>
        <div class="carousell-item">
          Node.js
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              fill="#388e3c"
              d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
            />
            <path
              fill="#37474f"
              d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
            />
            <path
              fill="#2e7d32"
              d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
            />
            <path
              fill="#4caf50"
              d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
            />
            <path
              fill="#37474f"
              d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
            />
          </svg>
        </div>
      </div>
    </section>

    <section class="about">
      <h2>Let's connect</h2>
      <p>
        I am always looking forward to collaborating with awesome people and
        making epic stuff. Drop me a line if you have something in mind.
      </p>
      <div
        class="hello-btn"
        @click="
          toggleNotification(3000);
          copyToClipboard('hello@elisharudenkov.com');
        "
      >
        Say Hello
      </div>
      <div
        class="copy-notification"
        v-if="show_notification"
        v-motion-slide-left
      >
        My email is now in your clipboard 😉
      </div>
    </section>
    <div class="footer">Built with ☕ in California</div>
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
  computed: {
    highlightedProjects() {
      //filter out projects that have highlight as true
      return this.$store.state.projects.filter((project) => project.highlight);
    },
  }

});
</script>

<style lang="scss" scoped>
.home {
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
  h1 {
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
