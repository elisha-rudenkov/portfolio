<template>
  <div class="content">
    <h2>My Florida Painters</h2>

    <p>
      My Florida Painters is a painting business based in Florida. The owner
      provided the design.
    </p>

    <a href="https://myfloridapainting.com/ " target="_blank"
      >www.myfloridapainting.com</a
    >

    <img
      src="../assets/projects/myfloridapainters/main.png"
      alt="main screen"
    />

    <div class="mobile-wrap">
      <img
        class="mobile-img"
        src="../assets/projects/myfloridapainters/main-mobile.png"
        alt="main screen"
      />

      <img
        class="mobile-img"
        src="../assets/projects/myfloridapainters/mobile2.png"
        alt="main screen"
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
  width: 100%;
  height: auto;
  max-width: 1800px;
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
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .mobile-img {
    max-height: 20rem;
  }
  .mobile-wrap {
    flex-direction: column;
  }
}
</style>
