using System.Collections.Generic;
using System.Linq;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Mvc;

namespace AkSpa.Controllers
{
    public class PageController : Controller
    {
        private readonly AkContext _db;

        public PageController(AkContext db)
        {
            _db = db;
        }

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
        [HttpGet]
        public JsonResult GetAllPages()
        {
            var pages = _db.Pages.Where(x => !x.LoggedIn).ToDictionary(x=>x.Slug.ToLower());

            return Json(pages);
        }

    }
}