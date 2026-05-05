import styled from "styled-components";
import { HiBars3 } from "react-icons/hi2";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    padding: 1.2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    gap: 1rem;
  }
`;

const MenuButton = styled(ButtonIcon)`
  display: none;

  @media (max-width: 1024px) {
    display: inline-flex;
    margin-right: auto;
  }

  & svg {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

function Header({ onMenuClick }) {
  return (
    <StyledHeader>
      <MenuButton onClick={onMenuClick} aria-label="Open menu">
        <HiBars3 />
      </MenuButton>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
