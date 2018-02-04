using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AkSpa.Controllers
{
    public class MenuController : Controller
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(new List<string>()
            {
                "hej",
                "haj",
                "Hoj"
            });
        }
    }
}