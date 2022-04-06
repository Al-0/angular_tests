import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  template: `
    <p>
      edit-user works!
    </p>
  `,
  styles: [
  ]
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( parameters =>{
      console.log('Child route');
      console.log(parameters);
    })

    this.activatedRoute.parent?.params.subscribe( parameters =>{
      console.log('Parent from child route');
      console.log(parameters);
    })
  }

  ngOnInit(): void {
  }

}
