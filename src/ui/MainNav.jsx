import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    border-radius: var(--border-radius-sm);
    transition: color 0.3s;
  }

  &:hover {
    color: var(--color-grey-800);
  }

  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
  }

  & svg {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: color 0.3s, transform 0.3s;
  }

  &:hover svg {
    color: var(--color-brand-600);
    transform: scale(1.08);
  }

  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  & span {
    position: relative;
  }
`;

const ActiveBg = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  z-index: 0;
`;

function NavItem({ to, icon, label }) {
  return (
    <li>
      <StyledNavLink to={to}>
        {({ isActive }) => (
          <>
            {isActive && (
              <ActiveBg
                layoutId="activeNav"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {icon}
            <span>{label}</span>
          </>
        )}
      </StyledNavLink>
    </li>
  );
}

function MainNav() {
  return (
    <nav>
      <NavList>
        <NavItem to="/dashboard" icon={<HiOutlineHome />} label="Home" />
        <NavItem
          to="/bookings"
          icon={<HiOutlineCalendarDays />}
          label="Bookings"
        />
        <NavItem
          to="/cabins"
          icon={<HiOutlineHomeModern />}
          label="Cabins"
        />
        <NavItem to="/users" icon={<HiOutlineUsers />} label="Users" />
        <NavItem
          to="/settings"
          icon={<HiOutlineCog6Tooth />}
          label="Settings"
        />
      </NavList>
    </nav>
  );
}

export default MainNav;
