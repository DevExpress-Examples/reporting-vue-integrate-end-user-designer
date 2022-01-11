Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports DevExpress.XtraReports.UI

Namespace ServerSide
	Public Class XtraReport2
		Inherits XtraReport

		Private sqlDataSource1 As DevExpress.DataAccess.Sql.SqlDataSource
		Private components As System.ComponentModel.IContainer
		Private topMarginBand1 As TopMarginBand
		Private bottomMarginBand1 As BottomMarginBand
		Private xrPageInfo1 As XRPageInfo
		Private xrPageInfo2 As XRPageInfo
		Private reportHeaderBand1 As ReportHeaderBand
		Private xrLabel1 As XRLabel
		Private groupHeaderBand1 As GroupHeaderBand
		Private xrPanel1 As XRPanel
		Private xrTable1 As XRTable
		Private xrTableRow1 As XRTableRow
		Private xrTableCell1 As XRTableCell
		Private xrTableCell2 As XRTableCell
		Private detailBand1 As DetailBand
		Private xrTable2 As XRTable
		Private xrTableRow2 As XRTableRow
		Private xrTableCell3 As XRTableCell
		Private xrTableCell4 As XRTableCell
		Friend WithEvents Title As XRControlStyle
		Friend WithEvents DetailCaption3 As XRControlStyle
		Friend WithEvents DetailData3 As XRControlStyle
		Friend WithEvents DetailData3_Odd As XRControlStyle
		Friend WithEvents DetailCaptionBackground3 As XRControlStyle
		Friend WithEvents PageInfo As XRControlStyle

		Public Sub New()
			InitializeComponent()
		End Sub

		Private Sub InitializeComponent()
            Me.components = New System.ComponentModel.Container()
            Dim SelectQuery1 As DevExpress.DataAccess.Sql.SelectQuery = New DevExpress.DataAccess.Sql.SelectQuery()
            Dim Column1 As DevExpress.DataAccess.Sql.Column = New DevExpress.DataAccess.Sql.Column()
            Dim ColumnExpression1 As DevExpress.DataAccess.Sql.ColumnExpression = New DevExpress.DataAccess.Sql.ColumnExpression()
            Dim Table1 As DevExpress.DataAccess.Sql.Table = New DevExpress.DataAccess.Sql.Table()
            Dim Column2 As DevExpress.DataAccess.Sql.Column = New DevExpress.DataAccess.Sql.Column()
            Dim ColumnExpression2 As DevExpress.DataAccess.Sql.ColumnExpression = New DevExpress.DataAccess.Sql.ColumnExpression()
            Dim Column3 As DevExpress.DataAccess.Sql.Column = New DevExpress.DataAccess.Sql.Column()
            Dim ColumnExpression3 As DevExpress.DataAccess.Sql.ColumnExpression = New DevExpress.DataAccess.Sql.ColumnExpression()
            Dim Column4 As DevExpress.DataAccess.Sql.Column = New DevExpress.DataAccess.Sql.Column()
            Dim ColumnExpression4 As DevExpress.DataAccess.Sql.ColumnExpression = New DevExpress.DataAccess.Sql.ColumnExpression()
            Dim Column5 As DevExpress.DataAccess.Sql.Column = New DevExpress.DataAccess.Sql.Column()
            Dim ColumnExpression5 As DevExpress.DataAccess.Sql.ColumnExpression = New DevExpress.DataAccess.Sql.ColumnExpression()
            Dim Column6 As DevExpress.DataAccess.Sql.Column = New DevExpress.DataAccess.Sql.Column()
            Dim ColumnExpression6 As DevExpress.DataAccess.Sql.ColumnExpression = New DevExpress.DataAccess.Sql.ColumnExpression()
            Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(XtraReport2))
            Me.sqlDataSource1 = New DevExpress.DataAccess.Sql.SqlDataSource(Me.components)
            Me.topMarginBand1 = New DevExpress.XtraReports.UI.TopMarginBand()
            Me.bottomMarginBand1 = New DevExpress.XtraReports.UI.BottomMarginBand()
            Me.xrPageInfo1 = New DevExpress.XtraReports.UI.XRPageInfo()
            Me.xrPageInfo2 = New DevExpress.XtraReports.UI.XRPageInfo()
            Me.reportHeaderBand1 = New DevExpress.XtraReports.UI.ReportHeaderBand()
            Me.xrLabel1 = New DevExpress.XtraReports.UI.XRLabel()
            Me.groupHeaderBand1 = New DevExpress.XtraReports.UI.GroupHeaderBand()
            Me.xrPanel1 = New DevExpress.XtraReports.UI.XRPanel()
            Me.xrTable1 = New DevExpress.XtraReports.UI.XRTable()
            Me.xrTableRow1 = New DevExpress.XtraReports.UI.XRTableRow()
            Me.xrTableCell1 = New DevExpress.XtraReports.UI.XRTableCell()
            Me.xrTableCell2 = New DevExpress.XtraReports.UI.XRTableCell()
            Me.detailBand1 = New DevExpress.XtraReports.UI.DetailBand()
            Me.xrTable2 = New DevExpress.XtraReports.UI.XRTable()
            Me.xrTableRow2 = New DevExpress.XtraReports.UI.XRTableRow()
            Me.xrTableCell3 = New DevExpress.XtraReports.UI.XRTableCell()
            Me.xrTableCell4 = New DevExpress.XtraReports.UI.XRTableCell()
            Me.Title = New DevExpress.XtraReports.UI.XRControlStyle()
            Me.DetailCaption3 = New DevExpress.XtraReports.UI.XRControlStyle()
            Me.DetailData3 = New DevExpress.XtraReports.UI.XRControlStyle()
            Me.DetailData3_Odd = New DevExpress.XtraReports.UI.XRControlStyle()
            Me.DetailCaptionBackground3 = New DevExpress.XtraReports.UI.XRControlStyle()
            Me.PageInfo = New DevExpress.XtraReports.UI.XRControlStyle()
            CType(Me.xrTable1, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.xrTable2, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me, System.ComponentModel.ISupportInitialize).BeginInit()
            '
            'sqlDataSource1
            '
            Me.sqlDataSource1.ConnectionName = "Northwind_Connection"
            Me.sqlDataSource1.Name = "sqlDataSource1"
            ColumnExpression1.ColumnName = "CategoryID"
            Table1.Name = "Categories"
            ColumnExpression1.Table = Table1
            Column1.Expression = ColumnExpression1
            ColumnExpression2.ColumnName = "CategoryName"
            ColumnExpression2.Table = Table1
            Column2.Expression = ColumnExpression2
            ColumnExpression3.ColumnName = "Description"
            ColumnExpression3.Table = Table1
            Column3.Expression = ColumnExpression3
            ColumnExpression4.ColumnName = "Picture"
            ColumnExpression4.Table = Table1
            Column4.Expression = ColumnExpression4
            ColumnExpression5.ColumnName = "Icon_17"
            ColumnExpression5.Table = Table1
            Column5.Expression = ColumnExpression5
            ColumnExpression6.ColumnName = "Icon_25"
            ColumnExpression6.Table = Table1
            Column6.Expression = ColumnExpression6
            SelectQuery1.Columns.Add(Column1)
            SelectQuery1.Columns.Add(Column2)
            SelectQuery1.Columns.Add(Column3)
            SelectQuery1.Columns.Add(Column4)
            SelectQuery1.Columns.Add(Column5)
            SelectQuery1.Columns.Add(Column6)
            SelectQuery1.Name = "Categories"
            SelectQuery1.Tables.Add(Table1)
            Me.sqlDataSource1.Queries.AddRange(New DevExpress.DataAccess.Sql.SqlQuery() {SelectQuery1})
            Me.sqlDataSource1.ResultSchemaSerializable = resources.GetString("sqlDataSource1.ResultSchemaSerializable")
            '
            'topMarginBand1
            '
            Me.topMarginBand1.Name = "topMarginBand1"
            '
            'bottomMarginBand1
            '
            Me.bottomMarginBand1.Controls.AddRange(New DevExpress.XtraReports.UI.XRControl() {Me.xrPageInfo1, Me.xrPageInfo2})
            Me.bottomMarginBand1.Name = "bottomMarginBand1"
            '
            'xrPageInfo1
            '
            Me.xrPageInfo1.LocationFloat = New DevExpress.Utils.PointFloat(6.0!, 6.0!)
            Me.xrPageInfo1.Name = "xrPageInfo1"
            Me.xrPageInfo1.Padding = New DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100.0!)
            Me.xrPageInfo1.PageInfo = DevExpress.XtraPrinting.PageInfo.DateTime
            Me.xrPageInfo1.SizeF = New System.Drawing.SizeF(313.0!, 23.0!)
            Me.xrPageInfo1.StyleName = "PageInfo"
            '
            'xrPageInfo2
            '
            Me.xrPageInfo2.LocationFloat = New DevExpress.Utils.PointFloat(331.0!, 6.0!)
            Me.xrPageInfo2.Name = "xrPageInfo2"
            Me.xrPageInfo2.Padding = New DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100.0!)
            Me.xrPageInfo2.SizeF = New System.Drawing.SizeF(313.0!, 23.0!)
            Me.xrPageInfo2.StyleName = "PageInfo"
            Me.xrPageInfo2.TextAlignment = DevExpress.XtraPrinting.TextAlignment.TopRight
            Me.xrPageInfo2.TextFormatString = "Page {0} of {1}"
            '
            'reportHeaderBand1
            '
            Me.reportHeaderBand1.Controls.AddRange(New DevExpress.XtraReports.UI.XRControl() {Me.xrLabel1})
            Me.reportHeaderBand1.HeightF = 60.0!
            Me.reportHeaderBand1.Name = "reportHeaderBand1"
            '
            'xrLabel1
            '
            Me.xrLabel1.LocationFloat = New DevExpress.Utils.PointFloat(6.0!, 6.0!)
            Me.xrLabel1.Name = "xrLabel1"
            Me.xrLabel1.Padding = New DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100.0!)
            Me.xrLabel1.SizeF = New System.Drawing.SizeF(638.0!, 26.0!)
            Me.xrLabel1.StyleName = "Title"
            Me.xrLabel1.Text = "Categories"
            '
            'groupHeaderBand1
            '
            Me.groupHeaderBand1.Controls.AddRange(New DevExpress.XtraReports.UI.XRControl() {Me.xrPanel1})
            Me.groupHeaderBand1.GroupUnion = DevExpress.XtraReports.UI.GroupUnion.WithFirstDetail
            Me.groupHeaderBand1.HeightF = 48.0!
            Me.groupHeaderBand1.Name = "groupHeaderBand1"
            '
            'xrPanel1
            '
            Me.xrPanel1.Controls.AddRange(New DevExpress.XtraReports.UI.XRControl() {Me.xrTable1})
            Me.xrPanel1.LocationFloat = New DevExpress.Utils.PointFloat(0!, 0!)
            Me.xrPanel1.Name = "xrPanel1"
            Me.xrPanel1.SizeF = New System.Drawing.SizeF(650.0!, 48.0!)
            Me.xrPanel1.StyleName = "DetailCaptionBackground3"
            '
            'xrTable1
            '
            Me.xrTable1.LocationFloat = New DevExpress.Utils.PointFloat(0!, 20.0!)
            Me.xrTable1.Name = "xrTable1"
            Me.xrTable1.Rows.AddRange(New DevExpress.XtraReports.UI.XRTableRow() {Me.xrTableRow1})
            Me.xrTable1.SizeF = New System.Drawing.SizeF(650.0!, 28.0!)
            '
            'xrTableRow1
            '
            Me.xrTableRow1.Cells.AddRange(New DevExpress.XtraReports.UI.XRTableCell() {Me.xrTableCell1, Me.xrTableCell2})
            Me.xrTableRow1.Name = "xrTableRow1"
            Me.xrTableRow1.Weight = 1.0R
            '
            'xrTableCell1
            '
            Me.xrTableCell1.Name = "xrTableCell1"
            Me.xrTableCell1.StyleName = "DetailCaption3"
            Me.xrTableCell1.Text = "Category Name"
            Me.xrTableCell1.Weight = 0.56571425217848559R
            '
            'xrTableCell2
            '
            Me.xrTableCell2.Name = "xrTableCell2"
            Me.xrTableCell2.StyleName = "DetailCaption3"
            Me.xrTableCell2.Text = "Description"
            Me.xrTableCell2.Weight = 0.43428570087139423R
            '
            'detailBand1
            '
            Me.detailBand1.Controls.AddRange(New DevExpress.XtraReports.UI.XRControl() {Me.xrTable2})
            Me.detailBand1.HeightF = 25.0!
            Me.detailBand1.Name = "detailBand1"
            '
            'xrTable2
            '
            Me.xrTable2.LocationFloat = New DevExpress.Utils.PointFloat(0!, 0!)
            Me.xrTable2.Name = "xrTable2"
            Me.xrTable2.OddStyleName = "DetailData3_Odd"
            Me.xrTable2.Rows.AddRange(New DevExpress.XtraReports.UI.XRTableRow() {Me.xrTableRow2})
            Me.xrTable2.SizeF = New System.Drawing.SizeF(650.0!, 25.0!)
            '
            'xrTableRow2
            '
            Me.xrTableRow2.Cells.AddRange(New DevExpress.XtraReports.UI.XRTableCell() {Me.xrTableCell3, Me.xrTableCell4})
            Me.xrTableRow2.Name = "xrTableRow2"
            Me.xrTableRow2.Weight = 11.5R
            '
            'xrTableCell3
            '
            Me.xrTableCell3.ExpressionBindings.AddRange(New DevExpress.XtraReports.UI.ExpressionBinding() {New DevExpress.XtraReports.UI.ExpressionBinding("BeforePrint", "Text", "[CategoryName]")})
            Me.xrTableCell3.Name = "xrTableCell3"
            Me.xrTableCell3.StyleName = "DetailData3"
            Me.xrTableCell3.Text = "xrTableCell3"
            Me.xrTableCell3.Weight = 0.56571429912860582R
            '
            'xrTableCell4
            '
            Me.xrTableCell4.ExpressionBindings.AddRange(New DevExpress.XtraReports.UI.ExpressionBinding() {New DevExpress.XtraReports.UI.ExpressionBinding("BeforePrint", "Text", "[Description]")})
            Me.xrTableCell4.Name = "xrTableCell4"
            Me.xrTableCell4.StyleName = "DetailData3"
            Me.xrTableCell4.Text = "xrTableCell4"
            Me.xrTableCell4.Weight = 0.43428570087139423R
            '
            'Title
            '
            Me.Title.BackColor = System.Drawing.Color.Transparent
            Me.Title.BorderColor = System.Drawing.Color.Black
            Me.Title.Borders = DevExpress.XtraPrinting.BorderSide.None
            Me.Title.BorderWidth = 1.0!
            Me.Title.Font = New System.Drawing.Font("Tahoma", 14.0!)
            Me.Title.ForeColor = System.Drawing.Color.FromArgb(CType(CType(75, Byte), Integer), CType(CType(75, Byte), Integer), CType(CType(75, Byte), Integer))
            Me.Title.Name = "Title"
            '
            'DetailCaption3
            '
            Me.DetailCaption3.BackColor = System.Drawing.Color.Transparent
            Me.DetailCaption3.BorderColor = System.Drawing.Color.Transparent
            Me.DetailCaption3.Borders = DevExpress.XtraPrinting.BorderSide.None
            Me.DetailCaption3.Font = New System.Drawing.Font("Tahoma", 8.0!, System.Drawing.FontStyle.Bold)
            Me.DetailCaption3.ForeColor = System.Drawing.Color.FromArgb(CType(CType(75, Byte), Integer), CType(CType(75, Byte), Integer), CType(CType(75, Byte), Integer))
            Me.DetailCaption3.Name = "DetailCaption3"
            Me.DetailCaption3.Padding = New DevExpress.XtraPrinting.PaddingInfo(6, 6, 0, 0, 100.0!)
            Me.DetailCaption3.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleLeft
            '
            'DetailData3
            '
            Me.DetailData3.Font = New System.Drawing.Font("Tahoma", 8.0!)
            Me.DetailData3.ForeColor = System.Drawing.Color.Black
            Me.DetailData3.Name = "DetailData3"
            Me.DetailData3.Padding = New DevExpress.XtraPrinting.PaddingInfo(6, 6, 0, 0, 100.0!)
            Me.DetailData3.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleLeft
            '
            'DetailData3_Odd
            '
            Me.DetailData3_Odd.BackColor = System.Drawing.Color.FromArgb(CType(CType(231, Byte), Integer), CType(CType(231, Byte), Integer), CType(CType(231, Byte), Integer))
            Me.DetailData3_Odd.BorderColor = System.Drawing.Color.Transparent
            Me.DetailData3_Odd.Borders = DevExpress.XtraPrinting.BorderSide.None
            Me.DetailData3_Odd.BorderWidth = 1.0!
            Me.DetailData3_Odd.Font = New System.Drawing.Font("Tahoma", 8.0!)
            Me.DetailData3_Odd.ForeColor = System.Drawing.Color.Black
            Me.DetailData3_Odd.Name = "DetailData3_Odd"
            Me.DetailData3_Odd.Padding = New DevExpress.XtraPrinting.PaddingInfo(6, 6, 0, 0, 100.0!)
            Me.DetailData3_Odd.TextAlignment = DevExpress.XtraPrinting.TextAlignment.MiddleLeft
            '
            'DetailCaptionBackground3
            '
            Me.DetailCaptionBackground3.BackColor = System.Drawing.Color.Transparent
            Me.DetailCaptionBackground3.BorderColor = System.Drawing.Color.FromArgb(CType(CType(206, Byte), Integer), CType(CType(206, Byte), Integer), CType(CType(206, Byte), Integer))
            Me.DetailCaptionBackground3.Borders = DevExpress.XtraPrinting.BorderSide.Top
            Me.DetailCaptionBackground3.BorderWidth = 2.0!
            Me.DetailCaptionBackground3.Name = "DetailCaptionBackground3"
            '
            'PageInfo
            '
            Me.PageInfo.Font = New System.Drawing.Font("Tahoma", 8.0!, System.Drawing.FontStyle.Bold)
            Me.PageInfo.ForeColor = System.Drawing.Color.FromArgb(CType(CType(75, Byte), Integer), CType(CType(75, Byte), Integer), CType(CType(75, Byte), Integer))
            Me.PageInfo.Name = "PageInfo"
            Me.PageInfo.Padding = New DevExpress.XtraPrinting.PaddingInfo(2, 2, 0, 0, 100.0!)
            '
            'XtraReport2
            '
            Me.Bands.AddRange(New DevExpress.XtraReports.UI.Band() {Me.topMarginBand1, Me.bottomMarginBand1, Me.reportHeaderBand1, Me.groupHeaderBand1, Me.detailBand1})
            Me.ComponentStorage.AddRange(New System.ComponentModel.IComponent() {Me.sqlDataSource1})
            Me.DataMember = "Categories"
            Me.DataSource = Me.sqlDataSource1
            Me.StyleSheet.AddRange(New DevExpress.XtraReports.UI.XRControlStyle() {Me.Title, Me.DetailCaption3, Me.DetailData3, Me.DetailData3_Odd, Me.DetailCaptionBackground3, Me.PageInfo})
            Me.Version = "21.2"
            CType(Me.xrTable1, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.xrTable2, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me, System.ComponentModel.ISupportInitialize).EndInit()

        End Sub
    End Class
End Namespace