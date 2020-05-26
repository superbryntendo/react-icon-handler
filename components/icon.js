import React from 'react'
import styled from 'styled-components'

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  fill: none;
  overflow: visible !important;
  stroke-width: 2px;
  stroke-linecap: round;

`;

export const SvgWrapper = styled.div`
  display: inline-block;
  width: ${props => props.size ? `${props.size}px` : '32px'};
  height: ${props => props.size ? `${props.size}px` : '32px'};
  min-height: ${props => props.size ? `${props.size}px` : '32px'};
  min-width: ${props => props.size ? `${props.size}px` : '32px'};
  flex: 0 0 ${props => props.size ? `${props.size}px` : '32px'};
  position: relative;
  color: inherit;
`;

const Glyph = ({glyph, strokeOne, strokeTwo}) => {
  
  const Path = ({d, fallback}) => {
    
    function strokeColor() {
      if(strokeOne) {
        return strokeOne
      } 
        
      if(fallback) {
        return fallback;
      }

      return `#AAA`
    }

  return(
    <path d={d} stroke={strokeColor()} />
  )}

  const PathTwo = ({d, fallback}) => {

    function strokeColor() {
      if(strokeTwo) {
        return strokeTwo
      }

      if(strokeOne) {
        return strokeOne
      }
        
      if(fallback) {
        return fallback;
      }

      return `#666`
    }

    return(
      <path d={d} stroke={strokeColor()} />
    )
  }

  switch (glyph) {
    case 'equipment':
    default:
      return(
        <>
        <Path d="M16 11C11.5817 11 8 11.8954 8 13C8 14.1046 11.5817 15 16 15C18.3109 15 20.7774 14.8611 23.0052 14.116C23.7102 13.8803 24.4952 14.3765 24.4154 15.1156C23.9501 19.4295 21.519 23 16 23C10 23 8 18.1046 8 17M22 24.5C22 24.5 19.4999 26 16 26C12.5 26 10.5 24.5 10.5 24.5" fallback="#FFC700" />
        <PathTwo d="M19 11L24.2031 4.19597C24.9524 3.21614 26.4648 4.19645 25.8763 5.28051L22.5 11.5" fallback="#F408FE" />
        </>
      )
    case 'instagram':
      return (
        <>
          <Path d="M4.032 18C4.32218 26.2724 6.70581 28 16 28C23.0012 28 26.081 27.0197 27.2986 23M11.416 18C12.1876 19.7659 13.9497 21 16 21C16.3425 21 16.6769 20.9656 17 20.9" fallback="#FF8A00" />
          <Path d="M11.416 14C12.1876 12.2341 13.9497 11 16 11C18.7614 11 21 13.2386 21 16C21 16.7111 20.8516 17.3875 20.584 18M4.03201 14C4.20916 8.9499 5.1665 6.33891 8 5.07108M27.968 14C27.99 14.6282 28 15.2942 28 16C28 17.093 27.9761 18.0903 27.9205 19" fallback="#FA1157" />
          <Path d="M27.5511 10C26.5388 5.13968 23.5488 4 16 4C14.4915 4 13.165 4.04551 12 4.15714M22 9H22.01" fallback="#AD00FF" />
        </>
      )
    case 'archive':
      return(
        <>
          <Path d="M25 12V25H7V12M14 16H18M5 7H27V12H5V7Z" fallback="rgba(255, 255, 255, 0.35" />
        </>
      )
    case 'check-fill':
      return(
        <>
          <Path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="white"/>
          <Path d="M11 16.0068L13.9952 19L21 12" fallback="white" stroke-width="1.5" />
        </>
      )
    case 'check-path':
      return(
        <> 
          <Path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="white" fallback="#666"/>
        </>
      )
  }
};

export default function Icon ({onClick, glyph, size, strokeOne, strokeTwo, active, ...rest}) {

    return (
      <SvgWrapper
        className={'icon'}
        onClick={onClick}
        size={size}
        {...rest}
      >
        <InlineSvg
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          xmlns="http://www.w3.org/2000/svg"
          ariaLabelledby="title"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMinYMin"
          fit
          id={glyph}
          strokeOne={strokeOne}
          strokeTwo={strokeTwo}
        >
          <title>{glyph}</title>
          <Glyph glyph={glyph} strokeOne={strokeOne} strokeTwo={strokeTwo} />
        </InlineSvg>
      </SvgWrapper>
    );
}