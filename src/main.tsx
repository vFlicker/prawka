import { createRoot } from 'react-dom/client';

import { App } from './components/App';

const rootElement = document.getElementById('app') as HTMLElement;
createRoot(rootElement).render(<App />);
