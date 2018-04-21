using System.Collections.Generic;
using System.Threading.Tasks;
using AkSpa.Models;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AkSpa.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly SignInManager<AkUser> _signInManager;
        private readonly UserManager<AkUser> _userManager;
        public AccountController(SignInManager<AkUser> signInManager, UserManager<AkUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }
        [HttpPost]
        [Route("Login")]
        public async Task<JsonResult> Login([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid) return Json(new {success = false, message = "Inloggning misslyckades"});

            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, true, false);

            if (result.Succeeded)
            {
                return Json(new { success = true });
            }
            if (result.IsLockedOut)
            {
                return Json(new { success = true, message = "Utlåst" });
            }
            return Json(new { success = false, message = "Inloggning misslyckades" });
        }
        [Route("Logout")]
        public async Task<ActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Redirect("/");
        }

        [Route("AccountInfo")]
        public async Task<JsonResult> AccountInfo()
        {
            var loggedIn = User.Identity.IsAuthenticated;
            if (!loggedIn) return Json(new {loggedin = false});
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var roles = await _userManager.GetRolesAsync(user);
            return Json(new {loggedin = true, name = User.Identity.Name, roles});
        }
    }
}