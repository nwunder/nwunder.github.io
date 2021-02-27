<template>
  <div id="app">
    <section class="section">
      <div class="container">
      <div class="columns">
        <div class="column is-2">
          <b-menu>
            <b-menu-list>
              <b-menu-item icon="information-outline" label="Resume" tag="router-link" :to="{path: '/resume'}"></b-menu-item>
              <b-menu-item icon="information-outline" label="Work" tag="router-link" :to="{path: '/work'}"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
        <div class="column is-10">
          <router-view></router-view>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'resume',
  components: {
  }
}
</script>

<style>
</style>
