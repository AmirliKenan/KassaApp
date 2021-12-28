import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KassaService } from '../kassa.service';
import { KassaUpdate } from '../models/kassa-update';

@Component({
  selector: 'app-kassa-edit',
  templateUrl: './kassa-edit.component.html',
  styleUrls: ['./kassa-edit.component.css'],
})
export class KassaEditComponent implements OnInit {
  kassaForm = new FormGroup({
    info: new FormControl(),
  });
  kassaId = '';
  constructor(
    private kassaService: KassaService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.kassaId = this.router.snapshot.params['id'];
    this.kassaService.getKassabyId(this.kassaId).subscribe((succesResponse) => {
      this.kassaForm.setValue({
        info: succesResponse.result.info,
      });
    });
  }
  onSubmit() {
    const kassaData: KassaUpdate = {
      id: this.kassaId,
      info: this.kassaForm.get('info').value,
    };
    this.kassaService.updateKassa(kassaData).subscribe((succesResponse) => {
      this.route.navigateByUrl('');
    });
  }
}
