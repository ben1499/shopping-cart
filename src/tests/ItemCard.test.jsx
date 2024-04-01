import userEvent from "@testing-library/user-event"
// import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemCard from "../components/ItemCard";
import { cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("ItemCard component", () => {
    let mockProduct = {
        "id": 1,
        "title": "Blue shirt",
        "price": 109.95,
        "quantity": 5
    }

    const cart = [{
        "id": 1,
        "title": "Blue shirt",
        "price": 109.95,
        "quantity": 5
    }]

    const addToCart = vi.fn();
    const removeFromCart = vi.fn();
    const inputQuantity = vi.fn();

    vi.mock('react-router-dom', async (addToCart, removeFromCart, inputQuantity, cart) => {
        const original = await vi.importActual("react-router-dom")

        return { ...original, 
            useOutletContext: () => ([
                null, addToCart, removeFromCart, inputQuantity, cart
            ])
        }
    });

    it("initial quantity value is filled in input field", () => {

        render(<ItemCard data={mockProduct} />)

        expect(screen.getByRole("spinbutton").value).toBe("5")

    })
})