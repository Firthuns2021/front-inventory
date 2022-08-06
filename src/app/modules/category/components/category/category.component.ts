import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from "@angular/material/snack-bar";
import {ConfirmComponent} from "../../../shared/components/confirm/confirm.component";
import {NewCategoryComponent} from "../new-category/new-category.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {CategroyService} from "../../../services/categroy.service";
import {ICategoryElement} from "../../../../interfaces/i-category-element";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<ICategoryElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator; // controla el numero de elementos por pagina

  constructor(private categoryService: CategroyService,
              public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories(){

    this.categoryService.getCategories()
      .subscribe( {

        next: (data:any) => {

          console.log("respuesta categories: ", data);
          this.processCategoriesResponse(data);

            },
      error: (error: any) => {
                     console.log("error: ", error);
             }

      })
  }

  processCategoriesResponse(resp: any){

    const dataCategory: ICategoryElement[] = [];

    if( resp.metadata[0].code == "00") {

      let listCategory = resp.categoryResponse.category;

      listCategory.forEach((element: ICategoryElement) => {
        dataCategory.push(element);
      });

      // controlará los elementos por página
      this.dataSource = new MatTableDataSource<ICategoryElement>(dataCategory);
      this.dataSource.paginator = this.paginator;

    }

  }

  openCategoryDialog(){
    const dialogRef = this.dialog.open(NewCategoryComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe({
                next:  (result:any) => {

                  if( result == 1){
                    this.openSnackBar("Categoria Agregada", "Exitosa");
                    this.getCategories();
                  } else if (result == 2) {
                    this.openSnackBar("Se produjo un error al guardar categoria", "Error");
                  }
                }

              });
  }

  edit(id:number, name: string, description: string){
    const dialogRef = this.dialog.open(NewCategoryComponent , {
      width: '450px',
      data: {id: id, name: name, description: description}
    });

    dialogRef.afterClosed().subscribe((result:any) => {

      if( result == 1){
        this.openSnackBar("Categoria Actualizada", "Exitosa");
        this.getCategories();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al actualizar categoria", "Error");
      }
    });
  }

  delete(id: any){
    const dialogRef = this.dialog.open(ConfirmComponent , {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe((result:any) => {

      if( result == 1){
        this.openSnackBar("Categoria Eliminada", "Exitosa");
        this.getCategories();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al eliminar categoria", "Error");
      }
    });
  }

  buscar( termino: string){

    if( termino.length === 0){
      return this.getCategories();
    }

    this.categoryService.getCategorieById(termino)
      .subscribe( {
        next: (resp: any) => {
          this.processCategoriesResponse(resp);
        },
        error: (resp: any)=>{
          console.log('error: ', resp)
        }

      })
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })

  }


  exportExcel(){

    this.categoryService.exportCategories()
      .subscribe( (data: any) => {
        let file = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        let fileUrl = URL.createObjectURL(file);
        var anchor = document.createElement("a");
        anchor.download = "categories.xlsx";
        anchor.href = fileUrl;
        anchor.click();

        this.openSnackBar("Archivo exportado correctamente", "Exitosa");
      }, (error: any) =>{
        this.openSnackBar("No se pudo exportar el archivo", "Error");
      })

  }
}

