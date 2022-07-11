import { createContext, useContext, useState } from 'react';
import initialCards from './App';

//Step 1: create context
const CardContext = createContext();


export function CardProvider({ children }) {
    const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);


  const stateAndSetters = {
      deck, setDeck,
      playerOneHand, setPlayerOneHand,
      selectedCard, setSelectedCard,
      playerTwoHand, setPlayerTwoHand,
      playerThreeHand, setPlayerThreeHand,
      from, setFrom,
      to, setTo,
  };


}

return <CardContext.Provider>
    {children}
</CardContext.Provider>



//step 3: this function returns useContext call
export function useCardContext() {
  return useContext(CardContext);
}