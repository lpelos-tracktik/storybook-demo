import type { SiteData } from "@/types";
import { addresses } from "./addresses.fixture";
import { contacts } from "./contacts.fixture";

export const sites: SiteData[] = [
  {
    address: addresses[0],
    contacts: { id: "1", main: contacts[0] },
    id: "1",
    images: [
      "https://picsum.photos/id/10/800/600",
      "https://picsum.photos/id/11/800/600",
      "https://picsum.photos/id/12/800/600",
    ],
    title: "Le Cool Site",
  },
  {
    address: addresses[1],
    contacts: { id: "2", main: contacts[1] },
    id: "2",
    images: [
      "https://picsum.photos/id/13/800/600",
      "https://picsum.photos/id/14/800/600",
      "https://picsum.photos/id/15/800/600",
    ],
    title: "Le Dope Site",
  },
  {
    address: addresses[2],
    contacts: { id: "3", main: contacts[2] },
    id: "3",
    images: [
      "https://picsum.photos/id/16/800/600",
      "https://picsum.photos/id/17/800/600",
      "https://picsum.photos/id/18/800/600",
    ],
    title: "Dudeland",
  },
];
