﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace AKSpa.DataModel
{
    public class AkUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Adress { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Nation { get; set; }
        public string Instrument { get; set; }
        public string SlavPoster { get; set; }
        public string Medal { get; set; }
        public string GivenMedal { get; set; }
        public string OtherInstruments { get; set; }
        public bool HasKey { get; set; }

        public virtual ICollection<IdentityUserRole<string>> Roles { get; } = new List<IdentityUserRole<string>>();

        public string GetName()
        {
            if (string.IsNullOrWhiteSpace(FirstName) && string.IsNullOrWhiteSpace(LastName))
            {
                return UserName;
            }

            return FirstName + " " + LastName;
        }
    }
    
}

