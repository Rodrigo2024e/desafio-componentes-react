import carImg from '../../assets/car-card 1.png'

import './styles.css'

export default function CardsCar (){
    return (
        <div className="card-container">
            <img src={carImg} alt="Cars" />
            <p>Lorem, ipsum dolor.</p>
        </div>

    )
}