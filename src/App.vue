<script setup lang="ts">
import Item from './components/StarterSliderItem.vue';
import StarterSlider from "./components/StarterSlider.vue";

const backgroundImages = [
  'https://pixabay.com/get/g5d81f82f93543be3591ba544e8434dcad5f88ee62f123b5985734d7f9007b942f4e75baf8fb73cabd490e9a364a9637a2b54c796c56d2a1f772bbfbd444b8e24_1920.jpg',
  'https://pixabay.com/get/g4f041a4702c92198db3beef01bd9387323bf6e99366871af1481cf6b225ab0f2ca26a01b5fc470d5976de282377d385e2c6599adafe6022b00fbc8bd078fee45_1920.jpg',
  'https://pixabay.com/get/g658039bc8679fb5b2427f470d94e904a8d1e119c7b049364fda6a9d33155c37da1847548401fa814e2698e5d9647318958f94476ffb78f0c06a88fa154a6952b_1920.jpg'
]
</script>

<template>
  <starter-slider direction="vertical">
    <Item id="bitch-1" color="gray-600" :background-image="backgroundImages[0]">Bitch</Item>
    <Item id="bitch-2" color="gray-700" :background-image="backgroundImages[1]">Suck</Item>
    <Item id="bitch-3">
      <starter-slider direction="horizontal">
        <Item id="bitch-4" color="blue-800">This is horizontal item 1</Item>
        <Item id="bitch-5" color="green-800">This is horizontal item 2</Item>
      </starter-slider>
    </Item>
    <Item id="bitch-6" color="gray-400" :background-image="backgroundImages[2]">
      Ova posledno e
    </Item>
  </starter-slider>
</template>
