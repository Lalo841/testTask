import { Component, Input, OnInit } from '@angular/core';
import { Package } from './models/package.model';
import { PackagesService } from './services/packages.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private packagesService: PackagesService) {}
  packages: Package[] = [];
  inputText: string = '';

  ngOnInit(): void {
    this.packagesService.getData().subscribe((response: Package[]) => {
      this.packages = response;
    });
  }

  setSearchTextFn(text: string) {
    this.inputText = text;
    console.log(this.inputText);
  }

  refreshData() {
    this.packages = [];
    this.packagesService.getData().subscribe((response: Package[]) => {
      this.packages = response;
    });
    console.log("Data refresh");
  }
}
