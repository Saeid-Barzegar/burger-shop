import React, {useState,useEffect}from 'react';
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import image_1 from "../assets/images/slide_1.jpg";
import RateComponent from "./shopList/RateComponent";
import OptionComponent from "./shopList/OptionComponent";
import Slider from "./Slider";

const Vergleich = ({shopList, fetchShopList}) => {

    const [showDetails, setShowDetails] = useState(false)
    const [selectedShop, setSelectedShop] = useState({})


    function shopSelection(id){
        let shop = shopList.filter((shop, index)=> index === id)
        setSelectedShop(shop[0])
        setShowDetails(true)
    }

    useEffect(()=>{
        fetchShopList()
    }, [fetchShopList])

    return(
         <React.Fragment>
            <Slider image={image_1} title="Now try a burger with organic meat" />
            <span className="title">Compare your burger shops</span>

            {shopList ?
            <ul className="list">
                {
                    shopList.map((shop, index)=> 
                    <li key={index}>
                        <RateComponent rate={shop.rating}/>
                        <span className="shopName">{shop.name}</span>
                        <OptionComponent name="Classic Burger" value={shop.burger_classic}/>
                        <OptionComponent name="Cheese Burger" value={shop.burger_cheese}/>
                        <OptionComponent name="Bio" value={shop.burger_bio}/>
                        <span className="address" onClick={()=> shopSelection(index)}>Address {shop.address}<i className="fa fa-map-marker"></i></span>
                    </li>)
                }
            </ul>
            : <h1 className="red">Loading Data from server...</h1>
            }

            <a href="https://localhost:3000" className="bottomLink orange">
                <i className="fa fa-cloud-download" ></i>
                <span>Get more burger shops</span>
            </a>
            {
                showDetails && selectedShop && <div className="detailsBox">
                                    <i 
                                    className="fa fa-times-circle pointer" 
                                    onClick={()=> setShowDetails(false)}></i>
                                    <div className="details">
                                        <span className="name"><strong>{selectedShop.name}</strong></span>

                                        <div className="address">
                                            <p>{selectedShop.street}</p>
                                            <p>{selectedShop.zip}, {selectedShop.city}</p>
                                        </div>

                                        <a href={selectedShop.website}>Website</a>
                                    </div>
                                </div>
            }
            <div className="footer"></div>
        </React.Fragment>
        
    )
};

const mapStateToProps = state=>({
    shopList: state.shop.shopList
})

const mapDispatchToProps = dispatch =>({
    fetchShopList: ()=> dispatch(actionCreator.fetchShopList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Vergleich);
