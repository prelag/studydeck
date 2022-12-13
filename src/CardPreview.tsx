import React from "react";

export interface Card {
    term: string
    definition: string
    id: string
}

export interface CardPreviewProps {
    card: Card
}

export const CardPreview = (props: CardPreviewProps) => {
    const [isFront, setIsFront] = React.useState(true)

    const handleCardFlip = () => {
        setIsFront(current => !current);
    }

    return (
        <div className={`tile ${isFront ? '' : 'back'}`}>
            <h4 className="cardTerm">{isFront ? props.card.term : props.card.definition}</h4>
            <div className="cardButtons">
                <button type="button" className="tertiary" onClick={handleCardFlip}>
                    {isFront ? 'Show Back' : 'Show Front'}
                </button>
                <div>
                    <button type="button" className="secondary">Edit</button>
                </div>
                <button type="button" className="secondary danger">Delete</button>
            </div>
        </div>
    );
}
