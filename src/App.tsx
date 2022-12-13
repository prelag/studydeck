import React from 'react';
import './App.css';
import './normalize.css';
import {CardPreview, Card} from "./CardPreview";
import {getCards} from "./services/CardService";

function App() {
    const [cards, setCards] = React.useState<Card[]>([]);

    React.useEffect(() => {
        getCards()
            .then(setCards)
    }, [])

    return (
        <div>
            <header>
                <h1>Study<span className="titleHighlight">Deck</span></h1>
                <h2>Retention through repitition</h2>
            </header>
            <main>
                <h3>Your Cards</h3>
                <div className="gridContainer">
                    {cards.map(card => (<CardPreview key={card.id} card={card}/>))}
                </div>
            </main>
        </div>
    );
}

export default App;
