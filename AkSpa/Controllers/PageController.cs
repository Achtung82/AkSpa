using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AkSpa.Controllers
{
    public class PageController : Controller
    {
        [HttpGet]
        public JsonResult GetPageContent()
        {
            return Json(new List<string>
            {
                "hej",
                "haj",
                "Hoj"
            });
        }

        [HttpGet]
        public JsonResult GetAdminContent()
        {
            return Json(new List<string>
            {
                "hemligt",
                "hemligt",
                "hemligt"
            });
        }
    }
}