
import { render, screen } from "@testing-library/react"
import App from "../App"
import { expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
    let mockProducts = [
        {
            "id": 1,
            "title": "Blue shirt",
            "price": 109.95,
        }
    ]

    global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve(mockProducts)
    }));

    it("renders App component", () => {
        const { container } = render(<BrowserRouter>
            <App />
        </BrowserRouter>);

        expect(container).toMatchSnapshot();
    })
})