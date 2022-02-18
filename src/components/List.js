import styled, { css } from 'styled-components';

const fruits = ['orange', 'apple', 'banana', 'peach'];

const products = [
  { id: 1, name: 'chair', price: 30 },
  { id: 2, name: 'bed', price: 150 },
  { id: 3, name: 'couch', price: 550 },
];

const Wrapper = styled.div``;

const FruitItem = styled.li`
  list-style-type: none;

  ${(p) =>
    p.odd
      ? css`
          color: #fff;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `}
`;

const ProductItem = styled.li`
  list-style-type: none;

  article {
    width: 300px;
    background: #fff;
    padding: 1rem;
    border-radius: 0.25rem;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      text-transform: capitalize;
    }

    p {
      color: ${({ price }) => {
        if (price < 100) return 'green';
        if (price > 500) return 'red';
        return '#000';
      }};
    }
  }
`;

export default function List() {
  return (
    <Wrapper>
      <ul>
        {fruits.map((item, index) => (
          <FruitItem odd={(index + 1) % 2 !== 0} key={index}>
            {item}
          </FruitItem>
        ))}
      </ul>
      <h3>Product Example</h3>
      <ul>
        {products.map((item) => (
          <ProductItem price={item.price} key={item.id}>
            <article>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </article>
          </ProductItem>
        ))}
      </ul>
    </Wrapper>
  );
}
