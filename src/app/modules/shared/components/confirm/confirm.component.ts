import {Component, Inject, OnInit} from '@angular/core';
import {CategroyService} from "../../../services/categroy.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject (MAT_DIALOG_DATA) public data: any, private categoryService: CategroyService) { }

  ngOnInit(): void {

  }

  onNoClick(){
    this.dialogRef.close(3)
  }

  delete(){
    if (this.data != null){

      this.categoryService.deleteCategorie(this.data.id).
      subscribe({
          next: (data:any) =>{
            this.dialogRef.close(1);
          },
       error: (error: any) => {
         this.dialogRef.close(2);
       }

      })

    } else {
      this.dialogRef.close(2);
    }
  }

}
