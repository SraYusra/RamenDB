<template>
  <div :class="$style.counter">
    <vue-grid>
      <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'VueX Example' }]" />

      <vue-grid-row>
        <vue-grid-item fill> <vue-headline level="1">Example</vue-headline> </vue-grid-item>

        <!-- THIS DOESNT SHOW UP -->
        <vue-csv-import url="/url/to/post" :map-fields="['array', 'of', 'field', 'names']"></vue-csv-import>
        
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';
import { registerModule } from '@/app/store';
import { CounterModule } from '../module';
import VueBreadcrumb from '@/app/shared/components/VueBreadcrumb/VueBreadcrumb.vue';

export default {
  metaInfo: {
    title: 'Counter',
  },
  components: {
    VueBreadcrumb,
    VueHeadline,
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
  },
  methods: {
    ...mapActions('counter', ['increment', 'decrement']),
  },
  computed: {
    ...mapGetters('counter', ['count', 'incrementPending', 'decrementPending']),
  },
  beforeCreate() {
    registerModule('counter', CounterModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('counter', CounterModule);
    return options.store.dispatch('counter/increment');
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.counter {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
