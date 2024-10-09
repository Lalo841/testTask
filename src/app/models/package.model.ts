export class Package {
  id: string;
  weeklyDownloads: number;
  dependencyCount: number;

  constructor(id: string, weeklyDownloads: number, dependencyCount: number) {
    this.id = id;
    this.weeklyDownloads = weeklyDownloads;
    this.dependencyCount = dependencyCount;
  }
}
