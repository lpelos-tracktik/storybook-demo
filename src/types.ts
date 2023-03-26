export interface AddressData {
  city: string;
  country: string;
  state: string;
  street: string;
  zipCode: string;
}

export interface APIOptions {
  limit?: number;
}

export interface ContactData {
  address: AddressData;
  email: string;
  firstName: string;
  id: string;
  jobTitle: string;
  lastName: string;
  phoneNumber: string;
}

export interface ContactsData {
  // createdAt: string;
  id: string;
  main: ContactData;
}

export interface SiteData {
  address: AddressData;
  // clientId: string;
  contacts: ContactsData;
  id: string;
  // createdAt: string;
  images: string[];
  title: string;
  // tags: string[];
  // updatedAt: string;
}
