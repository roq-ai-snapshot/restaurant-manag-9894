import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_number: number;
  total_price?: number;
  order_date?: any;
  delivery_address?: string;
  status?: string;
  user_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  delivery_time?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  delivery_address?: string;
  status?: string;
  user_id?: string;
  restaurant_id?: string;
}
