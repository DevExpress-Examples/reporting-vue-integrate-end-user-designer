using System.Collections.Generic;
using System.IO;
using System.Linq;
using DevExpress.XtraReports.UI;
using DevExpress.XtraReports.Web.Extensions;

namespace ServerSide {
    public class MyReportStorage : ReportStorageWebExtension {
        public Dictionary<string, XtraReport> Reports = new Dictionary<string, XtraReport>();

        public MyReportStorage() {
            Reports.Add("Products", new XtraReport1());
            Reports.Add("Categories", new XtraReport2());
        }
        public override bool CanSetData(string url) {
            return true;
        }
        public override byte[] GetData(string url) {
            var report = Reports[url];
            using(MemoryStream stream = new MemoryStream()) {
                report.SaveLayoutToXml(stream);
                return stream.ToArray();
            }
        }
        public override Dictionary<string, string> GetUrls() {
            return Reports.ToDictionary(x => x.Key, y => y.Key);
        }
        public override void SetData(XtraReport report, string url) {
            if(Reports.ContainsKey(url)) {
                Reports[url] = report;
            }
            else {
                Reports.Add(url, report);
            }
        }
        public override string SetNewData(XtraReport report, string defaultUrl) {
            SetData(report, defaultUrl);
            return defaultUrl;
        }
        public override bool IsValidUrl(string url) {
            return true;
        }
    }
}