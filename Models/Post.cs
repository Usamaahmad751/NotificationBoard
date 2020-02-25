using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NotificationBoardUet.Models
{
    public class Post
    {

        public int Id { get; set; }

        [Required]
        public string PostTitle { get; set; }

        [Required]
        public string PostDesctiption { get; set; }

        public string Comment { get; set; }

        public Boolean Like { get; set; }

        public DateTime Time { get; set; }
        [BindProperty]
        public string ImagePath { get; set; }
        public Boolean Approved { get; set; }
    }
}
