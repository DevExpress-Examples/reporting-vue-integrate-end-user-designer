using DevExpress.Web.Mvc.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ServerSide.Controllers
{
    public class WebDocumentViewerController : WebDocumentViewerApiController
    {
        //
        // GET: /WebDocumentViewer/

        public override ActionResult Invoke()
        {
            var result = base.Invoke();
            // Allow cross-domain requests.
            Response.AppendHeader("Access-Control-Allow-Origin", "*");
            return result;
        }

    }
}
