import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useSelector } from 'react-redux';
import PaymentCheckout from '../../components/CheckoutProduct/PaymentCheckout';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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

  const { basket } = useSelector(state => state.data);

  return (
    <React.Fragment>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="PaymentProductScroll">

        {basket && basket.map((item) => (
          <Box key={item.id}
            itemId={item.id}
            title={item.title}
            m="0 40px" disablePadding spacing={2}>
            <PaymentCheckout
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          </Box>
        ))}
      </ScrollMenu>

    </React.Fragment>
  );
}