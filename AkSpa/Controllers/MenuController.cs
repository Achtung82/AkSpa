using System.Collections.Generic;
using System.Linq;
using AkSpa.Models;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkSpa.Controllers
{
    [Route("api/[controller]")]
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
            var loggedIn = User.Identity.IsAuthenticated;
            var menuEntities = _db.Menus
                .Include(b => b.Link)
                .Include(x => x.Children)
                .ThenInclude(x => x.Link)
                .Where(x => loggedIn || !x.LoggedIn)
                .Where(x => !x.Balett)
                .Where(x => x.Link == null || !loggedIn || !x.Link.LoggedOut)
                .OrderBy(x => x.PosIndex).ToList();

            return Json(MapMenus(menuEntities));
        }

        private IEnumerable<MenuViewModel> MapMenus(IEnumerable<Menu> menuEntities)
        {
            var menus = new List<MenuViewModel>();
            foreach (var menuEntity in menuEntities)
            {
                var topMenu = new MenuViewModel()
                {
                    Text = menuEntity.Name,
                    Url = menuEntity.Link?.Slug
                };
                if (menuEntity.Children != null)
                {
                    var viewModelChildren = new List<MenuViewModel>();
                    foreach (var child in menuEntity.Children)
                    {
                        viewModelChildren.Add(new MenuViewModel()
                        {
                            Text = child.Name,
                            Url = child.Link?.Slug
                        });
                    }

                    topMenu.Children = viewModelChildren;
                }

                menus.Add(topMenu);
            }
            return menus;
        }
    }
}