<template>
    <transition name="main-screen-intro" appear 
    :css="false"
    @enter="enter"
    @leave="leave">
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
    </transition>
</template>

<script>
import { TweenMax, TimelineMax, Expo, Sine } from "gsap";
import PolygonHeading from "@/components/PolygonHeading";
import PolyButton from "@/components/PolyButton";

export default {
  name: "main-screen",
  data() {
    return {
      msg: "Welcome to Your Vue.js App boy"
    };
  },

  created() {
    this.tl = new TimelineMax();
  },

  methods: {
    enter(el, done) {
      this.tl.onComplete = done;
      this.tl
        .from(this.$refs.background, 8, {  x: -150, ease: Expo.easeOut },0)
        .from(this.$refs.background, 2.5, { opacity: 0},0)
        .from(this.$refs.logo, 0.4, { opacity: 0, y: 30 }, 0.5)
        .add(this.$refs.polygons.introTl(), 0.6)
        .from(this.$refs.button.$el, .5, {opacity: 0}, 0.8)
    },

    leave (el, done){
      this.tl.onComplete = done;
      TweenMax.to(this.tl, 1.5, {timeScale: 4, ease: Expo.easeOut})
      this.tl.reverse();
    }
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
