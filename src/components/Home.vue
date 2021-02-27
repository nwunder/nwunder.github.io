<template>
  <div class="container">
    <div class="columns">
      <div class="column is-7">
        <Name title="Nicholas Wunder" />
        <div class="is-size-5 has-text-justified">Dedicated software engineer with over 7 years professional experience in a scientific research environment. A results-oriented individual whose strong work ethic and commitment to excellence is demonstrated by a high level of initiative, a “do-it-right” attitude, and a proven success at setting and achieving both personal and professional goals.</div>
      </div>

      <div class="column is-offset-1">
        <div class="columns">
          <div class="column">
            <div class="mt-5 mb-4 is-size-5 is-uppercase is-family-secondary has-text-weight-semibold has-text-success">Phone</div>
            <div class="mt-2 mb-4 is-size-5 is-uppercase is-family-secondary has-text-weight-semibold has-text-success">Email</div>
            <div class="mt-2 mb-4 is-size-5 is-uppercase is-family-secondary has-text-weight-semibold has-text-success">Work</div>
            <div class="mt-2 mb-4 is-size-5 is-uppercase is-family-secondary has-text-weight-semibold has-text-success">Location</div>
          </div>
          <div class="column">
            <div class="mt-5 mb-4 is-size-5 is-family-secondary">303 · 913 · 2587</div>
            <div class="mt-2 mb-4 is-size-5 is-family-secondary">ndwunder@gmail.com</div>
            <div class="mt-2 mb-4 is-size-5 is-family-secondary">nwunder.github.io</div>
            <div class="mt-2 mb-4 is-size-5 is-family-secondary">Denver, Colorado</div>
          </div>
        </div>
      </div>
    </div>

    <Header title="Experience" />
    <Experience v-for="job in jobExperience" :key="job.id" :job="job" />

    <Header title="Education" />
    <Experience v-for="job in educationExperience" :key="job.id" :job="job" />

    <Header title="Skills" />
    <Skill v-for="skill in skills" :key="skill.category" :category="skill.category" :items="skill.items" />

    <Header title="Publications" />
    <Citation v-for="publicationCitation in publicationCitations" :key="publicationCitation.id" :text="publicationCitation.text" />

    <Header title="Posters &amp; Presentations" />
    <Citation v-for="posterCitation in posterCitations" :key="posterCitation.id" :text="posterCitation.text" />

  </div>
</template>

<script>
import Name from './resume/Name';
import Header from './resume/Header';
import Experience from './resume/Experience';
import Skill from './resume/Skill';
import Citation from './resume/Citation';

import publicationCitations from '../data/publication-citations.json';
import posterCitations from '../data/poster-citations.json';
import jobExperience from '../data/job-experience.json';
import educationExperience from '../data/education-experience.json';
import skills from '../data/skills.json';
export default {
  name: 'Home',
  components: {Name, Header, Experience, Skill, Citation},
  data() {
    return {
      publicationCitations: publicationCitations,
      posterCitations: posterCitations,
      jobExperience: jobExperience,
      skills: skills,
      educationExperience: educationExperience
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
