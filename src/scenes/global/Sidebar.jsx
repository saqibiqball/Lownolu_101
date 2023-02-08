import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import { menu } from "../../menu";
import styled from "styled-components";

const Item = ({ title, to, icon, selected, setSelected, items }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const Menuitem = styled(MenuItem)`
    position: relative;
    display: block;
    background: ${(props) => props.active && `${colors.greenAccent[600]}`};
    ${(props) =>
      props.active &&
      `:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      background: ghostwhite;
      right: -14px;
      top: 50%;
      transform: translate(0, -50%) rotate(45deg);
    }`};
  `;
  const Submenu = styled(SubMenu)`
    position: relative;
    display: block;
    background: ${(props) => props.active && `${colors.greenAccent[600]}`};
    ${(props) =>
      props.active &&
      `:after {
      background: ${colors.greenAccent[600]}
    }`};
  `;
  return (
    <>
      {items ? (
        <>
          <Submenu
            active={selected === title}
            title={title}
            style={{
              background: `${colors.primary[400]} !important`,
              color: colors.grey[400],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            rootStyles={{
              
            }}
          >
            {items.map((item) => (
              <Menuitem
                style={{
                  color: colors.grey[400],
                }}
                onClick={() => setSelected(item.title)}
                icon={item.icon}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Link to={item?.to} />
              </Menuitem>
            ))}
          </Submenu>
        </>
      ) : (
        <Menuitem
          active={selected === title}
          style={{
            color: colors.grey[400],
          }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography variant="h4">{title}</Typography>
          <Link to={to} />
        </Menuitem>
      )}
    </>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 0px 5px 0px !important",
        },
      }}
    >
      <ProSidebar style={{ position: "static" }}>
        <Box sx={{ paddingTop: "34px" }}></Box>
        <Menu iconShape="square">
          {menu.map((item, key) => (
            <Item
              key={key}
              title={item.title}
              to={item.to}
              icon={item.icon}
              selected={selected}
              setSelected={setSelected}
              items={item.items}
            />
          ))}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
