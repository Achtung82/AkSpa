using System;
using System.Collections.Generic;
using System.Linq;
using AkSpa.Models;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkSpa.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private readonly AkContext _db;
        public EventController(AkContext db)
        {
            _db = db;
        }
        [HttpGet]
        public JsonResult GetAllGigs()
        {
            var events = _db.Events
                .Where(x => x.Day >= DateTime.UtcNow.Date)
                .OrderBy(x=>x.Day)
                .ThenBy(x=>x.StartsTime)
                .GroupBy(x => x.Day.Year);
            return Json(events);
        }
    }
}