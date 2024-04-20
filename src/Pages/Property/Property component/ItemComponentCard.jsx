import "./ItemComponentCard.css"

function ItemComponentCard({imgLink}){
    return(
        <div id="item-card" className="box-shadow">
            <section id="img-container">
                <img src={imgLink} alt="image property" srcset="" />
            </section>
            <section id="details-container">
                <h1>Item Title</h1>
                <span id="price">Price: RMxxx.xx</span>
            </section>
        </div>
    )
}

export default ItemComponentCard