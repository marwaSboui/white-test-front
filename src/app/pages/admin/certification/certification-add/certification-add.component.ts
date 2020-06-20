import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CertificationService} from '../../../../service/certification.service';
import {Certification} from '../../../../models/certification';

@Component({
  selector: 'ngx-certification-add',
  templateUrl: './certification-add.component.html',
  styleUrls: ['./certification-add.component.scss'],
})
export class CertificationAddComponent implements OnInit {
  addCertificationForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private certificationService: CertificationService) { }


  ngOnInit(): void {
    this.initAddForm();
  }

  private initAddForm() {
    this.addCertificationForm = this.formBuilder.group({
      provider: [null, Validators.required],
      duration: [null, [Validators.required, Validators.min(1)]],
      name: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.addCertificationForm.invalid) {
      return;
    }
    const certification: Certification = {
      duration: this.addCertificationForm.get(['duration']).value,
      name: this.addCertificationForm.get(['name']).value,
      provider: this.addCertificationForm.get(['provider']).value,
    };
    this.certificationService.create(certification).subscribe(res => {
      if (res) {
        this.router.navigate(['pages/admin/certification']);
      }
    });
  }
}
