import { ArrayCollection, IArrayCollection } from 'enta';
import Icons from '../design/Icons';
import Customer from './vo/Customer';
import ICustomer from './vo/ICustomer';
import INavigationItem from './vo/INavigationItem';
import ITransaction from './vo/ITransaction';
import NavigationItem from './vo/NavigationItem';
import Transaction from './vo/Transaction';

export default class Model {
    public static navigationItems: IArrayCollection<INavigationItem> = new ArrayCollection([
        new NavigationItem(Icons.MENU, 'Overview', '/overview'),
        new NavigationItem(Icons.AWARDS, 'Leaderboard', '/leaderbord'),
        new NavigationItem(Icons.BAG, 'Administration', '/administration'),
        new NavigationItem(Icons.DOLLAR, 'Sales', '/sales')
    ]);

    public static customers: IArrayCollection<ICustomer> = new ArrayCollection([
        new Customer('lilly.png', 'Lilly Ortiz', '@lillyortiz'),
        new Customer('tom.png', 'Tom Stone', '@tomstone'),
        new Customer('isabelle.png', 'Isabelle Higgins', '@isabellehiggins'),
        new Customer('rosalie.png', 'Rosalie Bowman', '@rosaliebowman')
    ]);

    public static transactions: IArrayCollection<ITransaction> = new ArrayCollection([
        new Transaction('from', 888888, new Date(2021, 5, 2, 15, 32), 650),
        new Transaction('refund', 999999, new Date(2021, 4, 29, 9, 14), -250),
        new Transaction('failed', 666666, new Date(2021, 5, 1, 22, 57), 128)
    ]);
}
