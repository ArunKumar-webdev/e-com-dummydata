import styled from "styled-components";
import Product from "./Product";

const ProductGridView = ({ products, ProductGet, UpdateProduct, ProductDelete }) => {

  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <div>
            <Product key={curElem.id} {...curElem} ProductGet={ProductGet} UpdateProduct={UpdateProduct} ProductDelete={ProductDelete} />
            {/* <div>
              <button onClick={() => UpdateProduct(curElem.id)} style={{ backgroundColor: "green", border: 'none', borderRadius: '5px', color: 'white', width: '100px' }}>Edit</button>
              <button onClick={() => ProductDelete(curElem.id)} style={{ backgroundColor: "#ec7063", marginLeft: '5px', border: 'none', borderRadius: '5px', color: 'white', width: '100px' }}>Delete</button>
            </div> */}
          </div>

        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transition: all 0.5s ;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.5s ;
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default ProductGridView;
