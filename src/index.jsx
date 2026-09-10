import { createRoot } from 'react-dom/client';
import Tabs from './components/Tabs';

const container = document.getElementById('tabs');
const root = createRoot(container);

root.render(<Tabs />);
