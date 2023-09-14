import { MenuInterface } from 'interfaces/menu';
import { OrderInterface } from 'interfaces/order';
import { ReviewInterface } from 'interfaces/review';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  capacity?: number;
  menu?: MenuInterface[];
  order?: OrderInterface[];
  review?: ReviewInterface[];
  table?: TableInterface[];
  user?: UserInterface;
  _count?: {
    menu?: number;
    order?: number;
    review?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
