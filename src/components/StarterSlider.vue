<script lang="ts" setup>
  import { useTemplateRef, ref, onMounted, onUnmounted, computed, provide } from "vue";
  import { ACTIVE_SLIDE_ID, ADD_SLIDER_ITEM, IS_SLIDER_TRANSFORMING, SLIDER_DIRECTION } from "../constants";

  import './SliderColors.scss'
  import './StarterSlider.scss';

  const innerRef = useTemplateRef('inner-slider');
  const slides = ref<string[]>([]);
  const { direction = 'vertical' } = defineProps<{
    direction?: string
  }>();
  const activeItem = ref<string>('');
  const isTransforming = ref<boolean>(false);

  const amount = computed(() => slides.value.length);
  const activeItemIndex = computed(() => {
    const index = slides.value.indexOf(activeItem.value);
    return index + 1;
  })

  const scrollHandler = (event: WheelEvent) => {
    const { deltaY, deltaX } = event;
    const valueToChange = deltaY > 0 ? 1 : -1;
    const newActiveItem = activeItemIndex.value + valueToChange;

    if (
      isTransforming.value
    ) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (
      !isTransforming.value
      && newActiveItem > 0
      && newActiveItem <= amount.value
    ) {
      event.preventDefault();
      event.stopPropagation();

      activeItem.value = slides.value[newActiveItem - 1];
      isTransforming.value = true;

      setTimeout(() => {
        isTransforming.value = false;
      }, 500)
    }
  }

  const translateValue = computed(() => {
    if (direction === 'vertical') {
      return `translateY(${(activeItemIndex.value - 1) * -100}%)`;
    }

    return `translateX(${(activeItemIndex.value - 1) * -100}%)`
  })

  provide(SLIDER_DIRECTION, direction);
  provide(ADD_SLIDER_ITEM, (slideId) => {
    if (slides.value.length <= 0) {
      activeItem.value = slideId;
    }

    slides.value.push(slideId);
  });
  provide(ACTIVE_SLIDE_ID, activeItem);
  provide(IS_SLIDER_TRANSFORMING, isTransforming);

  onMounted(() => {
    if (innerRef.value) {
      innerRef.value.addEventListener('wheel', scrollHandler);
    }
  })

  onUnmounted(() => {
    if (innerRef.value) {
      innerRef.value.removeEventListener('wheel', scrollHandler)
    }
  })
</script>
<template>
  <div class="starter-slider">
    <div
      :class="{
        'starter-slider__inner': true,
        [`starter-slider__inner--${direction}`]: true
      }"
      ref="inner-slider"
      :style="{ transform: translateValue }"
    >
      <slot></slot>
    </div>
    <div :class="{
      'starter-slider__pagination': true,
      [`starter-slider__pagination--${direction}`]: true
    }">
      <span
        v-for="slide in slides"
        :class="{
          'starter-slider__pagination-item': true,
          'starter-slider__pagination-item--active': slide === activeItem
        }"
        v-bind:key="`${slide}-pagination`"></span>
    </div>
  </div>
</template>
