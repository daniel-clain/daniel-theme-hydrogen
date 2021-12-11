import React from 'react';



const Accordion = () => {
  return (
    <accordion>
      {slides.map(slide => 
        <slide onClick={slide.isOpen ? slide.close : slide.open}></slide>
      )}
    </accordion>
  )
}