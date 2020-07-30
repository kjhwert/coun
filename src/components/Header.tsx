import React, {useEffect, useState} from "react";
import {Home, Book, Gallery, Youtube} from "../assets/icon/Svgs"
const {innerWidth} = window;

const mContainer = 'fixed w-full justify-center bottom-0 flex z-10 border-t border-main-200 h-12 bg-white';
const mIcon = 'w-1/6 flex justify-center items-center';
const mReserveBtn = 'w-16 h-10 text-white rounded-full text-xs shadow-2xl focus:outline-none ' +
    'bg-main-400 flex justify-center items-center';

const wContainer = 'z-20 fixed flex top-0 mt-10 h-16 bg-white rounded-full items-center justify-between pl-10 pr-4 border border-main-300';
const wReserveBtn = 'w-32 h-10 text-white rounded-full text-sm shadow-2xl focus:outline-none bg-main-400 ' +
    'flex justify-center items-center';

const focusedText = {color:'#333333', fontWeight:"bold"};
const deFocusedText = {color:'#d1d1d1'};

const homeHeight = 0;
const talkHeight = 400;
const galleryHeight = 600;
const interviewHeight = 800;

export default () => {
    const [focused, setFocused] = useState([true, false, false, false]);

    const handleFocused = (y: number) => {
        if (y >= interviewHeight)
            return setFocused([false, false, false, true]);

        if(y >= galleryHeight)
            return setFocused([false, false, true, false]);

        if(y >= talkHeight)
            return setFocused([false, true, false, false]);

        return setFocused([true, false, false, false]);
    }

    const handleScroll = () => {
        const height = window.pageYOffset;
        console.log(height);
        handleFocused(height);
    }

    const moveScroll = (y: number) => {
        handleFocused(y);
        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    }

    const isMobile = () => {
        return innerWidth < 1024;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive : true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
     <>
         {isMobile() ?
             (
                 <div className={mContainer}>
                     <div className={mIcon} onClick={()=>{moveScroll(homeHeight)}}>
                         <Home color={focused[0] ? "#333333" : "#d1d1d1"} />
                     </div>
                     <div className={mIcon} onClick={()=>{moveScroll(talkHeight)}}>
                         <Book color={focused[1] ? "#333333" : "#d1d1d1"} />
                     </div>
                     <div className="w-2/6 flex justify-center items-center">
                         <button className={mReserveBtn}>상담예약</button>
                     </div>
                     <div className={mIcon} onClick={()=>{moveScroll(galleryHeight)}}>
                         <Gallery color={focused[2] ? "#333333" : "#d1d1d1"} />
                     </div>
                     <div className={mIcon} onClick={()=>{moveScroll(interviewHeight)}}>
                         <Youtube color={focused[3] ? "#333333" : "#d1d1d1"} />
                     </div>
                 </div>
             ) :
             (
                 <div className={wContainer} style={{width:'70%', left: '50%', transform: 'translateX(-50%)'}}>
                     <div className='flex items-center'>
                         <span>LOGO</span>
                         <ul className='ml-10'>
                             <li className='inline mr-4 cursor-pointer'
                                 style={focused[0] ? focusedText : deFocusedText}
                                 onClick={()=>{moveScroll(homeHeight)}}
                             >HOME</li>
                             <li className='inline mr-4 cursor-pointer'
                                 style={focused[1] ? focusedText : deFocusedText}
                                 onClick={()=>{moveScroll(talkHeight)}}
                             >TALK</li>
                             <li className='inline mr-4 cursor-pointer'
                                 style={focused[2] ? focusedText : deFocusedText}
                                 onClick={()=>{moveScroll(galleryHeight)}}
                             >GALLERY</li>
                             <li className='inline cursor-pointer'
                                 style={focused[3] ? focusedText : deFocusedText}
                                 onClick={()=>{moveScroll(interviewHeight)}}
                             >INTERVIEW</li>
                         </ul>
                     </div>
                     <button className={wReserveBtn}>상담예약</button>
                 </div>
             )
         }
     </>
    )
}
