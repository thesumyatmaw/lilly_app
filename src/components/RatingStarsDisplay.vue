<template>
  <div>
    <div class="h5 mb-2">
      <b-icon-star-fill variant="warning"></b-icon-star-fill>
      <b-icon-star variant="warning"></b-icon-star>
      <b-icon-star variant="warning"></b-icon-star>
      <b-icon-star variant="warning"></b-icon-star>
      <b-icon-star-half variant="warning"></b-icon-star-half>
      <font style="font-size:15px;"> ({{reviewsCount}})</font>
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
  data() {
    return {
      ratingVal: this.ratingValue,
      reviewsNumbers: this.reviewsCount,
    };
  },
};
</script>
