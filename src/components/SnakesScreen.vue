<template>
  <section class="snakes-screen">
    <div class="widgets">
      <h1 class="title" ref="title" @click="shuffle">The Codenames of <span>Snake</span></h1>
      <transition-group ref="transition" name="snakes">
        <snake-widget v-for="(snake, index) in snakes" :key="snake.name" :title="snake.name" :image="snake.image" :games="snake.games"></snake-widget>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { TweenMax, TimelineMax, Expo, Sine } from "gsap";
import SnakeWidget from "@/components/SnakeWidget";
import { shuffle } from 'lodash';

export default {
  name: "snakes-screen",
  data() {
    return {
      snakes: [
        {
          name: 'Naked Snake',
          image: '/static/images/naked-snake-widget.png',
          games: ['Metal gear solid 3: snake eater', 'Metal gear solid: peace walker', 'Metal gear solid portable ops', 'Metal gear solid the phantom pain']
        },
        {
          name: 'Solid Snake',
          image: '/static/images/solid-snake.png',
          games: ['Metal gear','Metal gear 2 solid snake','Metal gear solid', 'Metal gear solid 2: Sons of liberty']
        },
        {
          name: 'Old Snake',
          image: '/static/images/old-snake.png',
          games: ['Metal gear solid 4: Guns of the patriots ']
        },
        {
          name: 'Venom Snake',
          image: '/static/images/venom-snake.png',
          games: ['Metal gear solid 5: The phantom pain']
        }
      ]

    };
  },

  created() {
    this.tl = new TimelineMax();
  },

  methods: {
    enter(el, done) {
      this.tl.onComplete = done;

      this.tl.from(this.$el, .8, {opacity: 0, x: 30, ease: Expo.easeOut})
             .from(this.$refs.title, .8, {opacity: 0, y: 30, ease: Expo.easeOut}, '-=0.5')
      this.tl.addLabel('widgets', '-=0.5')
      this.$refs.transition.$children.forEach((child, ind) =>{
        let tween = child.introTl();
        tween.delay(ind*.3);
       child.introTl && this.tl.add(tween, 'widgets')
      })
    },

    leave (el, done){
      TweenMax.to(this.tl, 1.5, {timeScale: 4, ease: Expo.easeOut});
      this.tl.eventCallback('onReverseComplete', done);
      this.tl.reverse();
    },
    shuffle() {
        this.snakes = shuffle(this.snakes)
    }
  },

  components: {
    SnakeWidget,

  }
};
</script>

<style scoped lang="scss">

.snakes-screen {
  background: url(/static/images/gridme.png);
  background-attachment: fixed;
  padding-top: 2em;
  animation: background-animation 150s linear infinite;

}

.snakes-move {
  transition : transform 1s;
}

.title {
  text-align: right;
  text-transform: uppercase;
  font-size: 64px;
  line-height: 1em;
  padding-top: 1em;
  text-shadow: 3px 5px 3px rgba(0,0,0,0.2);
  margin-top: 0;
  span {
    color: #DD5252;
    display: block;
  }
}

.widgets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;

}

@keyframes background-animation {
  from { background-position: 0 0; }
	to { background-position: 100% 0; }
}
</style>
