Imports System.Collections.Generic
Imports System.IO
Imports System.Linq
Imports DevExpress.XtraReports.UI
Imports DevExpress.XtraReports.Web.Extensions

Namespace ServerSide
	Public Class MyReportStorage
		Inherits ReportStorageWebExtension

		Public Reports As New Dictionary(Of String, XtraReport)()

		Public Sub New()
			Reports.Add("Products", New XtraReport1())
			Reports.Add("Categories", New XtraReport2())
		End Sub
		Public Overrides Function CanSetData(ByVal url As String) As Boolean
			Return True
		End Function
		Public Overrides Function GetData(ByVal url As String) As Byte()
			Dim report = Reports(url)
			Using stream As New MemoryStream()
				report.SaveLayoutToXml(stream)
				Return stream.ToArray()
			End Using
		End Function
		Public Overrides Function GetUrls() As Dictionary(Of String, String)
			Return Reports.ToDictionary(Function(x) x.Key, Function(y) y.Key)
		End Function
		Public Overrides Sub SetData(ByVal report As XtraReport, ByVal url As String)
			If Reports.ContainsKey(url) Then
				Reports(url) = report
			Else
				Reports.Add(url, report)
			End If
		End Sub
		Public Overrides Function SetNewData(ByVal report As XtraReport, ByVal defaultUrl As String) As String
			SetData(report, defaultUrl)
			Return defaultUrl
		End Function
		Public Overrides Function IsValidUrl(ByVal url As String) As Boolean
			Return True
		End Function
	End Class
End Namespace