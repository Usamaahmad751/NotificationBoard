using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NotificationBoardUet.Models
{
    public class Bike
    {
        public int Id { get; set; }

        [Required]
        public string BikeName { get; set; }
        
        [Required]
        public int Fare { get; set; }

        [Required]
        public string BikeDescription { get; set; }
        public Boolean OnRent { get; set; }

        [Required]
        public int  MobileNumber { get; set; }

        [BindProperty]
        public string ImagePath { get; set; }


    }
}
