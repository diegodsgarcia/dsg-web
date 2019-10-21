import React, { useEffect } from 'react'

import { isDarkTheme } from '../../utils/theme'

import * as S from './styled'

function Canvas() {

  useEffect(() => {
    executeCanvas()
  }, [])

  return (
    <S.Wrapper>
      <canvas id="space"></canvas>
    </S.Wrapper>
  )
}

function executeCanvas() {
  let requestAnimFrame = (
    function(){   
      return  window.requestAnimationFrame}
    )();

  let canvas = document.getElementById("space");
  let c = canvas.getContext("2d");

  let numStars = 1900;
  let radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
  let focalLength = canvas.width *2;
  let warp = 0;
  let centerX, centerY;

  let stars = [], star;
  let i;

  let animate = true;

  initializeStars();

  function executeFrame(){
    if(animate)
      requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
  }

  function initializeStars(){
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    
    stars = [];
    for(i = 0; i < numStars; i++){
      star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: '0.'+Math.floor(Math.random() * 99) + 1
      };
      stars.push(star);
    }
  }

  function moveStars(){
    for(i = 0; i < numStars; i++){
      star = stars[i];
      star.z--;
      
      if(star.z <= 0){
        star.z = canvas.width;
      }
    }
  }

  function drawStars(){
    let pixelX, pixelY, pixelRadius;
    
    // Resize to the screen
    if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
    }
    if(warp==0) {
      const backgroundColor = isDarkTheme() ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)';
      c.fillStyle = backgroundColor;
      c.fillRect(0,0, canvas.width, canvas.height);
    }
      c.fillStyle = `rgba(209, 255, 255, ${radius})`;
      
    for(i = 0; i < numStars; i++){
      star = stars[i];
      const starColor = isDarkTheme() ? `rgba(209, 255, 255, ${star.o})` : `rgba(0, 0, 0, ${star.o})`;
      
      pixelX = (star.x - centerX) * (focalLength / star.z);
      pixelX += centerX;
      pixelY = (star.y - centerY) * (focalLength / star.z);
      pixelY += centerY;
      pixelRadius = 1 * (focalLength / star.z);
      
      c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      c.fillStyle = starColor;
    }
  }

  executeFrame();
}


export default Canvas
