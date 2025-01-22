using System.Collections.Generic;
using System.Linq;
using DevExpress.DataAccess.ConnectionParameters;
using DevExpress.DataAccess.Web;
using ServerSideApp.Data;

namespace ServerSideApp.Services
{
    public class CustomSqlDataSourceWizardConnectionStringsProvider : IDataSourceWizardConnectionStringsProvider {
        readonly ReportDbContext reportDataContext;

        public CustomSqlDataSourceWizardConnectionStringsProvider(ReportDbContext reportDataContext) {
            this.reportDataContext = reportDataContext;
        }
        Dictionary<string, string> IDataSourceWizardConnectionStringsProvider.GetConnectionDescriptions() {
            return reportDataContext.SqlDataConnections.ToDictionary(x => x.Name, x => x.DisplayName);
        }

        DataConnectionParametersBase IDataSourceWizardConnectionStringsProvider.GetDataConnectionParameters(string name) {
            return null;
        }
    }
}
