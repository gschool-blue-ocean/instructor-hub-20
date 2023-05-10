import React from "react";
import { it , test , expect } from "vitest";
import { render , screen } from "@testing-library/react";
import NavBar from "../NavBar";

it('make sure created tests work', async () => {
  render(<NavBar />);

  const onScreenText = screen.getByText('Instructor Hub')
  expect(onScreenText.textContent).toEqual('Instructor Hub');
});

// it(`tomas's way`, async () => {
//   const { getByText , getByTestId } = render(<NavBar />);

//   const title = getByTestId("title");
//   expect(title.textContent).toBe("Instructor Hub");
// });

// test('movie title goes away', async () => {
  // element is initially present...
  // note use of queryBy instead of getBy to return null
  // instead of throwing in the query itself
//   await waitFor(() => {
//     expect(queryByText('i, robot')).not.toBeInTheDocument()
//   })
// })

