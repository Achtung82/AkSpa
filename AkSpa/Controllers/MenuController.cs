using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AkSpa.Controllers
{
    public class MenuController : Controller
    {
        [HttpGet]
        public JsonResult GetAll()
        {
            return Json(new List<string>
            {
                "Hem",
                "Om oss",
                "Gå med",
                "På gång"
            });
        }
    }
}