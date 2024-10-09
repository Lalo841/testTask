import { Component, Input } from '@angular/core';
import { Package } from '../../models/package.model';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrl: './packages-list.component.scss',
})
export class PackagesListComponent {
  @Input() packages: Package[] = [];
  @Input() inputText: string = '';

  public packageDependencies?: string[];

  public hoverPackage: Package | null = null;

  constructor(private packagesService: PackagesService) {}

  onMouseEnter(pkg: Package) {
    this.hoverPackage = pkg;
  }

  onMouseLeave() {
    this.hoverPackage = null;
  }

  getDependenciesById(id: string) {
    const formatId = (id: string) => {
      let slashExist = id.includes('/');
      return slashExist ? id.replace('/', '%2F') : id;
    };

    this.packagesService
      .getDependenciesForPackage(formatId(id))
      .subscribe((response: string[]) => {
        this.packageDependencies = response;
        console.log(response);
      });
  }
}
