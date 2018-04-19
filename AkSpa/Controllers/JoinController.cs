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
    public class JoinController : Controller
    {
        private readonly AkContext _db;
        public JoinController(AkContext db)
        {
            _db = db;
        }
        [HttpPost]
        public JsonResult Join(JoinUsModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Email) && string.IsNullOrWhiteSpace(model.Tel))
                return Json(new { success = false, message = "Du har ej angett ett sätt att kontakta dig med." });
            if (string.IsNullOrWhiteSpace(model.Instrument))
                return
                    Json(
                        new
                        {
                            success = false,
                            message =
                                "Du måste ange vilke instrument du spelar eller om du vill dansa med baletten."
                        });

            if (
                _db.Recruits.Any(
                    x =>
                        (!string.IsNullOrWhiteSpace(model.Email) && (x.Email == model.Email)) ||
                        (!string.IsNullOrWhiteSpace(model.Tel) && (x.Phone == model.Tel))))
                return
                    Json(
                        new
                        {
                            success = false,
                            message = "En person med din kontaktinformation har redan anmält sig."
                        });
            var rec = new Recruit
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Created = DateTime.UtcNow,
                Email = model.Email,
                Phone = model.Tel,
                Instrument = model.Instrument,
                Other = model.Other
            };
            _db.Recruits.Add(rec);
            _db.SaveChanges();

            return
                Json(new { success = true, message = "Din ansökan är mottagen och vi kommer kontakta dig inom kort" });
        }
    }
}