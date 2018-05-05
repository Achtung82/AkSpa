using System.Collections.Generic;
using System.Linq;
using AkSpa.Models;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkSpa.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
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
            var albumData = _db.Albums
                .Where(x => albums.Contains(x.Id))
                .Select(x=> new{x.Id, x.Name, x.Image });
            return Json(albumData);
        }

        [HttpGet("{albumId:int}")]
        public JsonResult GetTracks(int albumId)
        {
            var tracks = _db.Albums.Include(x => x.Tracks).FirstOrDefault(x => x.Id == albumId)?.Tracks.OrderBy(x=>x.Number).Select(x=>new {x.Id, name = x.GetDisplayName(), file = GetFilePath(albumId, x.FileName)}).ToList();
            if (tracks == null)
            {
                return Json(false);
            }

            return Json(tracks);
        }

        private static string GetFilePath(int albumId, string fileName)
        {
            return $"https://www.altekamereren.org/albums/{albumId}/{fileName}";
        }
    }
}