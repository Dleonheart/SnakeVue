<template>
     <transition mode="out-in" appear
        :css="false"
        @enter="enter"
        @leave="leave">
      <slot></slot>
    </transition>
</template>

<script>
export default {
  name: "transition-manager",
  data() {
      return {}
  },

  methods: {
    enter(el, done) {
        this.$children[0].enter(el, done)
    },

    leave (el, done){
        this.$children[0].leave(el, done)
    }
  },
};
</script>

