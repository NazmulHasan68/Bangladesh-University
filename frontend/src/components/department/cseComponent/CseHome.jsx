import React from 'react';
import HomeSlider from './PartComponent/HomeSlider';
import HomeSecondPart from './PartComponent/HomeSecondPart';
import HomeNotice from './PartComponent/HomeNotice';
import HomeHighlight from './PartComponent/HomeHighlight';


export default function CseHome() {

  return (
    <div className='mt-10 md:mt-20  '>
        <HomeSlider/>
        <HomeSecondPart/>
        <HomeNotice/>
        <HomeHighlight/>
    </div>
  );
}
