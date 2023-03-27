import type { AxiosInstance } from "axios";
import axios from "axios";

import type { APIOptions, SiteData } from "@/types";
import PicsumService from "./picsum-service";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export enum ApiPaths {
  Site = "/sites/:id",
  SiteList = "/sites",
}

export default class ApiService {
  private api: AxiosInstance;
  private baseURL: string;
  private picsumService: PicsumService;

  constructor({
    baseURL = BASE_URL,
    picsumService = new PicsumService(),
  } = {}) {
    this.baseURL = baseURL;
    this.api = axios.create({ baseURL });
    this.picsumService = picsumService;
  }

  getPath(path: ApiPaths, params: Record<string, any> = {}): string {
    return Object.entries(params).reduce(
      (acc, [key, value]) => acc.replace(`:${key}`, value),
      path as string
    );
  }

  getSite(id: string): Promise<SiteData> {
    const path = this.getPath(ApiPaths.Site, { id });
    return this.api.get(path).then((value) => this.fixSiteImages(value.data));
  }

  getSiteList({ limit }: APIOptions = {}): Promise<SiteData[]> {
    const path = this.getPath(ApiPaths.SiteList);
    const params = { _limit: limit };
    return this.api
      .get(path, { params })
      .then((value) => this.fixSitesImages(value.data));
  }

  getUrl(path: ApiPaths, params: Record<string, any> = {}): string {
    const apiPath = this.getPath(path, params);
    return [this.baseURL.replace(/\/$/, ""), apiPath.replace(/^\//, "")].join(
      "/"
    );
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
