import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartIcon } from '../icons';
import styles from './header.module.scss';
import NextLink from './NextLink';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <NextLink href='/'>Store</NextLink>
            <NextLink href='/about'>About</NextLink>
            <NextLink href='/cart'> <CartIcon/> Cart ({itemCount})</NextLink>
        </header>
     );
}
 
export default Header;