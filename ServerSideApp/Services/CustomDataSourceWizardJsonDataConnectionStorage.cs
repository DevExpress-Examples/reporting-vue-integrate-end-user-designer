using System;
using System.Collections.Generic;
using System.Linq;
using DevExpress.DataAccess.Json;
using DevExpress.DataAccess.Web;
using DevExpress.DataAccess.Wizard.Services;
using ServerSideApp.Data;

namespace ServerSideApp.Services
{
    public class CustomDataSourceWizardJsonDataConnectionStorage : IDataSourceWizardJsonConnectionStorage
    {
        protected ReportDbContext DbContext { get; }

        public CustomDataSourceWizardJsonDataConnectionStorage(ReportDbContext dbContext) {
            DbContext = dbContext;
        }

        public List<JsonDataConnectionDescription> GetConnections() {
            return DbContext.JsonDataConnections.ToList();
        }

        bool IJsonConnectionStorageService.CanSaveConnection { get { return DbContext.JsonDataConnections != null; } }
        bool IJsonConnectionStorageService.ContainsConnection(string connectionName) {
            return GetConnections().Any(x => x.Name == connectionName);
        }

        IEnumerable<JsonDataConnection> IJsonConnectionStorageService.GetConnections() {
            return GetConnections().Select(x => CreateJsonDataConnectionFromString(x));
        }

        JsonDataConnection IJsonDataConnectionProviderService.GetJsonDataConnection(string name) {
            var connection = GetConnections().FirstOrDefault(x => x.Name == name);
            if(connection == null)
                throw new InvalidOperationException();
            return CreateJsonDataConnectionFromString(connection);
        }

        void IJsonConnectionStorageService.SaveConnection(string connectionName, JsonDataConnection dataConnection, bool saveCredentials) {
            var connections = GetConnections();
            var connectionString = dataConnection.CreateConnectionString();
            foreach(var connection in connections) {
                if(connection.Name == connectionName) {
                    connection.ConnectionString = connectionString;
                    DbContext.SaveChanges();
                    return;
                }
            }
            DbContext.JsonDataConnections.Add(new JsonDataConnectionDescription() { Name = connectionName, ConnectionString = connectionString });
            DbContext.SaveChanges();
        }

        public static JsonDataConnection CreateJsonDataConnectionFromString(DataConnection dataConnection) {
            return new JsonDataConnection(dataConnection.ConnectionString) { StoreConnectionNameOnly = true, Name = dataConnection.Name };
        }
    }
}
