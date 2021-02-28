<template>
  <div class="container">
    <div class="columns is-gapless is-multiline is-mobile">
        <div class="column">
            <div v-for="title in titles" :key="title" class="mt-5 mb-4 is-size-5 is-uppercase is-family-secondary has-text-weight-semibold has-text-success">{{title}}</div>
        </div>
        <div class="column">
            <div v-for="text in texts" :key="text" class="mt-5 mb-4 pl-4 is-size-5 is-family-secondary">{{text}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-info',
  props: ['details'],
  computed: {
      titles() {
          let titles = [];
          for (var detail of this.details) {
              titles.push(detail.title);
          }
          return titles;
      },
      texts() {
          let texts = [];
          for (var detail of this.details) {
              texts.push(detail.text);
          }
          return texts;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
