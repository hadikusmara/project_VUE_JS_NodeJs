<template>
  <div class="tab-container">
    
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabPane from './components/TabPane'

export default {
  name: 'Tab',
  components: { TabPane },
  data() {
    return {
      tabMapOptions: [
        
        { label: 'Komposisi Reksa Dana', key: 'KRD' },
        { label: 'Perkembangan Pasar Modal', key: 'PPM' },
        { label: 'Kinerja Index Saham Syariah', key: 'KISS' },
        { label: 'Perkebangan Sukuk', key: 'PS' },
        { label: 'Komposisi Saham', key: 'KS' },
        { label: 'Perkembangan Layaran Syariah', key: 'PLS' },
        { label: 'Pertumbuhan saham dan Reksadana', key: 'PSR' }
      ],
      activeName: 'KRD',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
