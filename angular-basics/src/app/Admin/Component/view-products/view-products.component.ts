import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../Services/admin-data.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  productList:any[]=[];
  constructor(private apiService:AdminDataService ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }
  fetchProducts() {
    this.apiService.getSomeData().subscribe((products) => {
      this.productList = products;
    });
  }
  onDeleteProduct(id: number) {
    // Call the deleteStudentById method from the service
    this.apiService.DeleteData(id).subscribe(
      () => {
        console.log('Student deleted successfully');
        // Update the UI by removing the deleted student from this.students
        this.productList = this.productList.filter((product) => product.id !== id);
        this.fetchProducts()

      }
    );
  }
 
  confirmBox(id: number){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.onDeleteProduct(id) 
        {
          // Call the deleteStudentById method from the service
          this.apiService.DeleteData(id).subscribe(
            () => {
              console.log('Student deleted successfully');
              // Update the UI by removing the deleted student from this.students
              this.productList = this.productList.filter((product) => product.id !== id);
              this.fetchProducts()
            }
          );
        }
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}

