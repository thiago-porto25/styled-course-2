import styled from 'styled-components';

export default function Card() {
  return (
    <Wrapper>
      <img
        src="https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160"
        alt="product"
      />
      <footer>
        <h4>Product Name</h4>
        <p>$16</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 90vw;
  max-width: 300px;
  background-color: var(--white);
  border-radius: 0.25rem;
  margin: 4rem auto;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 3px #666;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 0.25rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: inherit;
    padding: 0 2rem;

    &:hover {
      background-color: red;
    }

    h4 {
      text-transform: capitalize;

      &::before {
        content: 'Name : ';
        color: red;
      }
    }

    p {
      color: blue;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;
