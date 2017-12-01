<template>
  <section class="snakes-screen">
    <div class="widgets">
      <h1 class="title" ref="title">The Codenames of <span>Snake</span></h1>
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
    // this.tl = new TimelineMax();
  },

  methods: {

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
