import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SharedServicesService } from '../../Shared-Services/shared-services.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  formData: any = {
    productRating: 4.0,
  };
  selectedFile: File | undefined;
  isSubmitting: boolean = false; // Flag to handle form submission

  constructor(private http: HttpClient, private sharedservice: SharedServicesService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.isSubmitting = true; // Set form submission flag
    console.log('Submit button clicked');
    console.log(this.formData);

    const formData = new FormData();
    formData.append('productName', this.formData.productName);
    formData.append('productCategory', this.formData.productCategory);
    formData.append('productDescription', this.formData.productDescription);
    formData.append('productQuantity', this.formData.productQuantity);
    formData.append('productRating', this.formData.productRating);
    formData.append('productPrice', this.formData.productPrice);

    if (this.selectedFile) {
      formData.append('productImage', this.selectedFile, this.selectedFile.name);
    }

    // Send a POST request to the API with the form data
    this.http.post('http://localhost:5091/api/Product', formData)
      .pipe(
        catchError(this.handleError) // Handle errors using a catchError operator
      )
      .subscribe((response) => {
        // Handle the response from the API
        this.alertWithSuccess()
        this.sharedservice.triggerRefresh();
        this.formData = {rating: 4.0,};
        this.resetFileInput();
        this.isSubmitting = false; // Reset form submission flag
      });
  }
  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
  // Handle file selection
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  // Reset file input
  resetFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
    this.selectedFile = undefined;
  }

  // Error handling function
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
