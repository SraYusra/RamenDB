<template>
  <div :class="$style.parser">
    <vue-grid>
      <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Parser' }]" />

      <vue-grid-row>
        <vue-grid-item fill>
          <vue-headline level="1">Parser</vue-headline>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-button color="secondary" :loading="incrementPending" @click="increment">Upload CSV File - Increment +1 </vue-button>
          <br />
          <br />
        </vue-grid-item>
        <vue-grid-item fill>
          <vue-button color="primary" :loading="decrementPending" @click="decrement">Decrement -1 </vue-button>
          <vue-headline level="3">Here, a table will be printed - Count is {{ count }}</vue-headline>
          <br />
          <br />
        </vue-grid-item>
        <vue-grid-item fill>
          <vue-slider :min="0" :max="20" :values="[0]" @change="decrement"/>
          <br />
          <br />
        </vue-grid-item>
        <vue-grid-item>
          <!--
          <vue-data-table :header="header" :data="data" placeholder="Search" @click="action">
              <template v-slot:actions="{ row }">
                <vue-dropdown-menu :options="[{label:'Delete', value:'delete'}]" @click="click(row)" />
              </template>
          </vue-data-table>
          -->
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { registerModule } from '@/app/store';
import { ParserModule } from '../module';
import { IPreLoad } from '@/server/isomorphic';
import { VueCsvImport } from 'vue-csv-import';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';
import VueBreadcrumb from '@/app/shared/components/VueBreadcrumb/VueBreadcrumb.vue';
import VueSlider from '@/app/shared/components/VueSlider/VueSlider.vue';
import VueDataTable from '@/app/shared/components/VueDataTable/VueDataTable.vue';

export default {
  metaInfo: {
    title: 'Parser',
  },
  components: {
    VueBreadcrumb,
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueHeadline,
    VueSlider,
    VueDataTable,
  },
  methods: {
    ...mapActions('parser', ['increment', 'decrement']),
  },
  computed: {
    ...mapGetters('parser', ['count', 'incrementPending', 'decrementPending']),
  },
  beforeCreate() {
    registerModule('parser', ParserModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('parser', ParserModule);
    return options.store.dispatch('parser/increment');
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.parser {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
