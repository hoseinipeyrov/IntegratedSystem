﻿using System.Collections.Generic;

namespace ViewModels
{
    public class Settings
    {
        public string AppTitle { get; set; }
        public string ToolbarTitle { get; set; }
        public List<Menus> Menus { get; set; }
    }

    public class Menus
    {
        public string Title { get; set; }
        public List<MenuItems> MenuItems { get; set; }
    }

    public class MenuItems
    {
        public string Title { get; set; }
        public string Link { get; set; }
        public bool Status { get; set; }
        public string Icon { get; set; }
    }
}
