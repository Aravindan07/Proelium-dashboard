import React, { useState } from 'react';
import {
    Wrapper,
    Header,
    MenuIconDiv,
    H2,
    ContentWrapper,
    CardWrapper,
    Card,
    BigCard,
    HeadingPara,
    CardContent,
    Div1,
    Content,
    Line,
    Div2,
    ChartWrapper,
    BigChartWrapper,
    Navigation,
    Anchor,
} from './styles';
import { ReactSVG } from 'react-svg';
import MenuIcon from '../assets/images/menu.svg';
import BlueArrow from '../assets/images/blue_arrow.svg';
import GreenArrow from '../assets/images/green_arrow.svg';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';

export default function DashBoard() {
    const initialState = [
        {
            id: 1,
            name: 'Today',
            clicked: false,
        },
        {
            id: 2,
            name: 'Month',
            clicked: false,
        },
        {
            id: 3,
            name: 'Year',
            clicked: false,
        },
    ];
    const [ClickedData, setClicked] = useState(initialState);

    const clickHandler = (id) => {
        const newData = ClickedData.map((element) => {
            if (element.id === id) {
                const updatedData = {
                    ...element,
                    clicked: !element.clicked,
                };
                return updatedData;
            }

            return element;
        });
        setClicked(newData);
    };
    return (
        <>
            <Wrapper>
                <Header>
                    <MenuIconDiv>
                        <ReactSVG src={MenuIcon} />
                    </MenuIconDiv>
                    <H2>Analysis DashBoard</H2>
                    <Navigation>
                        {ClickedData.map((e) => (
                            <Anchor
                                clicked={e.clicked}
                                onClick={() => clickHandler(e.id)}
                                key={e.id}
                            >
                                {e.name}
                            </Anchor>
                        ))}
                    </Navigation>
                </Header>
                <ContentWrapper>
                    <CardWrapper>
                        <Card>
                            <Header headerType='card'>
                                <HeadingPara>Chemical Consumption</HeadingPara>
                            </Header>
                            <CardContent cardType='test'>
                                <Div1>
                                    <Content>
                                        140 <br />
                                        <span>Litres</span>
                                    </Content>
                                </Div1>
                                <Line />
                                <Div2>
                                    <Content divSide='right'>
                                        7.8% <br />
                                        <span>Lesser Than Yesterday</span>
                                    </Content>
                                </Div2>
                                <ReactSVG src={BlueArrow} />
                            </CardContent>
                        </Card>
                        <Card>
                            <Header headerType='card'>
                                <HeadingPara>Expenses</HeadingPara>
                            </Header>
                            <CardContent cardType='test'>
                                <Div1>
                                    <Content>
                                        1330 <br />
                                        <span>$</span>
                                    </Content>
                                </Div1>
                                <Line />
                                <Div2>
                                    <Content divSide='right'>
                                        7.8% <br />
                                        <span>Lesser Than Yesterday</span>
                                    </Content>
                                </Div2>
                                <ReactSVG src={GreenArrow} />
                            </CardContent>
                        </Card>
                        <Card>
                            <Header headerType='card'>
                                <HeadingPara>Average Flow Discharge</HeadingPara>
                            </Header>
                            <CardContent chartAvail='chart'>
                                <ChartWrapper>
                                    <LineChart />
                                </ChartWrapper>
                            </CardContent>
                        </Card>
                    </CardWrapper>
                    <BigCard>
                        <Header headerType='card'>
                            <HeadingPara>Consumption Comparison</HeadingPara>
                        </Header>
                        <CardContent marginTop='yes'>
                            <BigChartWrapper>
                                <BarChart />
                            </BigChartWrapper>
                        </CardContent>
                    </BigCard>
                </ContentWrapper>
            </Wrapper>
        </>
    );
}
