import React from "react";
import Banner from "../assets/img/banner.jpg";

export default () => {
    return (
        <div>
            <div className="w-full bg-cover bg-center lg:h-web h-mobile" style={{backgroundImage: `url(${Banner})`}}>
                <div className="flex justify-center items-center w-full h-full text-white
                text-4xl lg:text-6xl font-semibold header-fade-in invisible">
                    동탄가정심리상담소
                </div>
            </div>
        </div>
    )
}
