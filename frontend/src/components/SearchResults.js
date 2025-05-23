/* http://localhost:3000/search-results */

import React from "react";
import TopMenu from "./TopMenu";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
    return (
        <div className={styles.resultsContainer}>

            <div className={styles.mainFrame}>
                <div className={styles.menu}>
                    <TopMenu/>
                </div>
            
                <div className={styles.topMainFrame}> 
                    <div className={styles.topFrame1}>
                        <div className={styles.leftSquare}>
                            <div className={styles.vehicleTitle}>Camry LE</div>
                            <div className={styles.carDetailsRow}>
                                <div className={styles.carMake}>Toyota</div>
                                <div className={styles.carYear}>2009</div>
                            </div>
                            <div className={styles.suggestionText}>Suggestions:</div>

                            <div className={styles.suggestionGrid}>
                                <div>Oil Change</div>
                                <div>Brake Pads</div>
                                <div>Tire Rotation</div>
                                <div>Battery</div>
                                <div>Air Filter</div>
                                <div>Coolant</div>
                                <div>Belts</div>
                                <div>Transmission</div>
                                <div>Wipers</div>
                            </div>
                        </div>

                        <div className={styles.rightSquare}>
                            <div className={styles.selectCarText}>Select Car: </div>
                            <div className={styles.carDetailsRow2}>
                                <div className={styles.selectCarYear}>2009</div>
                                <div className={styles.selectCarMake}>Toyota</div>
                                <div className={styles.selectCarModel}>Camry</div>
                                <div className={styles.selectCarEngineSizeAndTrim}>2.4 LE</div>

                            </div>
                            <div className={styles.repairmentsForText}>Repairments for: </div>
                            < div className={styles.repairmentRow}>
                                <div className={styles.repairmentForDescription}>AC Filter, Only cold when driving </div>
                                <button className={styles.repairmentSearchButton}>Search</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.topFrame2}>
                    
                    < div className={styles.topFrame2Row}>

                            {/*Problem Header */}
                            <div className={styles.problemHeader}>AC Filter</div>
                            {/*Link for user to add their quote */}
                            <div className={styles.addYourQuoteHeader}>
                            Want to share your quotes? <span className={styles.underlined}>Add yours!</span>
                            </div>
                            </div>
                    </div>

                    <div className={styles.resultInfoFrame}>
                        <div className={styles.resultInfoRow}>
                            <div className={styles.avgCost}>Avg Cost: </div>
                            <div className={styles.avgCostText}>
                                <span className={styles.underlined}>65 USD</span>
                                </div>

                                <div className={styles.areaZipcode}>
                                Area Zip Code: <span className={styles.underlined}>90805</span>
                                </div>
                        </div>

                        < div className={styles.resultsscrollRow}>
                            <div className={styles.prices}>Prices </div>
                            <div className={styles.store}>Store </div>
                            <div className={styles.customerRatings}>Customer Ratings </div>
                        </div>

                        <div className={styles.columnContainer}>
                                <div className={styles.column}>
                                    <div>65</div>
                                    <div>70</div>
                                    <div>80</div>
                                    <div>65</div>
                                    <div>70</div>
                                    <div>80</div>
                                    <div>65</div>
                                    <div>70</div>
                                    <div>80</div>
                                    </div>
                                    <div className={styles.column}>
                                    <div>AutoZone</div>
                                    <div>Jiffy Lube</div>
                                    <div>Meineke</div>
                                    <div>AutoZone</div>
                                    <div>Jiffy Lube</div>
                                    <div>Meineke</div>
                                    <div>AutoZone</div>
                                    <div>Jiffy Lube</div>
                                    <div>Meineke</div>
                                    </div>
                                    <div className={styles.column}>
                                    <div>4.5</div>
                                    <div>4.1</div>
                                    <div>3.9</div>
                                    <div>4.5</div>
                                    <div>4.1</div>
                                    <div>3.9</div>
                                    <div>4.5</div>
                                    <div>4.1</div>
                                    <div>3.9</div>
                                    </div>


                        </div>
                    </div>
                    
                    < div className={styles.rightSquareForMap}>
                        < div className={styles.mapContainer}>
                            <h1>Map Container</h1>

                        </div>

                    </div>

                </div>
                <div className={styles.bottomFrame}>
                    <div className={styles.commentsContainer}>
                        
                        <div className={styles.commentsContainerHeader}>
                        <h1>Comments</h1>
                        </div>

                        <div className={styles.commentsContainer2}>
                        {/* Comments content goes here */}
                        </div>

                    </div>
                    </div>

            </div>
            <p>Search Results Component</p>
        </div>
    );
}

export default SearchResults;
