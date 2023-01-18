import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import styles from './Slider.module.scss';
import Slide from '../../features/Slide/Slide';
import { sliderItems } from '../../../state/data';
import { useState } from "react";

// styled components

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${ (props) => props.slideIndex * -100}vw);
`

// slider component

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)
  
  const handleClick = (direction) => { 
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.arrow_left} onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide 
            key={item.id} 
            item={item}
            />
        ))}
      </Wrapper>

      <div className={styles.arrow_right} onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>

    </div>
  )
}

export default Slider 
 