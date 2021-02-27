<template>
  <div class="container mb-4">
    <div class="columns">
        <div class="column is-2">
            <div class="is-size-6 pl-2 mb-4 is-family-secondary has-text-weight-semibold">
                {{job.business}}
            </div>
            <div class="is-size-6 pl-2 mb-4 is-family-secondary">
                {{job.timeSpan}}
            </div>
        </div>
        <div class="column is-8">
            <div class="is-size-4 pl-6 mb-4 is-family-secondary is-uppercase has-text-success has-text-weight-semibold">
                {{job.title}}
            </div>
            
            <div v-for="skill in job.skills" :key="skill" class="is-size-5 pl-6 mb-4">
                {{skill}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-experience',
  props: ['job']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
