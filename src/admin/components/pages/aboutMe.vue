<template lang="pug">
  section.about
    .container.about__container
      .section-heading.about__section-heading
        h1.title.title--about Элитный горный клуб CARABIN
        // button(type='button' @click="showAddingForm = true").btn.btn--add-skills-group Добавить группу
      .about__section-desc
        span.first__part П
        span.second__part риветствуем Вас на сайте для самых отчаянных искателей приключений 
        .img-alpinist__wrapper
          img(src="../../../images/admin/photo4.jpg" alt="Фото горного клуба 1").img-alpinist 
          img(src="../../../images/admin/photo2.jpg" alt="Фото горного клуба 2").img-alpinist
          img(src="../../../images/admin/photo3.jpg" alt="Фото горного клуба 3").img-alpinist
          img(src="../../../images/admin/photo.jpg" alt="Фото горного клуба 4").img-alpinist
      .video__wrapper
        .video
          <iframe class="frame" width="615" height="350" src="https://www.youtube.com/embed/zp72WjMVhTQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      // .about__blocks
      //     skillBlocks(
      //     :showAddingForm="showAddingForm"
      //     @closeNewSkillCard="showAddingForm = false"
      //   )          
</template>

<script>
export default {
  components: {
    skillBlocks: () => import("../skill-blocks.vue")
  },
  data() {
    return {
      showAddingForm: false
    };
  }
};
</script>

