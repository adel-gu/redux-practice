import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Item, decreaseAmount, increaseAmount } from '../features/cartSlice';
import { useAppDispatch } from '../hooks';

const CardItem = ({ id, title, img, price, amount }: Item) => {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="increas"
          onClick={() => dispatch(increaseAmount(id))}
        >
          +
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {amount}
        </Typography>
        <IconButton
          aria-label="decrease"
          onClick={() => dispatch(decreaseAmount(id))}
        >
          -
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardItem;
