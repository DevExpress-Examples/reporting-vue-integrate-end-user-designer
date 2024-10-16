<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/229233506/23.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T848270)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for Vue - How to Integrate the End-User Web Report Designer in Vue App

This example consists of two parts:

- A server (back-end) ASP.NET Core project that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.

- A <a href="https://vuejs.org/">Vue JavaScript Framework</a> front-end client application.

Perform the following steps to run this example:

1. Open the back-end project solution (**CS\ServerSide.sln**) in Visual Studio and run the project.
2. Navigate to the **JS\vue-report-designer** folder that is the client part's root folder.
3. Open the console and run the following command:

    ```npm install```

4. Run the command to compile and start the client part:

    ```npm run serve```

5. Point your browser at `http://localhost:8080/` to see the result.

> [!TIP]
> Make sure that the backend application runs on the port specified in the host setting of the Report Designer component. For more information, refer to the following help topic: [Determine the Host URL](https://docs.devexpress.com/XtraReports/400196/web-reporting/asp-net-core-reporting/server-side-configuration/report-designer-server-side-configuration-asp-net-core#step-3-determine-the-host-url).

![End-User Web Report Designer in JavaScript with Vue](Images/screenshot.png)


## Files to Review 

- [ReportDesignerComponent.vue](vue-report-designer/src/components/ReportDesignerComponent.vue)
- [main.js](vue-report-designer/src/main.js)
- [ReportingControllers.cs](ServerSideApp/ServerSideApp/Controllers/ReportingControllers.cs)
- [CustomReportStorageWebExtension.cs](ServerSideApp/ServerSideApp/Services/CustomReportStorageWebExtension.cs)
- [Program.cs](ServerSideApp/ServerSideApp/Program.cs)

## Documentation

- [Report Designer Integration in Vue](https://docs.devexpress.com/XtraReports/401542)
## More Examples

- [How to use the Web Document Viewer in JavaScript with the Vue JavaScript Framework](https://github.com/DevExpress-Examples/reporting-web-document-viewer-in-javascript-with-vue)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-vue-integrate-end-user-designer&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-vue-integrate-end-user-designer&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
