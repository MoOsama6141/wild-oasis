import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export default TableOperations;
