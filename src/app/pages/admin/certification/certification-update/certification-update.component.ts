import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CertificationService} from '../../../../service/certification.service';
import {Certification} from '../../../../models/certification';

@Component({
  selector: 'ngx-certification-update',
  templateUrl: './certification-update.component.html',
  styleUrls: ['./certification-update.component.scss'],
})
export class CertificationUpdateComponent implements OnInit {
  updateCertificationForm: FormGroup;
  certification: Certification;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private certificationService: CertificationService) { }


  ngOnInit(): void {
    this.initAddForm();
    this.getCertificationById();
  }

  private getCertificationById() {
    this.activatedRoute.params.subscribe(params => {
      this.certificationService.findById(params.id).subscribe(res => {
        this.certification = res;
        this.updateCertificationForm.get(['duration']).setValue(this.certification.duration);
        this.updateCertificationForm.get(['name']).setValue(this.certification.name);
        this.updateCertificationForm.get(['provider']).setValue(this.certification.provider);
      });
    });
  }

  onSubmit() {
    if (this.updateCertificationForm.invalid) {
      return;
    }
    const certification: Certification = {
      _id: this.certification._id,
      duration: this.updateCertificationForm.get(['duration']).value,
      name: this.updateCertificationForm.get(['name']).value,
      provider: this.updateCertificationForm.get(['provider']).value,
    };
    this.certificationService.update(this.certification._id, certification).subscribe(res => {
      if (res) {
        this.router.navigate(['pages/admin/certification']);
      }
    });
  }

  private initAddForm() {
    this.updateCertificationForm = this.formBuilder.group({
      provider: [null, Validators.required],
      duration: [null, [Validators.required, Validators.min(1)]],
      name: [null, Validators.required],
    });
  }
}
