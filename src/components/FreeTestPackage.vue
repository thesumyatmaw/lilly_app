<template>
  <div>
    <b-container fluid>
      <b-row class="m-b-20">     
        <b-col md="6" class="diaperSizes order-2 order-lg-1">
          <h2>Discover our skin friendlines</h2>
          <p>CHOOSE SIZE</p>
          <b-nav pills>
            <b-nav-item
              class="diaperSize"
              v-for="(diaperSize, index) in diaperSizes"
              v-bind:key="index"
              @click="selectedDiaperSize = diaperSize"
              :active="(selectedDiaperSize &&
                        selectedDiaperSize.diaperSizeName === diaperSize.diaperSizeName)"
            >
              <span>
                <p class="name">{{diaperSize.diaperSizeName}}</p>
                <p class="title">{{diaperSize.diaperSizeTitle}}</p>
              </span>
            </b-nav-item>
          </b-nav>
          <p class="test">
            Now test our skin-friendly diapers and receive our wet wipes
            with 99% water in sizes 1 - 3 or the sensitive wet wipes in sizes 4 - 5.
          </p>
          <ul class="bullet-list-info">
            <li>We pay for the products, you only pay for the shipping.</li>
            <li class="pale-green-color">
              Automatic transition to diaper subscription that can be canceled
              at any time for € 49.50 per delivery.
            </li>
            <li>
              Prices include VAT, plus <font class="pale-green-color">shipping costs</font>
              if applicable
            </li>
          </ul>
        </b-col>
        <b-col md="6" class="trial-pack-image order-1 order-lg-2">
          <img
            v-if="selectedDiaperSize && selectedDiaperSize.trialPackImg"
            :src="selectedDiaperSize.trialPackImg">
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid
      v-if="selectedDiaperSize && selectedDiaperSize.trialPackIncludes.length >= 1"
      class="test-pack-container"
    >
      <b-row class="m-b-20 padding-20">
        <b-col>
          <h2 class="testPLabel">Your test package contains</h2>
        </b-col>
      </b-row>

      <b-row class="m-t-30"
        v-for="(chunk, index) in trialPackIncludesChuncks"
        v-bind:key="index"
      >
        <b-col
          class="trial-pack-includes" 
          md="6"
          v-for="(trialPackIncludeItem, i) in chunk"
          v-bind:key="i"
        >
          <div class="productImg">
            <img :src="trialPackIncludeItem.img">
          </div>
          <div class="productDetails">
            <span>
              <h4>{{trialPackIncludeItem.title}}</h4>
              <RatingStarsDisplay 
                v-bind:rating-value="trialPackIncludeItem.ratingValues" 
                v-bind:reviews-count="trialPackIncludeItem.reviewsCount" 
              />
              <ul class="bullet-list-product-detail">
                <li 
                  v-for="(detailFact, infoIndex) in trialPackIncludeItem.details"
                  v-bind:key="infoIndex"
                >
                  {{detailFact}}
                </li>
              </ul>
            </span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import _ from 'lodash';
import diaperSizesInfo from '@/json/data.json';
import RatingStarsDisplay from './RatingStarsDisplay.vue';

export default {
  name: 'FreeTestPackage',
  components: {
    RatingStarsDisplay,
  },
  data() {
    return {
      diaperSizes: diaperSizesInfo,
      selectedDiaperSize: null,
    };
  },
  created() {
    if (this.diaperSizes && this.diaperSizes.length >= 1) {
      const { 0: firstDiaperSize } = this.diaperSizes;
      this.selectedDiaperSize = firstDiaperSize;
    }
  },
  computed: {
    trialPackIncludesChuncks() {
      const twoItemsChunks = (this.selectedDiaperSize && this.selectedDiaperSize.trialPackIncludes.length >= 1) ? 
      _.chunk(Object.values(this.selectedDiaperSize.trialPackIncludes), 2) : null;
      return twoItemsChunks;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$margin-right-bottom-7px: 0 7px 7px 0;
$active-hover-color: #52b0ac;

@mixin bullet-list {
  list-style-position: outside;
  font-weight: 500;
}
@mixin fontSz-txtAlin-pad($fontSize-value, $textAlign-value, $padding-value) {
  font-size: $fontSize-value;
  text-align: $textAlign-value;
  padding: $padding-value;
}
@mixin max-full-width {
  max-width: 100%;
  flex: none;
}
@mixin max-half-width {
  max-width: 50%;
  flex: 0 0 50%;
}

.diaperSizes.col-md-6{
  .nav{
    margin-bottom: 20px;
  }
  h2{
    text-align: left;
  }
  p{
     text-align: left;
  }
  p.test{
    font-size: .938rem;
  }
}
.trial-pack-image.col-md-6{
  img{
    max-width: 100%;
  }
}
.nav-item.diaperSize{
  max-width: 36%;
  width: 33%;
  .nav-link{
    border-radius: 0.25rem;
    border: 1px $active-hover-color solid;
    margin: $margin-right-bottom-7px;
    padding: 0.3rem 1rem;
    span{
      p{
        margin: auto;
        color: #737676;
      }
      p.name{
        font-size: 1.5rem;
        text-align: center;
      }
      p.title{
        font-size: .7rem;
        text-align: center;
      }
    }
  }
  .nav-link.active, .nav-link:hover{
    background-color: $active-hover-color;
    border: 1px $active-hover-color solid;
    margin: $margin-right-bottom-7px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 0px 7px 0 rgba(0, 0, 0, 0.19);
    span p{
      color: #fff;
    }
  }
}

.testPLabel{
  font-size: 1.5rem;
}
.test-pack-container{
  background-color: #f8f8f8;
}
.trial-pack-includes.col-md-6{
  max-width: 100%;
  padding: 25px;
  .productImg{
    display: inline-block;
    width: 20%;
    float: left;

    img{
      width:87px;
    }
  }
  .productDetails{
    display: inline-block;
    width: 80%;
    padding-left: 40px;

    span{
      text-align:left;

      h4{
        font-size: 1.063rem;
        line-height: 1.5;
        font-weight: 500;
      }
    }
  }
}
/* Media queries */
@media (min-width: 768px) {
  .diaperSizes.col-md-6{
    @include max-full-width;
  }
  .nav-item.diaperSize{
    width: 18%;
  }
  .trial-pack-image.col-md-6{
    @include max-full-width;
  }
  .trial-pack-includes.col-md-6 {
    @include max-full-width;
    padding: 20px;

    .productImg img{
      width: 220px;
    }
    .productDetails{
      padding-left: 90px;
    }
  }
}
@media (min-width: 900px) {
  .testPLabel{
    font-size: 1.7rem;
  }
  .diaperSizes.col-md-6{
    @include max-half-width;
  }
  .nav-item.diaperSize{
    width: unset;
  }
  .trial-pack-image.col-md-6{
    @include max-half-width;
  }
  .trial-pack-includes.col-md-6 {
    @include max-half-width;

    .productImg img{
      width: 140px;
    }
    .productDetails{
      padding-left: 60px;
    }
  }
}
.pale-green-color{
  color: #00afab;
}
.m-t-30{
  margin-top: 30px;
}
.m-b-20{
 margin-bottom: 20px;
}
.padding-20{
  padding: 20px;
}
ul.bullet-list-info {
  @include bullet-list;
  @include fontSz-txtAlin-pad(.938rem, left, 0 0 0 15px);
}
ul.bullet-list-product-detail {
  @include bullet-list;
  @include fontSz-txtAlin-pad(.9rem, left, 0 0 0 15px);
}
</style>
