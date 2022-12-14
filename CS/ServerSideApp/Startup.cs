using System;
using System.IO;
using DevExpress.AspNetCore;
using DevExpress.AspNetCore.Reporting;
using DevExpress.Security.Resources;
using DevExpress.XtraReports.Web.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ServerSideApp.Services;
using ServerSideApp.Data;

namespace ServerSideApp {
    public class Startup {
        public Startup(IConfiguration configuration, IWebHostEnvironment hostingEnvironment) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddDevExpressControls();
            services.AddScoped<ReportStorageWebExtension, CustomReportStorageWebExtension>();
            services
                .AddMvc()
                .AddNewtonsoftJson();
            services.ConfigureReportingServices(configurator => {
                configurator.ConfigureReportDesigner(designerConfigurator => {
                });
                configurator.ConfigureWebDocumentViewer(viewerConfigurator => {
                    viewerConfigurator.UseCachedReportSourceBuilder();
                    viewerConfigurator.RegisterConnectionProviderFactory<CustomSqlDataConnectionProviderFactory>();
                });
                configurator.UseAsyncEngine();
            });
            services.AddDbContext<ReportDbContext>(options => options.UseSqlite(Configuration.GetConnectionString("ReportsDataConnectionString")));
            services.AddCors(options => {
                options.AddPolicy("AllowCorsPolicy", builder => {
                    // Allow all ports on local host.
                    builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost");
                    builder.AllowAnyHeader();
                    builder.AllowAnyMethod();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory, ReportDbContext db) {
            db.InitializeDatabase();
            var contentDirectoryAllowRule = DirectoryAccessRule.Allow(new DirectoryInfo(Path.Combine(env.ContentRootPath, "..", "Content")).FullName);
            AccessSettings.ReportingSpecificResources.TrySetRules(contentDirectoryAllowRule, UrlAccessRule.Allow());
            DevExpress.XtraReports.Configuration.Settings.Default.UserDesignerOptions.DataBindingMode = DevExpress.XtraReports.UI.DataBindingMode.Expressions;
            app.UseDevExpressControls();
            System.Net.ServicePointManager.SecurityProtocol |= System.Net.SecurityProtocolType.Tls12;
            if(env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            } else {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            
            app.UseRouting();

            app.UseCors("AllowCorsPolicy");

            app.UseAuthorization();
            app.UseEndpoints(endpoints => {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
