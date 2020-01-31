using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using DevExpress.XtraReports.Web.Extensions;

namespace ServerSide {
    public class MvcApplication : System.Web.HttpApplication {
        protected void Application_Start() {
            //AreaRegistration.RegisterAllAreas();

            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ReportStorageWebExtension.RegisterExtensionGlobal(new MyReportStorage());
        }
    }
}