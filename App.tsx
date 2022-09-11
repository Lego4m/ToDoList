import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        translucent={false} 
        backgroundColor='#0d0d0d'
        barStyle='light-content'
      />
      <Home />
    </>
  );
}
