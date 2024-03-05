export interface BookingItem {
    id: number;
    startDate: Date;
    endDate: Date;
    customerId: number;
    vehicleId: number;
    ratingStatus?: boolean;
    commentStatus?: boolean;
  }
  
  