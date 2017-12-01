<template>
      <section class="main-screen">
        <div class="background" ref="background">
        </div>
        <section class="content">
          <div class="main-logo" ref="logo"><img src="/static/images/metalgear-logo.svg" alt="Metal gear" width="500"></div>
          <polygon-heading ref="polygons"
                           title="The many faces of snake"
                           :upperCase='true'
                           fontSize="45px"></polygon-heading>
            <poly-button ref="button">Go!</poly-button>
        </section>
      </section>
</template>

<script>
// import { TweenMax, TimelineMax, Expo, Sine } from "gsap";
import PolygonHeading from "@/components/PolygonHeading";
import PolyButton from "@/components/PolyButton";

export default {
  name: "main-screen",
  data() {
    return {
    };
  },

  created() {
    // this.tl = new TimelineMax();
  },

  methods: {

  },

  components: {
    PolygonHeading,
    PolyButton
  }
};
</script>

<style scoped lang="scss">
  .background {
    width: 100vw;
    height: 100vh;
    background: url(/static/images/background.png);
    background-size: cover;
    position: relative;
  }

  .content {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding-top: 60px;
  }

  .main-logo {
    margin-bottom: 35px;
  }

  .heading-intro {
    text-transform: uppercase;
    line-height: 1em;
    padding-top: 40px;
    span {
      color: red;
      display: block;
    }
  }
</style>
