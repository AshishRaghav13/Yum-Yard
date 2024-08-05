import {render,screen} from "@testing-library/react";
import Contact from "../Contact"

test("Component Should Render",()=>{
    render(<Contact/>)
    const element = screen.getByText("Contact Us");
    expect(element).toBeInTheDocument();
})