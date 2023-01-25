import { FaUserEdit as FaUserEdit } from "react-icons/fa";
import { FiShoppingCart as FiShoppingCart } from "react-icons/fi";
import { IoMdCreate as IoMdCreate } from "react-icons/io";
import { IoGrid as IoGrid } from "react-icons/io5";
import { MdArticle as MdArticle } from "react-icons/md";


export const links = [{
    name: 'dashboard',
    icon: IoGrid,
    title: 'Dashboard',
},
{
    name: 'posts',
    icon: MdArticle,
    title: 'Posts',
},
{
    name: 'profile',
    icon: FaUserEdit,
    title: 'Profile',
},
{
    name: 'createpost',
    icon: IoMdCreate,
    title: 'Create Post',
},
{
    name: 'cart',
    icon: FiShoppingCart,
    title: 'Cart',
},

]