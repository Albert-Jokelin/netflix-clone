import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-tems: center;
    flex-direction: ${({ direction }) => direction}
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px){
        flex-direction: column;
    }
`;