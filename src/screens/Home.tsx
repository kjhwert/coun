import React from "react";
import Center from "../assets/img/center.jpg";
import Process1 from "../assets/icon/process1.png"
import Process2 from "../assets/icon/process2.png"
import Process3 from "../assets/icon/process3.png"
import Process4 from "../assets/icon/process4.png"
import fields from "../data/fields";
import profiles from "../data/profiles";

const process = [
    {
        title : '초기면담',
        img : Process1,
        content: '처음오시는 분들의 필수과정으로 사전 면담과정의 초기 상담을 하게 됩니다.'
    },
    {
        title : '심리검사',
        img : Process2,
        content : '상담자가 필요하다고 판단할 때에는 심리검사를 실시할 수 있습니다.'
    },
    {
        title : '심리치료',
        img : Process3,
        content : '고백에 대한 공감과 피드백을 통한 회복, 치료, 변화의 과정으로 나아 갑니다'
    },
    {
        title : '상담종결',
        img : Process4,
        content : '만족할만한 시점이 오면 종결 계획을 세우고 일정기간 상담후 종결하게 됩니다'
    },
];

const container = "flex flex-col lg:w-web mx-auto";
const introduce = "flex flex-col lg:flex-row lg:pt-10";

export default () => {
    return (
        <div className={container}>
            <div className={introduce}>
                <div className="lg:w-1/2 lg:self-center lg:py-0 py-6 px-4">
                    <h1 className="font-semibold text-lg">
                        동탄가정심리상담소는<br/>
                        당신의 벗이 되어드리고 싶습니다.
                    </h1><br/>
                    <p className="text-sm">
                        저희 동탄가정심리상담소는 동탄에서 가장 오래된 상담소로서
                        창립 이래 많은 분들에게 희망을 주고 새로운 삶을 찾아 활기찬 미래를 열어가는데 함께했으며
                        앞으로도 초심을 잃지 않는 진실한 마음으로 상담소의 역할에 충실할 것을 약속 드립니다.<br/><br/>

                        상담은 어떤 문제만이 있어서 받는 것은 아닙니다.
                        내면의 성장이 이루어질 때 진정한 자기를 찾고 자기주체의 삶을 살아 갈수 있는 것이므로
                        자아실현은 건강한 자아가 건강한 자신을 살아갈 수 있게 되는 것이고
                        상담은 그러한 자기를 살아 갈 수 있도록 돕는 역할을 하는 것입니다.<br/><br/>

                        저희 기관은 불안,공포,갈등으로 인해 혼돈스러운 내면의 문제들을 함께 나누며
                        삶이 의미있고 행복한 미래를 열어 갈 수 있도록 돕고자 합니다.
                    </p>
                </div>
                <img src={Center} className="w-full lg:w-1/2"/>
            </div>
            <h3 className="px-4 pt-6 lg:pt-12 lg:text-xl font-semibold text-lg">
                이용안내
            </h3>
            <div className="w-full flex flex-wrap lg:my-4">
                {process.map((item, idx)=> (
                        <div className="w-1/2 lg:w-1/4 p-4 flex flex-col items-center" key={idx}>
                            <img src={item.img} alt="image" className="w-24"/>
                            <span className="text-sm lg:text-lg text-center">{item.title}</span>
                            <p className="text-xs lg:mt-2 mt-1 lg:text-sm lg:w-4/6 text-center">{item.content}</p>
                        </div>
                    )
                )}
            </div>
            <h3 className="px-4 pt-6 font-semibold text-lg lg:pt-12 lg:text-xl">
                상담분야
            </h3>
            <div className="flex overflow-x-scroll lg:overflow-auto lg:flex-wrap w-full py-2 lg:justify-center">
                {fields.map((item, idx)=> {
                    return (
                        <div className="w-1/2 lg:w-1/6 bg-white shadow-lg flex flex-col border border-main-100
                                        justify-start items-center flex-shrink-0 h-48 mx-2 mt-2 mb-4 cursor-pointer"
                             style={{'borderRadius':'15px'}} key={idx}
                             onClick={()=> {}}
                        >
                            <div style={{width:'140px', height:'140px'}} className="flex items-center">
                                <img src={item.img} alt="img" className="w-full h-30"/>
                            </div>
                            <span className="text-center text-sm lg:text-lg">{item.name}</span>
                        </div>
                    )
                })}
            </div>
            <h3 className="px-4 pt-6 font-semibold text-lg lg:pt-12 lg:text-xl">
                프로필
            </h3>
            <div className="w-full mt-4 flex flex-wrap px-4">
                {profiles.map((item, idx)=> {
                    return (
                        <div className="w-1/2 lg:w-1/3 lg:h-310 flex items-center flex-col" key={idx}>
                            <img src={item.img} alt="profile" className="w-3/6 rounded-full cursor-pointer" onClick={()=>{}}/>
                            <span className="mt-4">{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
