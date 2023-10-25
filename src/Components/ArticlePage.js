import React from "react";
import "./ArticlePage.css";
import leftArticleImage from "./Media/leftArticleImage.png"


const ArticlePage = () => {
    
    return (

    <div className="ArticlePage">
            <h1 className="ArticlePage-heading">Daily Insights, Airdrop threads, daily...</h1>
            <div className="topics-container">
                <div className="topics">
                    <button className="topics-btn"><p>Analysis</p></button>
                    <button className="topics-btn"><p>Defi</p></button>
                    <button className="topics-btn"><p>Guides</p></button>
                    <button className="topics-btn"><p>NFTs</p></button>
                    <button className="topics-btn"><p>Ethereum</p></button>
                    <button className="topics-btn"><p>Opinion</p></button>
                    <button className="topics-btn"><p>How Tos</p></button>
                    <button className="topics-btn"><p>Investing</p></button>
                    <button className="topics-btn"><p>Bitcoin</p></button>
                </div>
            </div>
            <div className="article-container">
                <div className="article-container-left">

                    <p className="article-header">Written by <span className="writer-name">Kartik</span> • 0 day ago • 9 min read</p>
                    <img src={leftArticleImage} className="leftArticleImage" />
                    <h2 className="article-title">Vela Airdrop</h2>
                    <p className="article-desc">Trade on Vela Exchange, the next-generation decentralized trading platform</p>
                    <div className="article-footer">
                        <button className="tags"><p className="tags-content">Airdrop</p></button>
                        <button className="tags"><p className="tags-content">Paid</p></button>
                    </div>

                </div>
                
                <div className="article-container-right">
                    
                    <div className="first-row">
                        <div className="article-box">

                        </div>
                        <div className="article-box">
                            
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="article-box">
                            
                        </div>

                        <div className="article-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    )

}

export default ArticlePage;