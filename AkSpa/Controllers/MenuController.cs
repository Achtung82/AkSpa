using System.Collections.Generic;
using System.Linq;
using AkSpa.Models;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkSpa.Controllers
{
    public class MenuController : Controller
    {
        private readonly AkContext _db;
        public MenuController(AkContext db)
        {
            _db = db;
        }
        [HttpGet]
        public JsonResult GetAllMenus()
        {
            var menuEntities = _db.Menus.Include(x=>x.Link).Where(x => !x.LoggedIn && !x.Balett).OrderBy(x => x.PosIndex).ToList();
            var menus = new List<MenuViewModel>();
            foreach (var menuEntity in menuEntities)
            {
                menus.Add(new MenuViewModel()
                {
                    Text = menuEntity.Name,
                    Url = menuEntity.Link.Slug
                });
            }

            return Json(menus);
        }
    }
}