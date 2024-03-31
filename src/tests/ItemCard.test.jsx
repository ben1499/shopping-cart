import userEvent from "@testing-library/user-event"
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemCard from "../components/ItemCard";

describe("ItemCard component", () => {
    let mockProduct = {
        "id": 1,
        "title": "Blue shirt",
        "price": 109.95,
        "quantity": 0
    }

    it("test counter", () => {
        const user = userEvent.setup();

        const addToCart = vi.fn().mockImplementation(() => {
            console.log("Adding to cart");
        });
        const removeFromCart = vi.fn();
        const inputQuantity = vi.fn();

        const cart = [{
            "id": 1,
            "title": "Blue shirt",
            "price": 109.95,
            "quantity": 0
        }]

        vi.mock('react-router-dom', () => ({
            ...vi.importActual('react-router-dom'),
            useOutletContext: () => ([
                null, addToCart, removeFromCart, inputQuantity, cart
            ]),
        }));

        render(<ItemCard data={mockProduct} />)

        const button = screen.getByRole("button", {name: "+"})

        expect(screen.getByRole("input").value).toBe(0)
    })
})