import { timeout } from "./timeout";



export const scrollAnimation = async (scrollRef, domElement) => {
  if (!scrollRef) {
    return;
  }
  let scrollInitialPosition = window.pageYOffset;
  let scrollElePosition
  if (domElement) {
    scrollElePosition = scrollRef?.offsetTop;
  } else {
    scrollElePosition = scrollRef?.current?.offsetTop;
  }
  if (!scrollElePosition) {
    return;
  }

  let iBrake = 0;
  let scrollBreakDivider = 0;

const scrollDifference=scrollElePosition-scrollInitialPosition
let isDown
if(scrollDifference>0){
isDown=true
}else{
  isDown=false
}
if(isDown){
    while (scrollInitialPosition < scrollElePosition) {
    iBrake++;
    await timeout(15);
    window.scrollTo(0, scrollInitialPosition);

    const scrollRemain = parseFloat(
      (
        -(scrollInitialPosition - scrollElePosition) / scrollElePosition
      ).toFixed(2)
    );
    const scrollAdvanced = parseFloat(
      (
        1 -
        (scrollElePosition - scrollInitialPosition) / scrollElePosition +
        0.1
      ).toFixed(2)
    );

    if (scrollRemain == 0.0) {
      break;
    }

    if (scrollAdvanced < 0.5) {
      scrollBreakDivider = scrollAdvanced * scrollElePosition * 0.1
      scrollInitialPosition += scrollBreakDivider;
    } else {
      scrollBreakDivider = scrollRemain * scrollElePosition * 0.1
      scrollInitialPosition += scrollBreakDivider;
    }

    if (iBrake > scrollElePosition || iBrake > 1000) {
      break;
    }
  }
}else{
  while (scrollInitialPosition > scrollElePosition) {
    iBrake++;
    await timeout(15);
    window.scrollTo(0, scrollInitialPosition);

    const scrollRemain = parseFloat(
      (
        -(scrollInitialPosition - scrollElePosition) / scrollElePosition
      ).toFixed(2)
    );
    const scrollAdvanced = parseFloat(
      (
        1 -
        (scrollElePosition - scrollInitialPosition) / scrollElePosition +
        0.1
      ).toFixed(2)
    );

    if (scrollRemain == 0.0) {
      break;
    }

    if (scrollAdvanced < 0.5) {
      scrollBreakDivider = scrollAdvanced * scrollElePosition * 0.1
      scrollInitialPosition += scrollBreakDivider;
    } else {
      scrollBreakDivider = scrollRemain * scrollElePosition * 0.1
      scrollInitialPosition += scrollBreakDivider;
    }

    if (iBrake > scrollElePosition || iBrake > 1000) {
      break;
    }
  }
}

};