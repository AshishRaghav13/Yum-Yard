import {render,screen} from "@testing-library/react";
import Contact from "../Contact"

// describe is used to group multiple test cases , we can also have multiple and nested describe groupings
describe("Grouping Contact Us Test Cases",()=>{      
    test("Component Should Render",()=>{ 
        render(<Contact/>)
        const element = screen.getByText("Contact Us");
        expect(element).toBeInTheDocument();
    })
    
    // can use "it" in place of test alse for for better readibility
    it("Should have Button",()=>{
        render(<Contact/>)
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    })
    
    test("Should load multiple input boxes on the Contact Component",()=>{
        render(<Contact/>)
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");    // for checking multiple items
        
        // Assertion
        expect(inputBoxes.length).toBe(3);
    })
})
