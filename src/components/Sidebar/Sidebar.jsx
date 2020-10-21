import React from 'react';
import { useSpring, animated } from 'react-spring';
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
  const animation = useSpring({
    config: {
      duration: 1000,
    },
  });

  return (
    <animated.div style={animation}>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu onClick={toggle}>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/services">Services</SidebarLink>
            <SidebarLink to="/contact-us">Contact Us</SidebarLink>
            <SidebarLink to="/signup">Sign Up</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute onClick={toggle} to="/signin">
              Sign In
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </animated.div>
  );
};

export default Sidebar;
