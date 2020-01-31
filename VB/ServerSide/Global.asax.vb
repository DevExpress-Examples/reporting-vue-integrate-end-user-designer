Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.Http
Imports System.Web.Mvc
Imports System.Web.Routing
Imports DevExpress.XtraReports.Web.Extensions

Namespace ServerSide
	Public Class MvcApplication
		Inherits System.Web.HttpApplication

		Protected Sub Application_Start()
			'AreaRegistration.RegisterAllAreas();

			RouteConfig.RegisterRoutes(RouteTable.Routes)
			ReportStorageWebExtension.RegisterExtensionGlobal(New MyReportStorage())
		End Sub
	End Class
End Namespace