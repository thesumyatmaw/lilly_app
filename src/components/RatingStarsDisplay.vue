<template>
  <div>
    <div class="h5 mb-2">
      <span v-for="index in 5" :key="index">
        <b-icon-star-fill variant="warning" :class="`fullFill_${index}`" 
          v-if="ratingValue >= index"
        ></b-icon-star-fill>
        <b-icon-star-half variant="warning" :class="`halfFill_${index}`" 
          v-if="ratingValue >= (index - 1 + 0.5) && ratingValue < index"
        ></b-icon-star-half>
        <b-icon-star variant="warning" :class="`noFill_${index}`" 
          v-if="ratingValue < (index - 1 + 0.5)"
        ></b-icon-star>
      </span>
      <font class="review-counts"> ({{reviewsCount}})</font>
    </div>
  </div>
</template>

<script>
import { BIconStar, BIconStarFill, BIconStarHalf } from 'bootstrap-vue';

export default {
  name: 'RatingStarsDisplay',
  components: {
    BIconStar,
    BIconStarFill,
    BIconStarHalf,
  },
  props: {
    ratingValue: Number,
    reviewsCount: Number,
  },
};
</script>
<style scoped lang="scss">
  .review-counts{
    font-size: 15px;
  }
</style>
