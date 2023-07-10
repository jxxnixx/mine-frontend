import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { memo, useCallback, useEffect, useState } from "react";
import { LeftArrow, RightArrow } from "react-arrows";
import styled, { createGlobalStyle } from "styled-components";
import Item from "../../utils/scrollComponents/Items";
import Loader from "../../utils/scrollComponents/Loader";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }
  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: center;
  align-items: left;
  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: left;
    text-align: center;
    align-items: left;
  }
`;

const SecondProject = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {itemLists.map((v, i) => {
            return <Item number={i + 1} key={i} />;
          })}
          <div ref={setTarget} className="Target-Element">
            {isLoaded && <Loader />}
          </div>
        </ScrollMenu>
      </AppWrap>
    </>
  );
};

export default memo(SecondProject);
