<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/229233506/24.2.1%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T848270)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
## Reporting for Vue - Integrate a Web Report Designer into a Vue App

This example incorporates the Web Report Designer component into a client-side app built with Vue. The example consists of two parts:

- The [ServerSideApp](ServerSideApp) folder contains the backend project. The project is an ASP.NET Core application that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements custom web report storage.

- The [vue-report-designer](vue-report-designer) folder contains the client application built with Vue.

## Quick Start

### Server

In the *ServerSideApp* folder, run the following command:

```
dotnet run
```

The server starts at http://localhost:5000. To debug the server, run the application in Visual Studio.

### Client

In the *vue-report-designer* folder, run the following commands:

```
npm install
npm run serve
```

Open your browser (http://localhost:8080/) to see the result. The application displays the Web Document Viewer.

![End-User Web Report Designer in JavaScript with Vue](Images/screenshot.png)


## Files to Review 

- [Designer.vue](vue-report-designer/src/components/Designer.vue)
- [App.vue](vue-report-designer/src/App.vue)
- [main.js](vue-report-designer/src/main.js)
- [ReportingControllers.cs](ServerSideApp/Controllers/ReportingControllers.cs)
- [CustomReportStorageWebExtension.cs](ServerSideApp/Services/CustomReportStorageWebExtension.cs)
- [Program.cs](ServerSideApp/Program.cs)

## Documentation

- [Report Designer Integration in Vue](https://docs.devexpress.com/XtraReports/401542)

## More Examples

- [How to use the Web Document Viewer in JavaScript with the Vue JavaScript Framework](https://github.com/DevExpress-Examples/reporting-web-document-viewer-in-javascript-with-vue)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-vue-integrate-end-user-designer&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-vue-integrate-end-user-designer&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
