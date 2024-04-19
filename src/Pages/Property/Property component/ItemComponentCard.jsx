import "./ItemComponentCard.css"

function ItemComponentCard({imgLink}){
    return(
        <div id="item-card" className="box-shadow">
            <section id="img-container">
                <img src={imgLink} alt="image property" srcset="" />
            </section>
            <section id="details-container">
                <h1 style={{fontSize: "4em"}}>Item Title</h1>
                <p style={{fontSize: "1.5em"}} id="price">Price: RMxxx.xx</p>
            </section>
        </div>
    )
}

export default ItemComponentCard