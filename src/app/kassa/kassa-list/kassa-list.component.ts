import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KassaService } from '../kassa.service';

@Component({
  selector: 'app-kassa-list',
  templateUrl: './kassa-list.component.html',
  styleUrls: ['./kassa-list.component.css'],
})
export class KassaListComponent implements OnInit {
  data: any;
  kassaId = '';
  constructor(
    private kassaService: KassaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.kassaService.getKassaList().subscribe(
      (successRespone) => {
        this.data = successRespone.result;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onDelete() {
    this.kassaId = this.activatedRoute.snapshot.params['id'];
    confirm('Are you sure for Delete');

    if (confirm) {
      this.kassaService.kassaDelete(this.kassaId).subscribe(
        (succesResponse) => {
          alert('Data deleted succesfully');
        },
        (err) => console.log(err)
      );
    }
  }
}
