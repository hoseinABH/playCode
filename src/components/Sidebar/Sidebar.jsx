import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from './Sidebar.style';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu onClick={toggle}>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/services">Services</SidebarLink>
          <SidebarLink to="/starwars">Starwars</SidebarLink>
          <SidebarLink to="/signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={toggle} to="/signin">
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
