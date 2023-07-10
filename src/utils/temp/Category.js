import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  color: {
    darkPurple: "#352F6E",
    lightPurple: "#ADA8E6",
    backgroundLightGray: "#FBFBFB",
    backgroundGray: "#EFEFEF",
    borderGray: "#E5E6E6",
    gray: "#6C6C6C",
    red: "#DC2D2C",
  },

  fontSize: {
    small: "16px",
    medium: "18px",
    large: "20px",
  },

  fontWeight: {
    thin: "300",
    normal: "400",
    bold: "700",
  },
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #e5e6e6;
  margin-bottom: 40px;
`;
const Title = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e6e6;
`;
const CategoryContainer = styled.div`
  display: flex;
`;

const SubTitle = styled.div`
  width: 80px;
  padding: 20px;
  //background-color: #FBFBFB;
  border-right: 1px solid #e5e6e6;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin : 10px
  width: 100%;
`;

const CheckBox = styled.div`
  width: 50%;
  height: 90%;
  margin: 10px;
  padding: 5px 0 10px 0;
  border: 1.5px solid #e5e6e6;
  border-radius: 10px;
  overflow: scroll;
`;
const Check = styled.input`
  width: 20px;
  height: 20px;
  margin: 5px 7px 5px 10px;
  border: 2px solid #e5e6e6;
  cursor: pointer;
`;
const Label = styled.label`
  display: flex;
  margin: 5px;
  padding: 5px;
  align-items: center;
`;

const Type = styled.div`
  margin-top: 7px;
  font-weight: 700;
  font-size: 16px;
`;
const SelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 90%;
  margin: 10px;
  border: 1px solid #e5e6e6;
  border-radius: 10px;
  overflow: scroll;
`;
const AlertMessage = styled.div`
  color: #6c6c6c;
`;
const SelectedCategory = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 15%;
  margin-top: 15px;

  background-color: #ada8e6;
  border: 1px solid #352f6e;
  border-radius: 5px;
`;
const Selected = styled.div`
  font-size: 16px;
`;
const CancelChecked = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-top: 1px solid #e5e6e6;
  border-bottom: 1px solid #e5e6e6;
`;

const SearchBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 79%;
  height: 75%;
  margin-left: 18px;
  border: 1px solid #e5e6e6;
  border-radius: 10px;
`;

const SearchInput = styled.input`
  width: 85%;
  border-radius: 10px;
  padding: 9px;
`;

const SearchButton = styled.button`
  width: 13%;
  background: none;
  border: 1px solid #352f6e;
  border-radius: 10px;
  padding: 5px 0px;
`;

const ProductNameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid #e5e6e6;
`;

const ProductBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
`;

const ProductSearch = styled.select`
  width: 92%;
  height: 75%;
  border: 1px solid #e5e6e6;
  border-radius: 10px;
  padding-left: 7px;
`;

const ProductCode = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
`;

const Code = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: #fbfbfb;
  border-right: 1px solid #e5e6e6;
`;

const ShowingCode = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const ProductIntro = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  border-bottom: 1px solid #e5e6e6;
`;

const InfoInput = styled.input`
  width: 79%;
  margin-left: 15px;
  padding: 9px;
  border: 1px solid #e5e6e6;
  border-radius: 10px;
`;
const ProductThumbnail = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e6e6;
`;

const AttachedButton = styled.button`
  width: 280px;
  height: 60px;
  margin-left: 15px;
  background: none;
  border: 1px solid #352f6e;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #e5e6e6;
  }
`;
const FileName = styled.div`
  margin: 10px 0 10px 15px;
`;
const Cancel = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
  border-radius: 15px;
  background: none;
  border: 1px solid #e5e6e6;
`;
const ProductImg = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e6e6;
`;

const AttachedBox = styled.div`
  width: 30%;
  height: 90%;
`;
const FileList = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-left: -5px;
`;
const StockContainer = styled.div`
  display: flex;
  align-items: center;
  height: 6.5%;
`;

const StockNum = styled.div`
  margin-left: 20px;
`;

const ContentWrap = styled.div``;

const CATEGORY_LIST = [
  { id: 0, data: "서울특별시" },
  { id: 1, data: "부산광역시" },
  { id: 2, data: "인천광역시" },
  { id: 3, data: "대구광역시" },
  { id: 4, data: "광주광역시" },
  { id: 5, data: "대전광역시" },
  { id: 6, data: "울산광역시" },
  { id: 7, data: "경기도" },
  { id: 8, data: "강원도" },
  { id: 9, data: "충청북도" },
  { id: 10, data: "충청남도" },
  { id: 11, data: "경상북도" },
  { id: 12, data: "경상남도" },
  { id: 13, data: "전라북도" },
  { id: 14, data: "전라남도" },
  { id: 15, data: "제주도" },
];

const CATEGORY_LIST_2 = [
  { id: 20, data: "강남구" },
  { id: 21, data: "강동구" },
  { id: 22, data: "강북구" },
  { id: 23, data: "강서구" },
  { id: 24, data: "관악구" },
  { id: 25, data: "광진구" },
  { id: 26, data: "구로구" },
  { id: 27, data: "금천구" },
  { id: 28, data: "노원구" },
  { id: 29, data: "도봉구" },
  { id: 30, data: "동대문구" },
  { id: 31, data: "동작구" },
  { id: 32, data: "마포구" },
  { id: 33, data: "서대문구" },
  { id: 34, data: "서초구" },
  { id: 35, data: "성동구" },
  { id: 36, data: "성북구" },
  { id: 37, data: "송파구" },
  { id: 38, data: "양천구" },
  { id: 39, data: "영등포구" },
  { id: 40, data: "용산구" },
  { id: 41, data: "은평구" },
  { id: 42, data: "종로구" },
  { id: 43, data: "중구" },
  { id: 44, data: "중랑구" },
];

const PRODUCT_DATA = [
  { id: null, value: "상품을 선택하세요." },
  { id: "0001", value: "알꼬리 300g" },
  { id: "0002", value: "미니샤토 150g" },
  { id: "0003", value: "안심추리 150g" },
  { id: "0004", value: "안심슬라이스 150g" },
  { id: "0005", value: "립아이" },
  { id: "0006", value: "로스 등심 200g" },
  { id: "0007", value: "꽃등심 200g" },
  { id: "0008", value: "채끝 등심 200g" },
];

function ProdBasicInfo() {
  const [checkedList, setCheckedList] = useState([]);
  const [selectedDropValue, setSelectedDropValue] =
    useState("상품을 선택하세요.");

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  const onRemove = (item) => {
    setCheckedList(checkedList.filter((el) => el !== item));
  };
  const handleDropProduct = (e) => {
    const { value } = e.target;
    setSelectedDropValue(PRODUCT_DATA.filter((el) => el.value === value)[0].id);
  };

  return (
    <section2>
      <Wrapper>
        <Title>거주지</Title>
        <CategoryContainer>
          <SubTitle>카 테 고 리</SubTitle>
          <SelectContainer>
            <CheckBox>
              {CATEGORY_LIST.map((item) => {
                return (
                  <Label key={item.id}>
                    <Check
                      type="checkbox"
                      value={item.data}
                      onChange={(e) => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    />
                    <Type>{item.data}</Type>
                  </Label>
                );
              })}
            </CheckBox>
            <CheckBox>
              {CATEGORY_LIST_2.map((item) => {
                return (
                  <Label key={item.id}>
                    <Check
                      type="checkbox"
                      value={item.data}
                      onChange={(e) => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    />
                    <Type>{item.data}</Type>
                  </Label>
                );
              })}
            </CheckBox>
            <SelectedBox>
              {checkedList.length === 0 && (
                <AlertMessage>카테고리를 지정해 주세요.</AlertMessage>
              )}
              {checkedList.map((item) => {
                return (
                  <SelectedCategory key={item}>
                    <Selected>{item}</Selected>
                    <CancelChecked onClick={() => onRemove(item)}>
                      X
                    </CancelChecked>
                  </SelectedCategory>
                );
              })}
            </SelectedBox>
          </SelectContainer>
        </CategoryContainer>
        <FilterContainer>
          <SubTitle>필터 태그</SubTitle>
          <SearchBar>
            <SearchInput placeholder="필터태그를 검색해 주세요." />
            <SearchButton>검색</SearchButton>
          </SearchBar>
        </FilterContainer>
        <ProductNameContainer>
          <SubTitle>상품명 *</SubTitle>
          <ProductBar>
            <ProductSearch onChange={handleDropProduct}>
              {PRODUCT_DATA.map((el) => {
                return (
                  <option defaultValue="123" key={el.id}>
                    {el.value}
                  </option>
                );
              })}
            </ProductSearch>
          </ProductBar>
          <ProductCode>
            <Code>상품 코드</Code>
            <ShowingCode>{selectedDropValue}</ShowingCode>
          </ProductCode>
        </ProductNameContainer>
        <ProductIntro>
          <SubTitle>상품 구성 소개 정보 *</SubTitle>
          <InfoInput placeholder="상품 구성 소개 정보를 입력해 주세요." />
        </ProductIntro>
        <ProductThumbnail>
          <SubTitle>상품 썸네일</SubTitle>
          <ContentWrap></ContentWrap>
        </ProductThumbnail>
        <ProductImg>
          <SubTitle>상품 대표 이미지</SubTitle>
        </ProductImg>
        <StockContainer>
          <SubTitle>상품 총 재고*</SubTitle>
          <StockNum>[NN개]</StockNum>
        </StockContainer>
      </Wrapper>
    </section2>
  );
}

export default ProdBasicInfo;
