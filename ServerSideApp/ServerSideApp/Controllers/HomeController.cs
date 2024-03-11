using DevExpress.XtraReports.Web.ReportDesigner.Services;
using Microsoft.AspNetCore.Mvc;

namespace ServerSideApp.Controllers {
    public class HomeController : Controller {
        public IActionResult Index() {
            return View();
        }
        public IActionResult Error() {
            Models.ErrorModel model = new Models.ErrorModel();
            return View(model);
        }
        
        public IActionResult ReportDesigner(
            [FromServices] IReportDesignerModelBuilder reportDesignerModelBuilder, 
            [FromQuery] string reportName) {

            reportName = string.IsNullOrEmpty(reportName) ? "TestReport" : reportName;
            var designerModel = reportDesignerModelBuilder
                .Report(reportName)
                .BuildModel();
            return View(designerModel);
        }

    }
}