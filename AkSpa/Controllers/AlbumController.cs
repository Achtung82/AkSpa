using System.Collections.Generic;
using System.Linq;
using AkSpa.Models;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkSpa.Controllers
{
    [Route("api/[controller]")]
    public class AlbumController : Controller
    {
        private readonly AkContext _db;
        public AlbumController(AkContext db)
        {
            _db = db;
        }

        [HttpPost]
        public JsonResult GetAlbums([FromBody] IEnumerable<int> albums)
        {
            if (albums == null)
            {
                return Json(false);
            }

            return Json(true);
        }
    }
}