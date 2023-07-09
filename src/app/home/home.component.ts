import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  edit1:any;
  edit2:any;
  edit3:any;
  index:any;

  field1Value: string="";
  field2Value: string="";
  field3Value: string="";
  
  sampleArray = [
    { header1: 'Data 1', header2: 'Data 2', header3: 'Data 3' },
    { header1: 'Data 4', header2: 'Data 5', header3: 'Data 6' },
    { header1: 'Data 7', header2: 'Data 8', header3: 'Data 9' }
  ];
  isPopupOpen = false;
  iseditPopupOpen = false;
  isDeletePopupOpen=false;


  openPopup(): void {
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
  }
  closeDeletePopup(){
    this.isDeletePopupOpen=false;
  }
  submit():void{
    let arr={header1:this.field1Value, header2:this.field2Value, header3:this.field3Value};
    this.sampleArray.push(arr);
    this.isPopupOpen=false;

  }

  openEditPopup(item:any){
     this.edit1=item.header1;
     this.edit2=item.header2;
     this.edit3=item.header3;

      this.index = this.sampleArray.findIndex(item => item.header1 === this.edit1 && item.header2 === this.edit2 && item.header3 === this.edit3);


    this.iseditPopupOpen=true;

  }
  openDeletePopup(it:any){

    this.index = this.sampleArray.findIndex(item => item.header1 === it.header1 && item.header2 === it.header2 && item.header3 === it.header3);
    this.isDeletePopupOpen=true;


  }

  closeEditPopup(): void {
    this.iseditPopupOpen = false;
  }
  editSubmit(){
    if (this.index !== -1) {
      this.sampleArray[this.index].header1 = this.edit1;
      this.sampleArray[this.index].header2 = this.edit2;
      this.sampleArray[this.index].header3 = this.edit3;
      this.index=-1;
      this.iseditPopupOpen = false;

      
    }  
  }
  Delete(){
    this.sampleArray.splice(this.index,1);
    this.isDeletePopupOpen=false;
  }
  constructor() { }

  ngOnInit() {
  }
  
  }


