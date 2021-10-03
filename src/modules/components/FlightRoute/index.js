import styles from "./FlightRoute.module.scss"
import { useState, useEffect } from "react"
import actionGetFilghts from "../../actions/actionGetFilghts";
import FlightInformation from "../FlightInformation";
import FlightCarrier from "../FlightCarrier";


/**
 * 
 * Flight Listing
 */
const FlightDetails =  ({flight,onSelectFlight,isSelected}) => (
    <li data-testid="flight-item" className={`${styles.item} ${isSelected ? styles.selected : null}`}>
        <div className={styles.flightCard}>
            <FlightInformation 
                parentStyles={styles} 
                flight={flight} 
                toOrFromClass={styles.departure}
                toOrFrom="from"
                />
            <FlightCarrier 
                parentStyles={styles}
                flight={flight}
                />
            <FlightInformation 
                parentStyles={styles} 
                flight={flight}
                toOrFromClass={styles.arrival}  
                toOrFrom="to"
                />
            <button
                className={styles.selectFlightBtn}
                onClick={onSelectFlight}
                disabled={isSelected}
                data-testid="book-flight"
                >
                Select Flight
            </button>
        </div>
        
    </li>
)

/**
 * 
 * Flight Card
 */
export default function FlightRoute() {
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null)

    useEffect(()=>{
        // it will invoke after the component mounted, once
        getFlights()
    },[])

    const getFlights = async () => {
        const data = await actionGetFilghts()
        if(data?.length) setFlights(data)
    }

    const handleFlightSelection = (flight) => {
        setSelectedFlight(flight)
    }

    return(
        <div className={styles.container}>
            <ul aria-label="flight details">
                {flights.map((flight) => (
                    <FlightDetails
                        key={flight.flight}
                        flight={flight}
                        isSelected={selectedFlight?.id === flight.id}
                        onSelectFlight={() => handleFlightSelection(flight)}
                    />
                ))}
            </ul>
        </div>
    )
}