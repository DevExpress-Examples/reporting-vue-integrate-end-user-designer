import Vue from 'vue'
import App from './App.vue'
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "@devexpress/analytics-core/dist/css/dx-analytics.common.css";
import "@devexpress/analytics-core/dist/css/dx-analytics.light.css";
import "@devexpress/analytics-core/dist/css/dx-querybuilder.css";
import "devexpress-reporting/dist/css/dx-webdocumentviewer.css";
import "devexpress-reporting/dist/css/dx-reportdesigner.css";

import "ace-builds/css/ace.css";
import "ace-builds/css/theme/dreamweaver.css";
import "ace-builds/css/theme/ambiance.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
