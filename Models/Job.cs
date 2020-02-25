using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NotificationBoardUet.Models
{
    public class Job
    {
      
        public int Id { get; set; }
        [Required]
        public string JobTitle { get; set; }

        [Required]
        public string JobDescription { get; set; }
       
        [BindProperty]
        public string ImagePath { get; set; }

        [Required]
        public DateTime Time { get; set; }

        [Required]
        public string Technologies { get; set; }

    }
}
