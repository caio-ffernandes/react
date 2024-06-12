import React from "react";


function Mapa(){
    return(
        <main>
            <h1>Mapa | Page</h1>
            <LinkMapa />
        </main>
    )
}
function LinkMapa(){
    return(
    <iframe src="https://www.google.com/maps/embed?pb=!4v1694612515109!6m8!1m7!1sGiORPyzVoMJ4gEd0Z6CVLw!2m2!1d-22.21067580927089!2d-51.29877327410093!3f329.0081907783508!4f-26.733122451258048!5f0.7820865974627469" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
)}
export default Mapa;