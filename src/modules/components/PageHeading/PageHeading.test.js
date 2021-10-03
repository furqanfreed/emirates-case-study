import PageHeading from "."
import { render, screen } from "@testing-library/react"

test("renders flights page", () => {
    render(<PageHeading/>);
    expect(screen.getByText("Flight routes fom Dubai to Lahore")).toBeInTheDocument();
});