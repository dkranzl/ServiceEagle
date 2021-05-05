import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LinkEntryService } from '../link-entry.service';
import { LinkEntry } from '../models/link-entry';

@Component({
  selector: 'app-link-overview-page',
  templateUrl: './link-overview-page.component.html',
  styleUrls: ['./link-overview-page.component.less']
})
export class LinkOverviewPageComponent implements OnInit {

  public linkEntries: LinkEntry[] = [];
  public pageHeader = environment.pageHeader;
  public pageHeaderIcon = environment.pageHeaderIcon;

  constructor(
    private linkEntryService: LinkEntryService
  ) { }

  ngOnInit(): void {
    this.linkEntryService.get().subscribe((entries) => {
      this.linkEntries = entries;
    });
  }

}
