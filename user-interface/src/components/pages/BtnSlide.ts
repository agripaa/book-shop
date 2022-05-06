import React from 'react'
import { SSRProviderProps } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';

interface PropsType {
  children: JSX.Element
  name: string
}

enum Direction {
  next,
  prev
}

type SlideOnDirection = keyof typeof Direction;

declare namespace BtnSlide {
  function Slider(PropsType: SlideOnDirection): string
  function Prev({ Direction, moveSlide }) {

  }
  let prevSlideIndex: string;
}


export default BtnSlide;