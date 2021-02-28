<template>
  <div class="container">
    <div class="columns">
      <div class="column is-7">
        <Name title="Nicholas Wunder" />
        <div class="is-size-5 has-text-justified">Dedicated software engineer with over 7 years professional experience in a scientific research environment. A results-oriented individual whose strong work ethic and commitment to excellence is demonstrated by a high level of initiative, a “do-it-right” attitude, and a proven success at setting and achieving both personal and professional goals.</div>
      </div>

      <div class="column is-offset-1">
        <Info v-for="detail in details" :key="detail.title" :title="detail.title" :text="detail.text" />
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
import Info from './resume/Info';
import Header from './resume/Header';
import Experience from './resume/Experience';
import Skill from './resume/Skill';
import Citation from './resume/Citation';

import details from '../data/details.json';
import publicationCitations from '../data/publication-citations.json';
import posterCitations from '../data/poster-citations.json';
import jobExperience from '../data/job-experience.json';
import educationExperience from '../data/education-experience.json';
import skills from '../data/skills.json';

export default {
  name: 'Home',
  components: {Name, Info, Header, Experience, Skill, Citation},
  data() {
    return {
      details: details,
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
