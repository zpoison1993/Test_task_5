<template lang="pug">
    .edit-block
        h3.edit-block__title Редактирование работы
        form.edit-block__form
            .form__upload-img
                label.form__upload-img-container(
                    :class="{'filled' : this.renderedPhotoUrl.length, 'error' : validation.firstError('renderedPhotoUrl')}"
                    :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
                    )
                    input(
                        type="file"
                        @change="appendFileAndRenderPhoto"
                    ).form__upload-img-input
                    
                    .form__upload-img-content
                        span.form__upload-img-desc Перетащите или загрузите для загрузки изображения
                        .btn.btn--upload-works-img ЗАГРУЗИТЬ
                    .form__upload-img-error
                        error-tooltip(
                        :errorText="validation.firstError('renderedPhotoUrl')"
                        )
            .form__upload-text
                .form__row
                    .form__col
                        label.form__text-block(
                            for="title"
                            :class="{'error' : validation.firstError('work.title')}"
                        )
                            span.form__label Название
                            input.form__input.form__input--title(type="text" name="title" placeholder="Введите название работы" v-model="work.title")
                            .form__text-error
                                error-tooltip(
                                :errorText="validation.firstError('work.title')"
                                )
                .form__row
                    .form__col
                        label.form__text-block(
                            for="link"
                            :class="{'error' : validation.firstError('work.link')}"
                        )
                            span.form__label Ссылка
                            input.form__input.form__input--link(type="text" name="link" placeholder="Вставьте ссылку" v-model="work.link")
                            .form__text-error
                                error-tooltip(
                                :errorText="validation.firstError('work.link')"
                            )
                .form__row.form__row--textarea
                    .form__col
                        label.form__text-block.form__text-block--textarea(
                            for="description"
                            :class="{'error' : validation.firstError('work.description')}"
                        )
                            span.form__label Описание
                            textarea.form__textarea(name="description" rows="4" placeholder="Введите описание работы" v-model="work.description")
                            .form__text-error
                                error-tooltip(
                                :errorText="validation.firstError('work.description')"
                            )
                            

                .form__row.form__row--tags
                    .form__col
                        tagsBlock(
                            v-model="work.techs"
                            @removeTag="value => this.work.techs = value"
                            :errorText="validation.firstError('work.techs')"
                        )


                .form__row.form__row--btns
                    .form__col
                        .form__btns
                            button(
                            type="button"
                            @click="CLOSE_FORM"
                            ).btn.btn--cancel Отмена
                            button(
                            type="button"
                            @click="addNewWork"
                            v-if="!editBlock.editMode"
                            ).btn.btn--save Сохранить
                            button(
                            type="button"
                            v-if="editBlock.editMode"
                            @click="saveEditedWork"
                            ).btn.btn--save Сохранить
</template>


<script>
import { mapActions, mapMutations, mapState } from "vuex";

import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "renderedPhotoUrl": value => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "work.title": value => {
      return Validator.value(value).required("Введите название");
    },
    "work.link": value => {
      return Validator.value(value).required("Вставьте ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Введите описание");
    },
    "work.techs": value => {
      return Validator.value(value).required("Рекомендуется указать какой-либо тег");
    }
  },
  components: {
    tagsBlock: () => import("./tags-block.vue"),
    errorTooltip: () => import("./error-tooltip.vue")
  },
  data() {
    return {
      renderedPhotoUrl: "",
      work: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapState("works", {
      editBlock: state => state.editBlock,
      changedWork: state => state.changedWork,
    //   editedTags: state => state.editedTags
    }),
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`;
    },
    // editedTagsAsString() {
    //   return this.editedTags.join(',');
    // }
  },
  methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    ...mapMutations("works", ["CLOSE_FORM", "ADD_TAGS"]),
    
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhotoUrl = reader.result;
        };
      } catch (error) {
        console.error(error.message);
      }
    },
    
    async addNewWork() {
      if ((await this.$validate()) === false) return;
      try {
        const workFormData = this.createWorkFormData();
        await this.addWork(workFormData);
        this["CLOSE_FORM"]();
      } catch (error) {
        console.error(error.message);
      }
    },
    createWorkFormData() {
      const formData = new FormData();
   
        formData.append("title", this.work.title);

        formData.append("techs", this.work.techs);

        formData.append("photo", this.work.photo);

        formData.append("link", this.work.link);  

        formData.append("description", this.work.description);

      
      return formData;
    },
    setEditedWork() {
      this.work = { ...this.changedWork };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },
    async saveEditedWork() {
      if ((await this.$validate()) === false) return;
      try {
        // const workData = {
        //   id: this.work.id,
        //   data: this.createWorkFormData()
        // };
        await this.editWork(this.work);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  created() {
    if (this.editBlock.editMode) {
      this.setEditedWork();
    //   this.work.techs = "";
    }
  }
};
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";
.filled {
    background: center center no-repeat / cover;

    & .form__upload-img-content {
        transform: translateY(115%);
        transition: transform 1s;
        @include phablets() {
            transform:translateY(0);
        }
    }
}



.form__upload-img-container {
    flex-direction:column;
    position:relative;
}   
.form__upload-img-input {
    position:absolute;
    top:0;
    left:-9999px;
}

.input__error-tooltip-container {
    position:relative;
}

.form__upload-img-container {
    .form__upload-img-error {
            display:none;
    }

    &.error {
        position:relative;
        .form__upload-img-error {
        display:block;
        position: absolute;
        bottom:-50px;
}
    }
}


.form__text-block {
    .form__text-error {
            display:none;
    }

    &.error {
        position:relative;
        .form__text-error {
        display:block;
        position: absolute;
        bottom:-50px;
}
    }
}



</style>