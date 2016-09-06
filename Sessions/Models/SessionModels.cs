using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sessions.Models
{
    public class SessionModels
    {
        public int id { get; set; }
        public string title { get; set; }
        public int sessionLevel { get; set; }
        public bool approved { get; set; }
    }
}