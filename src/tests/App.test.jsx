
import { render, screen } from "@testing-library/react"
import App from "../App"
import { expect, vi } from "vitest";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import vi-fetch-mock

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

    it("renders fetched data", async () => {
        act(() => {
            render(<BrowserRouter>
                <App />
            </BrowserRouter>);
        })

        const user = new userEvent.setup();

        const link = screen.getByRole("link", { name: "Shop" })

        await user.click(link);
        expect(screen.getByText(/Blue shirt/i)).toBeInTheDocument();
    })
})