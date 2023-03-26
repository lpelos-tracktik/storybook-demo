import type { PicsumDimensions, PicsumOptions } from "@/types";

export default class PicsumService {
  private baseURL = "https://picsum.photos";

  getById(id: number, { dimensions }: PicsumOptions = {}): string {
    return this.addDimensions(`${this.baseURL}/id/${id}`, dimensions);
  }

  getRandom(options?: PicsumOptions): string {
    const id = this.getRandomId();
    return this.getById(id, options);
  }

  private addDimensions(
    url: string,
    { height = 768, width = 1024 }: PicsumDimensions = {}
  ): string {
    if (!height || !width) return url;
    return `${url}/${width}/${height}`;
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * 85);
  }
}
