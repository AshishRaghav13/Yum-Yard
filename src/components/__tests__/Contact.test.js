import {render,screen} from "@testing-library/react";
import Contact from "../Contact"

test("Component Should Render",()=>{
    render(<Contact/>)
    const element = screen.getByText("Contact Us");
    expect(element).toBeInTheDocument();
})

test("Should have Button",()=>{
    render(<Contact/>)
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
})

test("Should load multiple input boxes on the Contact Component",()=>{
    render(<Contact/>)
    const inputBoxes = screen.getAllByRole("textbox");    // for checking multiple items
    
    // Assertion
    expect(inputBoxes.length).toBe(3);
})