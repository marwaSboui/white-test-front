import { Component, OnInit } from '@angular/core';
import {Certification} from '../../../../models/certification';
import {CertificationService} from '../../../../service/certification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-certification-details',
  templateUrl: './certification-details.component.html',
  styleUrls: ['./certification-details.component.scss'],
})
export class CertificationDetailsComponent implements OnInit {

  certification: Certification;

  constructor(private certificationService: CertificationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getCertificationById();
  }

  private getCertificationById() {
    this.activatedRoute.params.subscribe(params => {
      this.certificationService.findById(params.id).subscribe(res => {
        this.certification = res;
      });
    });
  }

  onClickUpdate(_id: string) {
    this.router.navigate(['pages/admin/certification/update/' + _id ]);
  }
}
