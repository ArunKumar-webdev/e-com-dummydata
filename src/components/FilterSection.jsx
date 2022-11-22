import styled from "styled-components";
import { Button } from "../styles/Button";

const FilterSection = ({ search, setSearch, handleSearch, handleReset, handleFilter, categoryOptions, sortBy }) => {

  return (
    <Wrapper>
      <div className="filter-search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            handleSearch(e.target.value)
          }
          }
        />
        <div className="filter-clear">
          <Button className="btn" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
      <div>
        <label style={{ fontWeight: '700', fontSize: '18px' }}>Sort By Price</label>
        <select style={{
          marginTop: '10px', color: '#212529', padding: '1.6rem 2.4rem', border: '1px solid rgba(98,84,243,0.5)',
          boxShadow: 'rgb(0 0 0 / 16%) 0px 1px 4px'
        }}
          className="filter-search" defaultValue='' onChange={sortBy}>
          <option hidden value="">Select Sort Type</option>
          <option value='Low-High'>Low-High</option>
          <option value='High-Low'>High-Low</option>
        </select>
      </div>

      <div className="filter-category">
        <h3 className="smfilterlistheader" style={{ fontWeight: '700' }}>Category</h3>
        <div className="smfilterlist">
          {categoryOptions.map((curElem, index) => {
            return (
              <button
                key={index}
                id={'button' + curElem}
                type="button"
                value={curElem}
                onClick={(e) => handleFilter(e.target.value)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>




    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }  
`;

export default FilterSection;