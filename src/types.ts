export interface AddressData {
  city: string;
  country: string;
  state: string;
  street: string;
  zipCode: string;
}

export interface ContactData {
  address: AddressData;
  email: string;
  id: string;
  jobTitle: string;
  name: string;
  phoneNumber: string;
}

export interface SiteData {
  address: AddressData;
  contact: ContactData;
  id: string;
  images: string[];
  title: string;
}
