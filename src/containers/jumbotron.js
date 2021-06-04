import React from "react";
import jumboData from "../fixtures/jumbo.json"
import { Jumbotron } from "../components"
import '../components/jumbotron/styles/stylesheet.css'
import boxshot from '../boxshot.png'


export function JumbotronContainer() {

  const renderVideo = (item) => {
    if(item.id === 3){
      return (
        <div class="jumbotron">
            <video id="video-background" autoPlay playsInline muted loop>
              <source src={item.video} type='video/mp4' />
            </video>
          <div class="container">
            <Jumbotron.Images src={item.image} alt={item.alt}/>
          </div>
        </div>
      )
    }
    else if(item.id === 1){
      return (
        <div class="jumbotron">
            <video id="video-background-a" autoPlay playsInline muted loop>
              <source src={item.video} type='video/mp4' />
            </video>
          <div class="container">
            <Jumbotron.Images src={item.image} alt={item.alt}/>
          </div>
        </div>
      )
    }
    else if(item.id === 2){
      return(
        <div class="new-jumbotron">
          <img class="myImg" src={item.image} alt={item.alt}/>
          <div class="download-animation">
            <img class="boxshot" alt='boxshot' src={boxshot}/>
            <div class="download-animation-text">
              <div id class="text-0" data-uia>Stranger Things</div>
              <div id class="text-1" data-uia>Downloading...</div>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (<Jumbotron.Image src={item.image} alt={item.alt} />);
    }
  }
  return (
    <Jumbotron.Container>
      {jumboData.map((item) =>
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          {renderVideo(item)}
        </Jumbotron>
      )}
    </Jumbotron.Container>
  );
}
