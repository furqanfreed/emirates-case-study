import styles from "./FlightCarrier.module.scss"

export default function FlightCarrier({parentStyles, flight}) {
    return (
        <div className={`${parentStyles.cardSections} ${styles.carrierDetails}`}>
            <img className={styles.flightCarrierFlag} src="/flightCarrier.svg" alt="flight carrier flag" />
            <div className={styles.lineSeparator}>
                <img className={styles.flightCarrierFlag} src="/flight-from-icon.svg" alt="flight from" />        
                <div className={styles.line}></div>
                <img className={styles.flightCarrierFlag} src="/flight-destination-icon.svg" alt="flight destination" />
            </div>    
            <p className={styles.flightCarrierDetails} aria-hidden="true">
                {` ${flight.operatorCode} ${flight.flightNumber} / ${flight.plane}`}
            </p>
        </div>  
    ) 
}