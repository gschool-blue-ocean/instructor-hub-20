import {render, screen} from '@testing-library/react'
import NavBar from '../NavBar'

it('testing for NavBar component', async () => {
    render(<NavBar/>);
    const navBarText= screen.getByAltText(/galvanize logo/i);
    expect(navBarText).toBeInTheDocument();
})