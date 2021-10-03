import FlightRoute, { FlightDetails } from ".";
import { render, screen, within, queryByAttribute, waitFor, fireEvent } from "@testing-library/react"
import actionGetFilghts from "../../actions/actionGetFilghts";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import '@testing-library/jest-dom/extend-expect'

jest.mock("../../actions/actionGetFilghts")

// mocking data for api call test
const data = [{
    "id": "PIH31SDT4HZ",
    "departuretime":"14:15",
    "arrivaltime":"18:40",
    "flight":"1",
    "from":"DXB",
    "to":"LHR",
    "duration":"07:25",
    "planeid":"388Y",
    "planeConfig":"FJY",
    "plane":"",
    "operatorCode":"EK",
    "operator":"Emirates"
},
{
    "id": "PIH31SDT4HK",
    "departuretime":"16:25",
    "arrivaltime":"11:40",
    "flight":"2",
    "from":"DXB",
    "to":"LHR",
    "duration":"07:25",
    "planeid":"388Y",
    "planeConfig":"FJY",
    "plane":"",
    "operatorCode":"EK",
    "operator":"Emirates"
}]


/**
 * 
 *  Before and After Each test run
 */
beforeEach(() => {
    // setup a DOM element as a render target
    jest.spyOn(global, "fetch").mockImplementation(actionGetFilghts)
})

afterEach(() => {
    // cleanup on exiting
    global.fetch.mockClear();
});

/**
 * @ Test case 1
 * check list items are loading
 *  */
test("right number of list-items have been rendered", async () => {
    actionGetFilghts.mockResolvedValueOnce(data)

    render(<FlightRoute/>)

    expect(actionGetFilghts).toHaveBeenCalledTimes(1)
    expect(actionGetFilghts).toHaveBeenCalledWith()

    const items = await screen.findAllByRole("listitem")

    expect(items.length).toBe(2)
})

/**
 * @ Test case 2
 * Click on button disblae the button
 *  */
test("clicking on button disables it", async () => {
    actionGetFilghts.mockResolvedValueOnce(data)

    render(<FlightRoute/>)

    expect(actionGetFilghts).toHaveBeenCalledTimes(1)
    expect(actionGetFilghts).toHaveBeenCalledWith()

    const items = await screen.findAllByRole("listitem")

    items.forEach(item => {
        const { getByRole, getByTestId } = within(item)

        const button = getByTestId("book-flight")
        
        act(() => {
            fireEvent.click(button)
        })

        expect(button).toHaveAttribute("disabled")
    })
})


/**
 * @ Test case 3
 * Click on button change background by adding new class
 *  */
test("clicking on button changes it's classname", async () => {
    actionGetFilghts.mockResolvedValueOnce(data)

    render(<FlightRoute/>)

    expect(actionGetFilghts).toHaveBeenCalledTimes(1)
    expect(actionGetFilghts).toHaveBeenCalledWith()

    const items = await screen.findAllByRole("listitem")

    items.forEach(item => {
        const { getByTestId } = within(item)

        const button = getByTestId("book-flight")
        
        act(() => {
            fireEvent.click(button)
        })

        expect(item).toHaveAttribute("class","item selected")
    })
})
