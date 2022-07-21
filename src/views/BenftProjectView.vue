<template>
  <div class="content">
    <h2>BenefitTrack</h2>

    <p>
      BenefitTrack is a responsive custom web solution for a logistics company
      to calculate drivers' miles and run payroll based on each trip at any
      given moment. It eliminates the need to calculate each trip manually and
      countless spreadsheets for each driver. BenefitTrack allows users to pull
      the data as an Excel spreadsheet if needed.
    </p>

    <img src="../assets/projects/bnft/main2.png" alt="main screen" />
   
    <div class="mobile-wrap">
      <img
        class="mobile-img"
        src="../assets/projects/bnft/main-mobile.png"
        alt="main screen"
      />

      <img
        class="mobile-img"
        src="../assets/projects/bnft/drivers-mobile.png"
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
