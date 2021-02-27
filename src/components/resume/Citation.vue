<template>
  <div class="container">
    <div class="columns">
      <div class="column is-10">
        <div class="is-size-5 pl-6 mb-4">
          {{text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-citation',
  props: ['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
