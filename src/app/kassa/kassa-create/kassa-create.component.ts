import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KassaService } from '../kassa.service';
import { KassaPost } from '../models/kassa-post';

@Component({
  selector: 'app-kassa-create',
  templateUrl: './kassa-create.component.html',
  styleUrls: ['./kassa-create.component.css'],
})
export class KassaCreateComponent implements OnInit {
  kassaForm = new FormGroup({
    info: new FormControl(''),
  });

  constructor(private kassaService: KassaService, private route: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.kassaService
      .addKassa(this.kassaForm.get('info').value)
      .subscribe((succesResponse) => {
        this.route.navigateByUrl('');
      });
  }
}
