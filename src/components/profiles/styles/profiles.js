import styled, { keyframes } from 'styled-components/macro';

const animation1 = keyframes`
  0%   { color: black; font-size: 100px; }
  25%  { color: #696969; font-size: 90px; }
  50%  { color: #808080; font-size: 80px; }
  100% { color: #fff; font-size: 60px; }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 60px;
  text-align: center;
  font-weight: 500;
  animation-name: ${animation1};
  animation-duration: 0.25s;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 20px;
  &:hover {
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  border-radius: 7px;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover ${Name} {
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
