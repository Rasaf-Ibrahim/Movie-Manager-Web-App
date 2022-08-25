export default function responsiveSpacing (space) {
   

    const halfPixel= 0.0625
    const fourPixel = 0.5

    const multiplierOfFourPixel = Math.floor(space/fourPixel)

    const increase = multiplierOfFourPixel*halfPixel
   

    return (
        {xs:space, sm:space+(increase*1), md:space+(increase*2), lg:space+(increase*3), xl:space+(increase*3)}
       )
} 


/* According to the above code, 

if the space is responsiveSpacing(0.5) or 4px, then multiplierOfFourPixel will be Math.floor(4/fourPixel)=1 & the increase will be (1*halfPixel)=0.5px. And on xs the space will be 4px, on sm the space will be 4px+(0.5)*1px = 4.5px, on lg the space will be 4px+(0.5)*2px = 5px, on xl the space will be 4px+(0.5)3*px = 5.5px



if the space is responsiveSpacing(1) or 8px, then multiplierOfFourPixel will be Math.floor(8/fourPixel)=2px & the increase will be (2*halfPixel)=1px. And on xs the space will be 8px, on sm the space will be 8px+(1)*1px = 9px, on lg the space will be 8px+(1)*2px = 10px, on xl the space will be 8px+(1)*3px = 11px


if the space is responsiveSpacing(1.25) or 10px, then multiplierOfFourPixel will be Math.floor(10/fourPixel)=2px & the increase will be (2*halfPixel)=1px. And on xs the space will be 10px, on sm the space will be 10px+(1)*1px = 11px, on lg the space will be 10px+(1)*2px = 12px, on xl the space will be 10px+(1)*3px = 13px

*/