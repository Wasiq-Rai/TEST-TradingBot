import React from 'react';
import Section from '@/components/Section/Section';
import Background from '@/components/Background/Background';

const AboutUs = () => {
    return (



        <div className="trading-bot banner-bg">

            <Background>

            </Background>
            <h1>Trading Bot</h1>
            <Section
                title="NSDAQ Market"
                content={
                    <>
                        The stock market is the basis of the world's economy, acting as an important source of investment, wealth creation, and economic growth. This huge financial ecosystem is a major factor in determining the financial landscape. With trillions of dollars moved every day across international exchanges, the stock market's vast number of transactions and money at risk is huge. By using modern deep learning models, we want to increase market efficiency. These algorithms will examine the market data to find complex patterns and trends that could otherwise go unnoticed.        </>
                }
                image="/img/images/about-us-logo.png"
            />
            <div class="separator"></div>

            <Section
                title="Trading"
                content={
                    <>
                        We combine multiple deep learning models, each with distinct advantages and forecasting abilities, to create accurate predictions of the closing price of different stocks and analysis of the market. We improve the precision of our trading decision-making by this fusion technique in which, every model identifies the stock market patterns individually and when we combine the predictions taken place on different dimensional analysis of historical data of market, the overall results make more accurate predictions.        </>
                }
                image="/img/images/about-us-chart.png"
            />
            <div class="separator"></div>
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>About</h3>
                        <p>Our Trading Bot will be Best.</p>
                    </div>
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <p>Email: FA20-BCS-076@cuilahore.edu.pk</p>
                        <p>Email: FA20-BCS-001@cuilahore.edu.pk</p>
                        <p>Email: FA20-BCS-004@cuilahore.edu.pk</p>
                        <p>Phone: +92-3068852579</p>
                    </div>
                    <div class="footer-section">
                        <h3>Social</h3>
                        <a href="#">Facebook</a><br />
                        <a href="#">Twitter</a><br />
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Trading Bot. All rights reserved.</p>
                </div>
            </footer>

        </div>

    );
};

export default AboutUs;