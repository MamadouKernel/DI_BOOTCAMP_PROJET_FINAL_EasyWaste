import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.less"],
})
export class AddUserComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private router: Router) {
    this.form = this.fb.group({
      Lastname: new UntypedFormControl(null, []),
      Fistname: new UntypedFormControl(null, []),
      Email: new UntypedFormControl(null, [Validators.email]),
      Username: new UntypedFormControl(null, []),
      Role: new UntypedFormControl(null, []),
      Phone: new UntypedFormControl(null, []),
      Password: new UntypedFormControl(null, []),
      ConfirmPassword: new UntypedFormControl(null, []),
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log("submit", this.form.value);
      // this.router.navigate([routeMapping.home]);
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  ngOnInit(): void {

  }
}
