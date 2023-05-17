import { render, screen } from "@testing-library/react"
import ChatsList from "../ChatsList"

it('Должен содержать заголовок "Список чатов"', () => {
    render(<ChatsList />);
    const h6 = screen.getByText('Список чатов');
    expect(h6).toBeTruthy();
})