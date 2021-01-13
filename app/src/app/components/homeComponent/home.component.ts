/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    registerForm: FormGroup;
    //   datePic = document.getElementById("datePicker");
    //   date = new Date();
    maxDate = new Date(2002, 11, 31);
    constructor(private fb: FormBuilder, public dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
            select: ['', [Validators.required]],
            gender:['', [Validators.required]],
            date: ['', [Validators.required]]
        })

        // if(this.datePic > this.date)
        // {
        //     console.log("selected previous date");
        // }
        //  else{
        //      console.log("selected future date");
        //  }
        
         
    }

    

    onSubmit() {
        console.log(this.registerForm.value);
        const dialogRef = this.dialog.open(confirmboxComponent);
    }

    
     
}

@Component({
    selector: 'bh-confirmbox',
    templateUrl: '../confirmboxComponent/confirmbox.template.html'
})
export class confirmboxComponent { }