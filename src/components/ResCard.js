
import { CDN_URL } from "../utils/constant";

const ResCard = ({ restaurant }) => {
    const {
        info: { cloudinaryImageId, name, costForTwo, avgRating, cuisines, locality, sla, aggregatedDiscountInfoV3 }


    } = restaurant;
    const { header = "", subHeader = "" } = aggregatedDiscountInfoV3 ?? {};

    return (
        <div className="res-card m-4 p-4 w-[250px] h-[450px] shadow-2xl relative item">
            <img className="res-logo h-[250] " src={CDN_URL + cloudinaryImageId} alt="res-img" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h4 className="font-extrabold start-1">{header}{"  "}{subHeader}</h4>
            </div>
            <div className="res-details  m-2">
                <h3 className="font-bold text-lg">{name}</h3>
                <h4 className="font-bold">
                    {"⭐ "}{avgRating}{"."} <span>{sla.slaString}</span>
                </h4>
                <h4 className="overflow-hidden whitespace-nowrap">
                    {cuisines.join(", ")}
                </h4>

                <h4>{costForTwo}</h4>  <h4>{locality}</h4>
            </div>

        </div>

    );
};

export default ResCard;
