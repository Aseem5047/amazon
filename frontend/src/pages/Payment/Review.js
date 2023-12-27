import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useSelector } from 'react-redux';
import PaymentCheckout from '../../components/CheckoutProduct/PaymentCheckout';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from 'react';
import { useMemo } from 'react';

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <ArrowBackIosIcon />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <ArrowForwardIosIcon />
    </Typography>
  );
};


export default function Review() {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const { basket } = useSelector(state => state.data);

  useMemo(() => {
    const groupedItems = basket.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      // console.log(results);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems)
  }, [basket])

  return (
    <React.Fragment>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="PaymentProductScroll">

        {basket && Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <Box key={items[0].id}
            itemId={items[0].id}
            title={items[0].title}
            m="0 40px" disablePadding spacing={2}>
            <PaymentCheckout
              key={key}
              id={items[0].id}
              title={items[0].title}
              image={items[0].image}
              price={items[0].price}
              rating={items[0].rating}
              details={items[0].detail}
              quantity={items.length}
            />
          </Box>
        ))}
      </ScrollMenu>

    </React.Fragment>
  );
}