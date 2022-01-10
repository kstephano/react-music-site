import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { App } from '../App';

describe('App', () => {
    test('full app rendering/navigating', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        )
    
        const title = screen.getByLabelText('title');
        expect(title.textContent).toBe('Awesome React Music Website');
    });

    test('landing on a bad page', () => {
        const history = createMemoryHistory();
        history.push('/bad/route');
        render(
            <Router history={history}>
                <App />
            </Router>
        )

        expect(screen.getByText(/no match/i)).toBeInTheDocument();
    });
})

