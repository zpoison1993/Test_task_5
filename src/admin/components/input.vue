<template lang="pug">
  label.input(
    :class="[iconClass, {'error' : !!errorText}]"
  )
    span.input__title(v-if="title") {{title}} 
    input(
      v-bind="$attrs"
      :value="value"
      placeholder = "Введите значение" 
      @input="$emit('input', $event.target.value)"
    ).input__elem.field__elem

    .input__error-tooltip
      errors-tooltip(
        :errorText="errorText"
      )
</template>

<script>
import errorsTooltip from "./error-tooltip";
export default {
  props: {
    title: String,
    errorText: {
      type: String,
      default: ""
    },
    value: String | Number,
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  },
  components: {
    errorsTooltip
  }
};
</script>


<style lang="postcss" scoped>
.input__error-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 30%;
  transform: translateX(-50%);
  z-index: 100;
}
.input {
  display: block;
  position: relative;
  &.no-side-paddings {
    .input__elem {
      padding-right: 0;
      padding-left: 0;
    }
  }
  &_labeled {
    .input__elem {
      padding: 15px 0 18px;
    }
  }
  &_iconed {
    .input__title {
      display: block;
      margin-left: 45px;
      margin-bottom: 13px;
    }
    .input__elem {
      padding-left: 45px;
      background: left center / auto 29px no-repeat;
      font-size: 18px;
      font-weight: bold;
      padding-top: 17px;
      padding-bottom: 17px;
    }
  }
  &_icon {
    @each $icon in (user, keyy) {
      &-$(icon) {
        .input__elem {
          background-image: svg-load("$(icon).svg", fill=$text-color-pale);
        }
      }
    }
  }
  &.error {
    @each $icon in (user, keyy) {
      &.input_icon-$(icon) {
        .input__elem {
          background-image: svg-load("$(icon).svg", fill=red);
        }
      }
    }
  }
}
.error {
  .field__elem {
    border-color: red;
  }
  .input__error-tooltip {
    display: block;
  }
}
.textarea {
  position: relative;
}
.input__title {
  color: #939ca5;
  font-weight: 600;
  // opacity: 0.5;
}
.textarea__elem {
  height: 150px;
  padding: 20px;
  border: 1px solid rgba($text-color, 0.2);
  resize: none;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
}
.input__elem {
  font-size: 1rem;
  font-weight:600;
  line-height: 1.15;
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #414c63;
  &::placeholder {
    color: rgba(55, 62, 66, 0.25);
  }
}
</style>