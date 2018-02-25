using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AkSpa.Models;
using AKSpa.DataModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AkSpa.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly SignInManager<AkUser> _signInManager;
        public AccountController(SignInManager<AkUser> signInManager)
        {
            _signInManager = signInManager;
        }
        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult> Login([FromBody] LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, true, lockoutOnFailure: false);

                if (result.Succeeded)
                {
                    return Json(new { success = true });
                }
                if (result.IsLockedOut)
                {
                    return Json(new { success = true, message = "Utlåst" });
                }
            }
            return Json(new { success = false, message = "Inloggning misslyckades" });
        }
        [Route("Logout")]
        public async Task<ActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Redirect("/");
        }
    }
}