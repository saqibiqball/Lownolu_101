import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ListIcon from "@mui/icons-material/List";
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SpaIcon from '@mui/icons-material/Spa';
export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Dashboard",
    name:"Dashboard",
    to: "/",
  },
  {
    icon: <SettingsIcon />,
    title: "Settings",
    name:"Settings List",
    to: "/settings",
  },
  {
    icon: <PersonIcon />,
    title: "Customer Management",
    name:"Customer List",
    to: "/customermanagement",
  },
  {
    icon: <PersonIcon />,
    title: "Business Management",
    name:"Business List",
    to: "/businessmanagement",
  },
  {
    icon: <MenuIcon />,
    title: "Master",
    name:"",
    to: "/contacts",
    items: [
      {
        icon: <HomeIcon/>,
        title: "Type of Home",
        name:"",
        to: "/",
      },
      {
        icon: <HomeIcon/>,
        title: "Job Service",
        name:"",
        to: "/",
      },
    ],
  },
  {
    icon: <LocalAtmIcon />,
    title: "Membership Plan",
    name:"Membership Plan List",
    to: "/membershipPlan",
  },
  {
    icon: <ListIcon />,
    title: "Business Zipcode Plan",
    name:"",
    to: "/form",
  },
  {
    icon: <LocalAtmIcon />,
    title: "Location Plan",
    name:"",
    to: "/calendar",
  },
  {
    icon: <ListIcon />,
    title: "Location Plan Payment",
    name:"",
    to: "/pie",
  },
  {
    icon: <LocalAtmIcon />,
    title: "Featured Plan",
    name:"",
    to: "/line",
  },
  {
    icon: <ListIcon />,
    title: "Featured Business Plan",
    name:"",
    to: "/geography",
  },
  {
    icon: <MenuIcon />,
    title: "CMS",
    name:"",
    to: "/faq",
    items: [
        {
          icon: <MenuIcon/>,
          title: "CMS",
          name:"",
          to: "/",
        },
        {
          icon: <HomeIcon/>,
          title: "Privacy Policy",
          name:"",
          to: "/",
        },
        {
          icon: <QuestionMarkIcon/>,
          title: "FAQ",
          name:"",
          to: "/faq",
        },
        {
          icon: <HomeIcon/>,
          title: "Video",
          name:"",
          to: "/",
        },
        {
          icon: <HomeIcon/>,
          title: "How It Works \n Customer",
          name:"",
          to: "/",
        },
        {
          icon: <HomeIcon/>,
          title: "How It Works \n Business",
          name:"",
          to: "/",
        },
      ],
  },
  {
    icon: <HandshakeIcon />,
    title: "Promotions",
    name:"",
    to: "/geography",
  },
  {
    icon: <StarIcon />,
    title: "Reviews",
    name:"",
    to: "/geography",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "Booking",
    name:"",
    to: "/geography",
  },
  {
    icon: <ThumbDownIcon />,
    title: "Report",
    name:"",
    to: "/geography",
  },
  {
    icon: <SpaIcon />,
    title: "Chat Report",
    name:"",
    to: "/geography",
  },
];
