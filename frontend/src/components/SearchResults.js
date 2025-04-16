

import React from "react";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
    return (
        <div className={styles.resultsContainer}>
            <div className={styles.mainFrame}>
            <h4>main Frame</h4>
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
                            <div className={styles.addYourQuoteHeader}>Want to share your quotes? Add yours!</div>
                            </div>
                    </div>
                    <div className={styles.resultInfoFrame}>
                    <h4>ressult Info Frame</h4>
                    </div>
                </div>
            </div>
            <p>Search Results Component</p>
        </div>
    );
}

export default SearchResults;
