import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Certification} from '../../../../models/certification';
import {CertificationService} from '../../../../service/certification.service';

@Component({
  selector: 'ngx-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss'],
})
export class CertificationListComponent implements OnInit {

  certificationList: Certification[];
  constructor(private router: Router,
              private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.findAllCertification();
  }

  onAdd() {
    this.router.navigate(['pages/admin/certification/add']);
  }

  private findAllCertification() {
    this.certificationService.findAll().subscribe(res => {
      this.certificationList = res;
    });
  }

  onClickDetails(_id: string) {
    this.router.navigate(['pages/admin/certification/' + _id]);
  }

  onClickUpdate(_id: string) {
    this.router.navigate(['pages/admin/certification/update/' + _id ]);
  }

  onDeleteCertification(_id: string) {
    this.certificationService.delete(_id).subscribe(res => {
      this.findAllCertification();
    });
  }
}
