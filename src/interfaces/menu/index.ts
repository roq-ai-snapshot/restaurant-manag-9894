import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  price?: number;
  calories?: number;
  ingredients?: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  dish_type?: string;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  ingredients?: string;
  restaurant_id?: string;
  dish_type?: string;
}
