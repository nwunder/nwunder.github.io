<template>
  <div class="container">
    <div class="columns">
      <div class="column is-7">
        <Name title="Nicholas Wunder" />
      </div>
    </div>

    <h3 class="subtitle"><a target="_blank" href="https://catcost.chemcatbio.org/">ChemCatBio: CatCost</a></h3>
    <h3 class="subtitle"><a target="_blank" href="https://sorbent-ml.hymarc.org/">HyMARC: Sorbent ML online</a></h3>
    <h3 class="subtitle"><a target="_blank" href="https://htem.nrel.gov/">High Throughput Experimental Materials Database</a></h3>
    <h3 class="subtitle"><a target="_blank" href="https://spe.nrel.gov/">Surface Phase Explorer</a></h3>
    <h3 class="subtitle"><a target="_blank" href="https://grd.nrel.gov/#/">Gearbox Reliability Database</a></h3>
  </div>
</template>

<script>
import Name from './resume/Name';
export default {
  name: 'work',
  components: {Name}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
