import type { AxiosInstance } from "axios";
import axios from "axios";

import type { APIOptions, SiteData } from "@/types";
import PicsumService from "./picsum-service";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export default class ApiService {
  private api: AxiosInstance;
  private picsumService: PicsumService;

  constructor({
    baseURL = BASE_URL,
    picsumService = new PicsumService(),
  } = {}) {
    this.api = axios.create({ baseURL });
    this.picsumService = picsumService;
  }

  getSite(id: string): Promise<SiteData> {
    return this.api
      .get(`/sites/${id}`)
      .then((value) => this.fixSiteImages(value.data));
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

      const [_, width, height] = matches as [string, number, number];
      return this.picsumService.getRandom({ dimensions: { height, width } });
    });

    return { ...site, images };
  }

  private fixSitesImages(sites: SiteData[]): SiteData[] {
    return sites.map((site) => this.fixSiteImages(site));
  }
}