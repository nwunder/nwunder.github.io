<template>
  <div class="container">
    <div class="columns is-gapless is-multiline">
        <div class="column">
            <div class="mt-5 mb-4 is-size-5 is-uppercase is-family-secondary has-text-weight-semibold has-text-success">{{title}}</div>
        </div>
        <div class="column">
            <div class="mt-5 mb-4 pl-4 is-size-5 is-family-secondary">{{text}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-info',
  props: ['title', 'text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
