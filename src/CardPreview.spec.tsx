import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import { CardPreview, CardPreviewProps, Card} from "./CardPreview";
import exp from "constants";

it('Renders the expected term', () => {
    const expectedCard: Card = {
            term: "test",
            definition: "test def",
            id: "test id"
    };

    render(<CardPreview card={expectedCard} />);

    expect(screen.getByText(expectedCard.term)).toBeInTheDocument();
})

it('Flips the card to reveal the definition', () => {
    const expectedCard: Card = {
        term: "test",
        definition: "test def",
        id: "test id"
    };

    render(<CardPreview card={expectedCard} />)

    expect(screen.getByText(expectedCard.term)).toBeInTheDocument();

    const flipButton = screen.getByText(/show/i);
    fireEvent.click(flipButton);

    expect(screen.getByText(expectedCard.definition)).toBeInTheDocument();

    expect(screen.queryByText(expectedCard.term)).not.toBeInTheDocument();
})