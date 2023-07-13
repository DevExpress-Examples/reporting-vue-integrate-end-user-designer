using DevExpress.XtraReports.Web.WebDocumentViewer;

namespace ServerSideApp.Models {
    public class ViewerModel {
        public string ReportUrl { get; set; }
        public WebDocumentViewerModel ViewerModelToBind { get; set; }
    }
}
