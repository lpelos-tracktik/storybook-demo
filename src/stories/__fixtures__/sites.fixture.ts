import type { SiteData } from "@/types";
import { addresses } from "./addresses.fixture";

export const sites: SiteData[] = [
  {
    address: addresses[0],
    contact: {
      address: addresses[1],
      email: "cool.dude@lecoolsite.com",
      id: "1",
      jobTitle: "VIP",
      name: "Cool Dude",
      phoneNumber: "(555) 555-5555",
    },
    id: "1",
    images: [
      "https://picsum.photos/id/10/800/600",
      "https://picsum.photos/id/11/800/600",
      "https://picsum.photos/id/12/800/600",
    ],
    title: "Le Cool Site",
  },
  {
    address: addresses[2],
    contact: {
      address: addresses[3],
      email: "rad.gal@ledopesite.com",
      id: "2",
      jobTitle: "A**-Kicker",
      name: "Rad Gal",
      phoneNumber: "(555) 555-5555",
    },
    id: "2",
    images: [
      "https://picsum.photos/id/13/800/600",
      "https://picsum.photos/id/14/800/600",
      "https://picsum.photos/id/15/800/600",
    ],
    title: "Le Dope Site",
  },
  {
    address: addresses[4],
    contact: {
      address: addresses[5],
      email: "the.dude@dudeland.com",
      id: "3",
      jobTitle: "'The' Dude",
      name: "The Dude",
      phoneNumber: "(555) 555-5555",
    },
    id: "3",
    images: [
      "https://picsum.photos/id/16/800/600",
      "https://picsum.photos/id/17/800/600",
      "https://picsum.photos/id/18/800/600",
    ],
    title: "Dudeland",
  },
];
