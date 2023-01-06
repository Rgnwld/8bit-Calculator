import styled, { css } from 'styled-components';

export const color = {
    c0: '#0C0D04',
    c1: '#252601',
    c2: '#565902',
    c3: '#888C03',
    c4: '#D2D904',
    c5: '#EAF205',
};

export const AppMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color.c0};

    height: 100vh;
    width: 100vw;

    color: ${color.c5};

    * {
        font-family: 'Press Start 2P', cursive;
    }
`;

export const CalcBoundaries = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 8px;
    border: solid 1px ${color.c5};
    padding: 1rem;

    background-color: ${color.c1};
`;

export const Topside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: solid 1px ${color.c5};
    background-color: ${color.c1};
`;

export const ResultBlock = styled.input`
    display: flex;
    width: 15rem;
    height: 3rem;

    border-radius: 2px;
    border: none;
    background-color: transparent;

    padding: 0%;
    margin: 0;
    outline: none;
    color: ${color.c5};
    font-size: 1.5em;

    text-align: end;
`;

export const Bottomside = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ButtonsHolder = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    gap: 1rem;
`;

export const FunctionsHolder = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
`;

export const ClickableButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 2px;
    border: solid 1px ${color.c5};

    min-height: 3rem;
    min-width: 3rem;

    cursor: pointer;
    ${(args) => {
        if (args?.rowsize)
            return css`
                grid-column: ${args.rowsize?.start} / ${args.rowsize?.end + 1};
            `;
    }}
`;
