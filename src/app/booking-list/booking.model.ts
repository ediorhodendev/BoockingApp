import { Customer } from './customer.model';
import { Vehicle } from './vehicle.model';

export interface BookingItem {
  id: number;
  startDate: Date;
  endDate: Date;
  customerId: number;
  vehicleId: number;
  ratingStatus?: boolean;
  commentStatus?: boolean;
  customer: Customer;
  vehicle: Vehicle;
}

