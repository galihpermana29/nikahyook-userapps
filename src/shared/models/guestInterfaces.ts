export type TGuestGroup = {
  id: number;
  name: string;
  total: number;
};

export type TGuestAttending = {
  target_guest: number;
  total_guest: number;
};

export type TGuestGroupRoot = Omit<TGuestGroup, 'id'>;

export type TUpdateGuestAttendingPayload = {
  target_attending: number;
};

export type TCreateGuestGroupsPayload = {
  guests: TGuestGroupRoot[];
};

export type TUpdateGuestGroup = TGuestGroupRoot;
