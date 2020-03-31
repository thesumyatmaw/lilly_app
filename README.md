# lilly_app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### This app is implemented
```
By using Vue.js, BootstrapVue, SCSS
```

### Mock Data and Testing
```
- src/json/data.json is the file where Mock data is existed. 
- It has JSON array which is the list of diaperSizers data and its related information such as title, 
  image links and trilPackIncluding items. 
- You can see how I structured the data format to use in the vue components.
[
  {
    "diaperSizeName": "1",
    "diaperSizeTitle": "(2-5 KG)",
    "trialPackImg": "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-10.jpg",
    "trialPackIncludes":[
      {
        "title":"10 LILLYDOO DIAPERS",
        "img": "https://www.lillydoo.com/bundles/lepweb/img/lillydoo-little-blowballs-design-preview-tp.png",
        "reviewsCount": 12,
        "ratingValues": 4.5,
        "details": [
          "0% perfumes & lotions, 100% LILLYDOO protection",
          "Extra soft and super comfortable",
          "With our turbo tunnels for an ideal fit and quick absorption"
        ]
      },
      {
        "title":"15 WET WIPES WITH 99% WATER",
        "img": "https://www.lillydoo.com/bundles/lepweb/img/products/wipes/water-wipes-15-small.png",
        "reviewsCount": 114,
        "ratingValues": 4.5,
        "details": [
          "0% perfumes & PEGs, 100% biodegradable",
          "Naturally pure, extra mild, alternative to \"water & cotton\""
        ]
      }
    ]
  },
  {...},
  {...},
  {...},
  {...}
]
- Currently it has 5 diaperSize objects in the JSON array in this data.json file.
- Please feel free to test by adding more diaperSize objects and trialPackIncludes Items. 
- The only thing that has to be aware of is please make unique for diaperSizeName if you add more. 
- Because I use this field to mark as uniquely active when it is clicked. 
  (With real life data, of course, I will choose to use Relational auto_increment Id/UUID 
  to be more precise in unique cases)
```

### Components (src/components)
```
- FreeTestPackage.vue is the component where the diaperSizes info 
  including trailPack Image, trialPack includes items are loaded and rendered. 
- For the stars display based on rating value and reviews Count display, 
  FreeTestPackage.vue embeds RatingStarsDisplay.vue as a child component by passing props params "ratingValue" &   "reviewsCount".
- RatingStarsDisplay.vue is the component where it receives "ratingValue" & "reviewsCount" 
  from parent component and render the stars with the condition of no-fill, fill and half-fill.
```

### Responsiveness
```
Good thing that shouldn't be missed to check: 
- For large screen, diaperSizes buttons are left side and trialPack Image is right side.
- For small screen, trialPack Image is at top and diaperSizes buttons are at bottom.
- I used bootstrap column auto ordering for this.
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
