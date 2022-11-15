import React from 'react';
import c from "./Main.module.css";
import { Container } from '../../utils';
import MainCard from '../main-card/MainCard';
import allCards from '../../dummy-data.json'

const Main = () => {
  return (
    <Container>
      <main className={c.main}>
        <div className={c.wrapper}>
            {
              allCards.map(cardItem =>
                <MainCard 
                image={cardItem.cardImage} 
                title={cardItem.title} 
                linkURL={cardItem.linkURL} 
                linkText={cardItem.linkLabel}/>  
              )
            }
        </div>
      </main>
    </Container>
  )
}

export default Main