import { CDN_URL } from "../utils/constant";
const ResCard = ({ restaurant }) => {

    const { info: { cloudinaryImageId, name, costForTwo, avgRating, cuisines, locality, sla } } = restaurant



    return (
        <><div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-img" />
            <div className="res-details">
                <h3>{name}</h3>
                <div className="rating-time">
                    <h4>{avgRating}<span>  {sla.slaString}</span></h4>
                </div>
                <p>{cuisines.join(",")}</p>
                <p>{costForTwo}</p>
                <p>{locality}</p>
            </div>
        </div>

        </>
    );
};
export default ResCard;