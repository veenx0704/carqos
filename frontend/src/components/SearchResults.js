import React from "react";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
    return (
        <div className={styles.resultsContainer}>
            <div className={styles.mainFrame}>
            <h4>main Frame</h4>
                <div className={styles.topMainFrame}> 
                    <div className={styles.topFrame1}>
                        <div className={styles.leftSquare}></div>
                            {/*Vehicle Title*/}
                            <div className={styles.vehicleTitle}>Camry LE</div>
                        <div className={styles.rightSquare}></div>
                    </div>
                    <div className={styles.topFrame2}>
                        
                        {/*Problem Header */}
                        <div className={styles.problemHeader}>AC Filter</div>
                        {/*Link for user to add their quote */}
                        <div className={styles.addYourQuoteHeader}>Want to share your quotes? Add yours!</div>
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
