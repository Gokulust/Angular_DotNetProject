import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute
import { AdminDataService } from '../../Services/admin-data.service';
import { ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFile: File | undefined; 

  productId!: number;
  formData: any = {}


  constructor(private route: ActivatedRoute, private apiService: AdminDataService,private router:Router) { }

  ngOnInit(): void {
    // Get the student ID from the route parameters
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Convert the parameter to a number
      console.log(this.productId);
      // Fetch the student data based on the ID
      this.loadStudentData();
    });
  }

  loadStudentData() {
    // Use the studentId to fetch the student data from your API
    this.apiService.getDataById(this.productId).subscribe((data) => {
      console.log(data);
      console.log("reached data")
      this.formData = data; // Populate the studentData object with the fetched data
    });
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }
  resetFileInput(): void {
    // Reset the file input by clearing its value
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
    // Clear the selected file
    this.selectedFile = undefined;
  }
  onUpdate()
  {
    const formData = new FormData();
    console.log(this.formData);
    formData.append('ProductName', this.formData.productName);
    formData.append('ProductCategory', this.formData.productCategory);
    formData.append('ProductDescription', this.formData.productDescription);
    formData.append('ProductQuantity',this.formData.productQuantity);
    formData.append('ProductRating', this.formData.productRating);
    formData.append('ProductPrice', this.formData.productPrice);
    if (this.selectedFile) {
    formData.append('productImage', this.selectedFile, this.selectedFile.name);
    }
   console.log(formData.get('ProductName'));
   Swal.fire({
    title: 'Update Product',
    text: 'Are you sure you want to update this product?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, update it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.isConfirmed) {
      // If confirmed, perform the update action
      // Call your actual update method here using the productId
      // For example:
      // this.productService.updateProduct(productId).subscribe(() => {
      //    // Handle success if needed
      // });
      try {
        this.apiService.updateData(this.formData.productId, formData).subscribe(
          () => {
            Swal.fire('Updated!', 'The product has been updated.', 'success').then(()=>this.router.navigate(['/viewproducts']));
          }
        );
      } catch (error) {
        console.error("Unexpected error occurred", error);
        // Handle unexpected errors here
      }
     
    } else {
      // If canceled, show a message or perform any action as needed
      Swal.fire('Canceled', 'The update action was canceled.', 'info');
    }
  });

  }
 

}
