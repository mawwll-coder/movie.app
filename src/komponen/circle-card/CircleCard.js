import'./CircleCard.styled.css'

const CircleCard = (props) => {
    return<div className="circle-card">
        <img src = {props.img} alt="cat"/>
        <small>ayam</small>
        <h2 className="circle-card-title">{props.title}</h2>
        <div style={{color : "green", fontSize: "10px"}}>Rp 100.000</div>
        <button style={{
        backgroundColor: "green",
        border: "none", 
        color: "#fff",
        borderRadius: "12px",
        padding: "5px",
        marginTop: "20px",
        }}
        onClick={props.setCart(1)}
        > + Add to cart</button>
    </div>
}

export default CircleCard