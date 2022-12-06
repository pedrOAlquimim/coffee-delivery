import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["base-card"]};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const FormHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  span {
    font-size: 1.375rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  div {
    gap: 0.125rem;

    h4 {
      font-weight: 400;
      font-size: 1rem;

      color: ${(props) => props.theme["base-title"]};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`

export const FormTag = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }
  
  .complement {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .cep {
      max-width: 100%;
    }
  }
`