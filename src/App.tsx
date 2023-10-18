import * as React from 'react';
import NavBar from './components/NavBar';
import CardItem from './components/CardItem';
import Divider from '@mui/material/Divider';
import { useAppSelector, useAppDispatch } from './hooks';
import { getItems } from './features/cartSlice';

function App() {
  const { items, loading, total, itemsOnTheBag } = useAppSelector(
    (state) => state.cart,
  );
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <>
      <NavBar itemsOnTheBag={itemsOnTheBag} />
      {loading ? (
        <h1>loading</h1>
      ) : (
        items.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            amount={item.amount}
          />
        ))
      )}
      <Divider />
      <h1>Total: $ {total}</h1>
    </>
  );
}

export default App;
