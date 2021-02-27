<template>
  <div class="container mb-4">
    <div class="columns">
        <div class="column is-2">
            <div class="is-size-6 pl-2 mb-4 is-family-secondary has-text-weight-semibold">
                {{category}}
            </div>
        </div>
        <div class="column is-8">
            <div class="is-size-5 pl-6 mb-4">
                {{items[0]}}
            </div>
            <!-- <div v-for="(item, index) in itmes" :key="item" class="is-size-5 pl-6 mb-4">
                {{item}} <span v-if="index > items.length"> - </span>
            </div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-skill',
  props: ['category', 'items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
