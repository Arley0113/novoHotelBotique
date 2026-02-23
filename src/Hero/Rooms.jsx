import RoomsCard from "../components/RoomsCard";
import {rooms} from "../data/rooms";
import "./Rooms.css";


export default function Rooms() {
  return (
    <section id="rooms" className="rooms-section">
        <h1>Nuestras Habitaciones</h1>
        <div className="rooms-grid">
             {rooms.map((room) => (
                <RoomsCard key={room.id} 
                img={room.img} 
                title={room.title} 
                price={room.price} 
                descripcion={room.descripcion}/>
             ))}
            </div>

    </section>
  )
}

