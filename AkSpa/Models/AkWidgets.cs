using System.Collections;
using System.Collections.Generic;

namespace AkSpa.Models
{
    public class MenuViewModel
    {
        public string Text { get; set; }
        public string Url { get; set; }
        public IEnumerable<MenuViewModel> Children { get; set; }
    }
}
