<template>
<div ref="designer" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0" data-bind="dxReportDesigner: $data"></div>
</template>

<script>
import ko from "knockout";
import "devexpress-reporting/dx-reportdesigner";

export default {
name: "ReportDesignerComponent",
mounted() {
    var designerOptions = {
        reportUrl: ko.observable("TestReport"),
        requestOptions: {
        host: "https://localhost:54114/",
        getDesignerModelAction: "DXXRD/GetDesignerModel"
        }
    };
    ko.applyBindings(designerOptions, this.$refs.designer);
},
beforeUnmount() {
    ko.cleanNode(this.$refs.designer);
}
};
</script>