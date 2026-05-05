import styled from "styled-components";
import { motion } from "framer-motion";

const DashboardBox = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  whileHover: { y: -2, transition: { duration: 0.15 } },
  transition: { duration: 0.4, ease: "easeOut" },
}))`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1.6rem;
  }
`;

export default DashboardBox;
