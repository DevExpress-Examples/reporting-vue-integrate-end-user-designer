using System;
using System.Collections.Generic;
using System.Linq;
using DevExpress.DataAccess.Json;
using DevExpress.DataAccess.Web;
using ServerSideApp.Data;

namespace ServerSideApp.Services
{
    public class CustomJsonDataConnectionProviderFactory : IJsonDataConnectionProviderFactory {
        protected ReportDbContext DbContext { get; }

        public CustomJsonDataConnectionProviderFactory(ReportDbContext dbContext) {
            DbContext = dbContext;
        }

        public IJsonDataConnectionProviderService Create() {
            return new WebDocumentViewerJsonDataConnectionProvider(DbContext.JsonDataConnections.ToList());
        }
    }

    public class WebDocumentViewerJsonDataConnectionProvider : IJsonDataConnectionProviderService
    {
        readonly IEnumerable<DataConnection> jsonDataConnections;
        public WebDocumentViewerJsonDataConnectionProvider(IEnumerable<DataConnection> jsonDataConnections) {
            this.jsonDataConnections = jsonDataConnections;
        }
        public JsonDataConnection GetJsonDataConnection(string name) {
            var connection = jsonDataConnections.FirstOrDefault(x => x.Name == name);
            if(connection == null)
                throw new InvalidOperationException();
            return CustomDataSourceWizardJsonDataConnectionStorage.CreateJsonDataConnectionFromString(connection);
        }
    }
}
