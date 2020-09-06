# vue-tap-away
Reusable tap-away directive to detect taps/clicks outside an element. Works with touch devices!

### Environments
This plugin supports Vue version 2 and is written in ES6. You will need a transpiler to run this plugin on older browsers.

### Installation
```
yarn add vue-tap-away
npm install vue-tap-away

// This package requires: hammerjs, lodash, event-propagation-path and propagating-hammerjs
yarn add hammerjs lodash event-propagation-path propagating-hammerjs
```

### Usage
```js
import Vue from 'vue';
import { TapAway, TapStop } from 'vue-tap-away';

Vue.directive('tap-away', TapAway);
Vue.directive('tap-stop', TapStop);
```

v-tap-away:
```vue
<template>
    <div
        v-if="show"
        v-tap-away="hideMe"
    >
        Aw ye
    </div>
</template>

<script>
export default {
    data: () => ({
        show: true,
    }),
    methods: {
        hideMe() {
            this.show = false;
        }
    },
};
</script>
```

v-tap-stop:
```vue
<template>
    <div v-tap-stop>
        Taps on this element won't propagate!    
    </div>
</template>
```

Also possible to have v-tap-stop conditionally apply:
```vue
<template>
    <div v-tap-stop="false">
        Taps on this element WILL propagate
    </div>
</template>
```
