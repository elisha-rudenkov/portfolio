<template>
  <div class="content">
    <h2>Polyflow</h2>

    <p>
      Polyflow is a web app that allows anyone to bring democracy to party
      music. People can join the Polyflow party and suggest and like music. This
      way, only the good stuff is being played.
    </p>

    <img src="../assets/projects/polyflow/main.png" alt="main screen" />

    <p>
      The best part of Polyflow is that guests do not need to create an account.
      All they need to do is scan a QR code to start partying.
    </p>

    <div class="mobile-wrap">
      <img
        class="mobile-img"
        src="../assets/projects/polyflow/mobile-main.png"
        alt="main screen"
      />

      <img
        class="mobile-img"
        src="../assets/projects/polyflow/search-mobile.png"
        alt="main screen"
      />
    </div>

    <div class="mobile-wrap">
      <img
        class="mobile-img"
        src="../assets/projects/polyflow/settings-mobile.png"
        alt="main screen"
      />

      <img
        class="mobile-img"
        src="../assets/projects/polyflow/party-mobile.png"
        alt="main screen"
      />
    </div>

    <div class="mobile-wrap">
      <img
        class="mobile-img"
        src="../assets/projects/polyflow/invite-mobile.png"
        alt="main screen"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
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
    margin-bottom: 2rem;
  }
}
img {
  width: 100%;
  height: auto;
  max-width: 1800px;
  border-radius: 10px;
}
p {
  margin: 0px;
  margin-top: 3rem;
  line-height: 1.1;
  font-weight: 300;
  font-size: clamp(20px, 4vw, 30px);
  margin-bottom: 2rem;
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
