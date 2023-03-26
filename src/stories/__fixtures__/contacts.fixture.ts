import type { ContactData } from "@/types";
import { addresses } from "./addresses.fixture";

export const contacts: ContactData[] = [
  {
    address: addresses[3],
    email: "cool.dude@lecoolsite.com",
    firstName: "Cool",
    id: "1",
    jobTitle: "VIP",
    lastName: " Dude",
    phoneNumber: "(555) 555-5555",
  },
  {
    address: addresses[4],
    email: "rad.gal@ledopesite.com",
    firstName: "Rad",
    id: "2",
    jobTitle: "A**-Kicker",
    lastName: "Gal",
    phoneNumber: "(555) 555-5555",
  },
  {
    address: addresses[5],
    email: "the.dude@dudeland.com",
    firstName: "The",
    id: "3",
    jobTitle: "'The' Dude",
    lastName: "Dude",
    phoneNumber: "(555) 555-5555",
  },
];
