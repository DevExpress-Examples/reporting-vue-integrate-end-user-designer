using DevExpress.AspNetCore.Reporting.QueryBuilder;
using DevExpress.AspNetCore.Reporting.ReportDesigner;
using DevExpress.AspNetCore.Reporting.WebDocumentViewer;
using DevExpress.AspNetCore.Reporting.WebDocumentViewer.Native.Services;
using DevExpress.AspNetCore.Reporting.ReportDesigner.Native.Services;
using DevExpress.AspNetCore.Reporting.QueryBuilder.Native.Services;
using Microsoft.AspNetCore.Mvc;
using DevExpress.DataAccess.Sql;
using System.Collections.Generic;
using DevExpress.XtraReports.Web.ReportDesigner.Services;
using System.Threading.Tasks;

namespace ServerSideApp.Controllers {
    public class CustomWebDocumentViewerController : WebDocumentViewerController {
        public CustomWebDocumentViewerController(IWebDocumentViewerMvcControllerService controllerService) : base(controllerService) {
        }
    }

        public class CustomReportDesignerController : ReportDesignerController {
            public CustomReportDesignerController(IReportDesignerMvcControllerService controllerService) : base(controllerService) {
            }

        [HttpPost("[action]")]
        public async Task<IActionResult> GetDesignerModel(
            [FromForm] string reportName,
            [FromServices] IReportDesignerModelBuilder reportDesignerModelBuilder) {
            var dataSources = new Dictionary<string, object>();
            var ds = new SqlDataSource("NWindConnectionString");

            // Create a SQL query to access the Products data table.
            SelectQuery query = SelectQueryFluentBuilder.AddTable("Products").SelectAllColumnsFromTable().Build("Products");
            ds.Queries.Add(query);
            ds.RebuildResultSchema();
            dataSources.Add("Northwind", ds);

            reportName = string.IsNullOrEmpty(reportName) ? "TestReport" : reportName;
            var designerModel = await reportDesignerModelBuilder
                .Report(reportName)
                .DataSources(dataSources)
                .BuildModelAsync();

            return DesignerModel(designerModel);
        }
    }

        public class CustomQueryBuilderController : QueryBuilderController {
        public CustomQueryBuilderController(IQueryBuilderMvcControllerService controllerService) : base(controllerService) {
        }
    }
}
