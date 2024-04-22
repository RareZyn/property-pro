import "./ItemComponentCard.css"

function ItemComponentCard({imgLink}){
    return(
        <div id="item-card">
            <section id="img-container">
                <img src={imgLink} alt="image property" srcset="" />
            </section>
            <section id="details-container">
                <h1>Agriculture land at Gua Musang</h1>
                <span id="row-1">Gua Musang, Kelantan</span>
                <span id="row-2">Price : RM 162,300,000</span>
                <span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>
            </section>
        </div>
    )
}

export default ItemComponentCard