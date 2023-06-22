
import PropTypes from "prop-types";
import "./FlightCard.css"



const FlightCard = ({numerLotu, przylot, odlot, data, godzina, terminal}) => {

   
    

  return (
    
    <div className='airlines'>
      
        <div className='plan'>
            
            <h1>Numer lotu: {numerLotu}</h1>
            
                <li>Przylot: {przylot}</li>
                <li>odlot: {odlot}</li>
                <li>data: {data}</li>
                <li>godzina: {godzina}</li>
                <li>terminal: {terminal}</li>
        </div>
    </div>
  )
}

// FlightCard.propTypes = {
//     numerLotu: PropTypes.oneOf(["LOT123", "LOT456", "LOT789"]),
//     przylot: PropTypes.oneOf(["Nowy Jork", "Paryż", "Tokio"]),
//     odlot: PropTypes.oneOf(["Londyn", "Sydney", "Warszawa"]),
//     data: PropTypes.oneOf(["2023-06-24","2023-06-23", "2023-06-25"  ]),
//     numerLotu: PropTypes.oneOf(["LOT123", "LOT456", "LOT789"])
// }

export default FlightCard
