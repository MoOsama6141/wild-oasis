import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const EmptyText = styled.p`
  animation: ${fadeIn} 0.4s ease-out both;
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-grey-500);
  padding: 2rem 0;
`;

function Empty({ resourceName }) {
  return <EmptyText>No {resourceName} could be found.</EmptyText>;
}

export default Empty;
