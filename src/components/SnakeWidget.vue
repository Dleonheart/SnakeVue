<template>
<div class="snake-widget">
    <div class="polygon-background">
    <div class="image" ref="image">
        <img :src="image">
    </div>
    <svg ref="polygons" class="polygons" viewBox="73 138 758 517" enable-background="new 73 138 758 517">
        <filter width="105.8%" id="filter-8" filterUnits="objectBoundingBox" x="-2.9%" y="-2.6%" height="107.3%">
            <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/>
            <feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" result="shadowBlurOuter1" in="shadowBlurOuter1" operator="out"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        </filter>
        <filter width="109.1%" id="filter-6" filterUnits="objectBoundingBox" x="-4.6%" y="-2.6%" height="107.3%">
            <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/>
            <feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" result="shadowBlurOuter1" in="shadowBlurOuter1" operator="out"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        </filter>
        <filter width="105.5%" id="filter-4" filterUnits="objectBoundingBox" x="-2.7%" y="-4.4%" height="112.3%">
            <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/>
            <feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" result="shadowBlurOuter1" in="shadowBlurOuter1" operator="out"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        </filter>
        <filter width="108.3%" id="filter-2" filterUnits="objectBoundingBox" x="-4.1%" y="-1.9%" height="105.5%">
            <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/>
            <feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" result="shadowBlurOuter1" in="shadowBlurOuter1" operator="out"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        </filter>
        <filter width="103.8%" id="filter-14" filterUnits="objectBoundingBox" x="-1.9%" y="-2.6%" height="107.2%">
            <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/>
            <feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" result="shadowBlurOuter1" in="shadowBlurOuter1" operator="out"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        </filter>
        <filter width="104%" id="filter-12" filterUnits="objectBoundingBox" x="-2%" y="-2.7%" height="107.5%">
            <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/>
            <feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" result="shadowBlurOuter1" in="shadowBlurOuter1" operator="out"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        </filter>
        <filter width="105.9%" id="filter-10" filterUnits="objectBoundingBox" x="-3%" y="-1.7%" height="104.6%">
            <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2"/>
            <feGaussianBlur result="shadowBlurOuter1" in="shadowOffsetOuter1" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" result="shadowBlurOuter1" in="shadowBlurOuter1" operator="out"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        </filter>
        <g class="triangle">
            <g class="st0">
            <path id="path-1_2_" d="M365.862 252.397L305.69 530.893l-133.097-104.82z"/>
            </g>
            <path id="path-1_1_" class="st1" d="M365.862 252.397L305.69 530.893l-133.097-104.82z"/>
        </g>
        <g class="triangle">
            <g class="st2">
            <path id="path-3_2_" d="M464.923 344.643l-125.93 45.104 59.067-248.55z"/>
            </g>
            <path id="path-3_1_" class="st1" d="M464.923 344.643l-125.93 45.104 59.067-248.55z"/>
        </g>
        <g class="triangle">
            <g class="st3">
            <path id="path-5_2_" d="M339.306 394.11l86.787 102.964L294.79 602.882z"/>
            </g>
            <path id="path-5_1_" class="st1" d="M339.306 394.11l86.787 102.964L294.79 602.882z"/>
        </g>
        <g class="triangle">
            <g class="st4">
            <path id="path-7_2_" d="M341.112 390.673l210.39-70.19-73.335 231.51z"/>
            </g>
            <path id="path-7_1_" class="st1" d="M341.112 390.673l210.39-70.19-73.335 231.51z"/>
        </g>
        <g id="Path-2" class="triangle">
            <g class="st5">
            <path id="path-9_2_" d="M68.3 348.4l237.1 186.3L283 649.8z"/>
            </g>
            <path id="path-9_1_" class="st1" d="M68.3 348.4l237.1 186.3L283 649.8z"/>
        </g>
        <g id="Path-3" class="triangle">
            <g class="st6">
            <path id="path-11_2_" d="M535.4 379.7l-56.8 171.5 348.8-185.6z"/>
            </g>
            <path id="path-11_1_" class="st1" d="M535.4 379.7l-56.8 171.5 348.8-185.6z"/>
        </g>
        <g id="Path-4" class="triangle">
            <g class="st7">
            <path id="path-13_2_" d="M417.6 585l366.1-193.3L704 497.4z"/>
            </g>
            <path id="path-13_1_" class="st1" d="M417.6 585l366.1-193.3L704 497.4z"/>
        </g>
        </svg>
        <div class="heading">
            <span class="char" v-for="char in mainSentence" :key="char">{{char}}</span>
            <span class="char emphasis" v-for="char in lastWord" :key="char">{{char}}</span>
        </div>
    </div>
    <div class="games">
        <!-- <li v-for="(game, index) in gamesList" :key="game">{{game}}</li> -->
    </div>
</div>
</template>

<script>
// import { TweenMax, TimelineMax } from "gsap";
// import { shuffle } from 'lodash';

export default {
  name: "snake-widget",
  data() {
    return {
        gamesList: []
     }
  },

  props: {
      title: String,
      image: String,
      games: Array
  },

  mounted() {
      this.gamesList = this.games
  },

  computed: {
      mainSentence() {
        let mainSentence =  this.title.split(' ')
        mainSentence.splice(-1, 1)
        return mainSentence.join(' ')
      },

      lastWord() {
          return this.title.split(' ').splice(-1, 1).join()
      },
  },

  methods: {
  }
};
</script>

<style scoped lang="scss">
.st0{filter:url(#filter-2);}
.st1{fill:#020202;fill-opacity:0.8287;}
.st2{filter:url(#filter-4);}
.st3{filter:url(#filter-6);}
.st4{filter:url(#filter-8);}
.st5{filter:url(#filter-10);}
.st6{filter:url(#filter-12);}
.st7{filter:url(#filter-14);}

.snake-games-enter-active, .snake-games-leave-active {
  transition: all .5s;
}

.snake-games-enter, .snake-games-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(50px);
  position: absolute;
}

.snake-games-move {
  transition: transform .5s ease-out;
}

.snake-widget {
    display: flex;
    align-items: center;
    &:nth-child(2n){
        .games {
            order: 1;
            text-align: left;
        }
        .polygon-background {
            order: 2;
        }
    }
}

.games {
    text-align: right;
    flex-grow: 1;

    ul {
        list-style: none;
    }

    li {
        font-size: 32px;
        line-height: 1.3em;
    }
}

.polygon-background {
  position: relative;
  display: block;
  color: white;
  width: 50%;
  max-width: 560px;
  height: 380px;
  cursor: pointer;
  transition: all .3s;

  .polygons {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .heading {
    position: absolute;
    z-index: 1;
    text-align: right;
    max-width: 8em;
    right: 2.2em;
    top: 5em;
    font-size: 41px;
    .emphasis {
      color: #DD5252;
    }
  }

  .image {
    position: absolute;
    right: 3em;
    top: -10px;
    img {
      height: 188px;
      width: auto;
    }
  }
}
</style>
