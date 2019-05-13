<template lang="pug">
  // section.works
  //   .container.works__container
  //     .section-heading.works__section-heading
  //       h2.title.title--about Блок "Работы"
  //     editBlock(
  //       v-if="editBlock.show"
  //     )
  //     workBlocks     
  section.works
    .container.reviews__container
      .section-heading.reviews__section-heading
        h2.title.title--reviews Зарегистрируйтесь в клубе
      editBlockReview(
        v-if="editBlockReview.show"
      )
      // reviewBlocks
      .reviews-blocks
        ul.reviews-blocks__list
          li.reviews-blocks__item.reviews-blocks__item--create
            button(
              type="button"
              @click="showFormAndTurnEditModeOff"
            ).btn.btn--create-new
              span.create-new__icon
              h4.create-new__title Регистрация
          li.reviews-blocks__item(
            v-for="review in reviews"
            :key="review.id"
          )
            reviewBlock(
              :review="review"
             
            )
</template>




 <script>
// import { mapState, mapMutations } from "vuex";



// export default {
//   components: {
//     editBlock: () => import("../edit-block.vue"),
//     workBlocks: () => import("../work-blocks.vue"),
//   },
//   data() {
//     return {
//     }
//   },
//   computed: {
//     ...mapState('works', {
//       editBlock: state => state.editBlock
//     })
//   },
//   methods: {
//   },
//   created() {
//     this.editBlock.show = false;
//   }
// }

import {mapMutations,  mapState, mapActions  } from "vuex";
export default {
  components: {
    editBlockReview: () => import("../edit-block-review.vue"),
    reviewBlocks: () => import("../review-blocks.vue"),
    reviewBlock: () => import("../review-block.vue")
  },
//   data() {
//     return {
//     }
//   },
  computed: {
    ...mapState("reviews", {
      editBlockReview: state => state.editBlockReview,
      editBlockReviewChanged: state => state.editBlockReviewChanged,
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapMutations('reviews', ['SHOW_FORM', 'TURN_EDIT_MODE_OFF']),
    ...mapActions('reviews', ['fetchReviews']),
    showFormAndTurnEditModeOff() {
      this['TURN_EDIT_MODE_OFF']();
      this['SHOW_FORM']();
    }
  },
  async created() {
    
    try {
      await this.fetchReviews();
      this.editBlockReview.show = false;
    
    } catch (error) {
      console.error(error.message);
    }
  }
};
 

  
</script>

<style lang="postcss" scoped>

.works {
    width:100%;
  }


  .reviews-blocks__list {
    min-height:70vh;
    display:flex;
    justify-content:center;
  }
  .reviews-blocks__item {
    display:none;
    
  }
  .reviews-blocks__item:first-child {
      display:flex;
      width:50%;
      background: linear-gradient(22deg, rgba(103,110,128,0.5886729691876751) 0%, rgba(103,110,128,0.5886729691876751) 20%, rgba(251,0,83,1) 100%);
    }

  .create-new__title {
    padding: 10rem 1.3125rem 0;
  }
</style>