import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1024px) {
    grid-row: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 26rem;
    max-width: 80vw;
    height: 100vh;
    z-index: 100;
    transform: translateX(${(props) => (props.$open ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    box-shadow: var(--shadow-lg);
    overflow-y: auto;
  }
`;

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar $open={isOpen}>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
