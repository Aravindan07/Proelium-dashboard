import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #deebf5;
    letter-spacing: 1.6px;
`;

export const Header = styled.div`
    height: 50px;
    width: 100%;
    background: #4473c5;
    color: #ffffff;
    display: flex;
    align-items: center;
    border-radius: ${(props) => (props.headerType === 'card' ? '5px' : 'unset')};
`;

export const MenuIconDiv = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 10px 20px 0px 40px;
    svg {
        width: 40px;
        height: 50px;
        color: #ffffff;
        cursor: pointer;
    }
`;

export const H2 = styled.h2`
    text-transform: uppercase;
    margin: 0;
`;

export const ContentWrapper = styled.div`
    width: calc(100% - 20px);
    height: calc(100% - 70px);
    margin: 10px auto;
    display: flex;
    flex-direction: column;
`;

export const CardWrapper = styled.div`
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 32.7%;
    height: 260px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const BigCard = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 10px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const HeadingPara = styled.div`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    margin: auto;
`;

export const CardContent = styled.div`
    /* height: calc(100% - 90px); */
    height: ${(props) => (props.chartAvail === 'chart' ? 'calc(100%-80px)' : 'calc(100%-90px)')};
    padding: ${(props) => (props.cardType === 'test' ? '0px 20px' : 'unset')};
    display: flex;
    /* margin: 20px 0px; */
    margin: ${(props) =>
        props.chartAvail === 'chart'
            ? '10px 0px'
            : props.marginTop === 'yes'
            ? '40px 0px 0px 0px'
            : '20px 0px'};
    svg {
        margin-top: 40px;
    }
`;

export const Div1 = styled.div`
    width: 40%;
    text-align: center;
    margin: auto;
    font-size: 32px;
    font-weight: bold;
    color: #548134;
    span {
        color: #000000;
        font-size: 20px;
    }
`;

export const Line = styled.div`
    width: 1px;
    height: 170px;
    background: #d2d2d2;
`;

export const Div2 = styled.div`
    width: 60%;
    margin: auto;
    color: #548134;
    font-size: 32px;
    font-weight: bold;
    span {
        color: #000000;
        font-size: 20px;
        text-align: center;
    }
`;

export const Content = styled.div`
    width: ${(props) => (props.divSide === 'right' ? 'fit-content' : '100%')};
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ChartWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const BigChartWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Navigation = styled.div`
    width: 300px;
    background: #5a9bd5;
    position: absolute;
    right: 200px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    justify-content: space-between;
`;

export const Anchor = styled.div`
    text-decoration: none;
    border-radius: 25px;
    width: 100px;
    height: 40px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${(props) => (props.clicked ? '#ffffff' : 'unset')};
    color: ${(props) => (props.clicked ? '#4473c5' : '#ffffff')};
`;
