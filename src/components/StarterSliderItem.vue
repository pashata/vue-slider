<script lang="ts" setup>
  import { inject, onBeforeMount } from "vue";
  import { ACTIVE_SLIDE_ID, ADD_SLIDER_ITEM, IS_SLIDER_TRANSFORMING, SLIDER_DIRECTION } from "../constants";
  import './StarterSliderItem.scss';

  const { color, backgroundImage, id } = defineProps<{
    id: string;
    color?: string;
    backgroundImage?: string;
  }>()

  const addSliderItem = inject(ADD_SLIDER_ITEM);
  const sliderDirection = inject(SLIDER_DIRECTION);
  const activeId = inject(ACTIVE_SLIDE_ID);
  const isTransforming = inject(IS_SLIDER_TRANSFORMING);

  onBeforeMount(() => {
    addSliderItem?.(id);
  });
</script>
<template>
  <div
    :class="{
        'starter-slider-item': true,
        [`bg--${color ?? 'gray-500'}`]: true,
        [`starter-slider-item--${sliderDirection}`]: sliderDirection,
        'starter-slider-item--active': activeId === id
      }"
  >
    <div
      :class="{
        'starter-slider-item__content': true,
        [`starter-slider-item__content--${sliderDirection}`]: sliderDirection,
        'starter-slider-item__content--active': activeId === id,
        'starter-slider-item__content--transforming': isTransforming,
      }"
      :style="{
        backgroundImage: `url(${backgroundImage})` ?? ''
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
