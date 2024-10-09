import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Package } from '../../models/package.model';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.scss',
})
export class PackageCardComponent implements OnInit {
  @Input() packageData!: Package;
  @Input() packageDependencies: any;
  @Input() hoverPackage!: Package | null;

  @Output() sendIdEvent = new EventEmitter<string>();

  downloads: string = '';
  dependencies: string = '';
  
  ngOnInit(): void {
    this.roundingDownloadsAndDependencies(
      this.packageData.weeklyDownloads,
      this.packageData.dependencyCount
    );
  }
  
  isHovered(): boolean {
    return this.hoverPackage === this.packageData;
  }

  isDependency(): boolean {
    if (this.packageDependencies !== undefined) {
      return (
        this.hoverPackage &&
        this.packageDependencies.includes(this.packageData.id)
      );
    } else return false;
  }

  roundingDownloadsAndDependencies(downloads: number, dependencies: number) {
    const formatValue = (value: number) => {
      if (value >= 1000000) return Math.floor(value / 1000000) + 'M';
      if (value >= 1000) return Math.floor(value / 1000) + 'K';
      return value.toString();
    };

    this.downloads = formatValue(downloads);
    this.dependencies = formatValue(dependencies);
  }

  mouseoverFunc() {
    this.sendIdEvent.emit(this.packageData.id);
  }
}
