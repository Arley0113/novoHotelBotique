import React, { useState } from "react";
import { gallery } from "../data/gallery";
import "./Gallery.css"





export default function Gallery() {
    const [selected, setSelected] = useState(null)
    return (
        <section className="gallery-section">
            <h2>Galeria</h2>
            <div className="mosaico">
                {gallery.map((item) => (
                    <img
                        key={item.id}
                        src={item.url}
                        alt={`Foto ${item.id}`}
                        className="thumb"
                        onClick={() => setSelected(item.url)}
                    />
                ))}
            </div>
            {selected && (
                <div className="lightbox" onClick={() => setSelected(null)}>
                    <img src={selected} alt="Ampliada" className="lightbox-img" />
                    <span className="close">&times;</span>
                </div>
            )}
        </section>


    );
}