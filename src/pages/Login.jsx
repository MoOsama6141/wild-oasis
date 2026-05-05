import styled from "styled-components";
import { motion } from "framer-motion";

import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled(motion.main)`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 48rem);
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 2rem 1.6rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Login() {
  return (
    <LoginLayout variants={containerVariants} initial="hidden" animate="show">
      <motion.div variants={itemVariants}>
        <Logo />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Heading as="h4">Log in to your account</Heading>
      </motion.div>
      <motion.div variants={itemVariants}>
        <LoginForm />
      </motion.div>
    </LoginLayout>
  );
}

export default Login;
