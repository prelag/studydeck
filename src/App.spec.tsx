import {render} from "@testing-library/react";
import App from "./App";
import {debug} from "util";
import {getCards} from "./services/CardService";

jest.mock('./services/CardService.ts')

it('Renders cards from the api', () => {
    const mockCards = [
        {id: 1, term: 'test 1', definition: 'def 1'},
        {id: 2, term: 'test 2', definition: 'def 2'},
        {id: 3, term: 'test 3', definition: 'def 3'},
    ]

    getCards().mockResolvedValue()

    render(<App />)
    //debug();
})