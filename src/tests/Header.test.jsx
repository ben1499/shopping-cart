import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
    test("cart icon is not displayed when in homepage", () => {

        render(<BrowserRouter>
            <Header />
        </BrowserRouter>)

        const cart = screen.queryByTestId("cart");
        expect(cart).toBe(null)
    })

    test("cart icon is displayed when in shop page", async () => {
        const user = userEvent.setup();

        render(<BrowserRouter>
            <Header />
        </BrowserRouter>)

        const shopLink = screen.getByRole("link", {name: "Shop"})

        await user.click(shopLink)

        const cart = screen.queryByTestId("cart");
        expect(cart).not.toBeNull()
    })

    test("cart number is displayed", () => {
        const mockQuantity = 3;

        render(<BrowserRouter>
            <Header cartNumber={mockQuantity}/>
        </BrowserRouter>)

        expect(screen.getByText("3")).toBeTruthy();
    })
})