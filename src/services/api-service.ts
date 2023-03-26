import type { AxiosInstance } from "axios";
import axios from "axios";

import type { APIOptions, SiteData } from "@/types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export default class Api {
  private api: AxiosInstance;

  constructor({ baseURL = BASE_URL } = {}) {
    this.api = axios.create({ baseURL });
  }

  getSiteList({ limit }: APIOptions = {}): Promise<SiteData[]> {
    return this.api
      .get("/sites", { params: { _limit: limit } })
      .then((value) => this.fixSitesImages(value.data));
  }

  /**
   * Lorem Pixel is not available anymore
   */
  private fixSiteImages(site: SiteData): SiteData {
    const images = site.images.map((image) => {
      const matches = image.match(/.*lorempixel.*?(\d+).*?(\d+)/);
      if (!matches) return image;

      const [_, width, height] = matches;
      const id = Math.floor(Math.random() * 1000);
      return `https://picsum.photos/id/${id}/${width}/${height}`;
    });

    return { ...site, images };
  }

  private fixSitesImages(sites: SiteData[]): SiteData[] {
    return sites.map(this.fixSiteImages);
  }
}
