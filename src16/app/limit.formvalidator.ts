import {FormControl} from '@angular/forms';

export class LimitValidator {

  static Limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      const val = Number(control.value);
      // tslint:disable-next-line:use-isnan
      if (val !== NaN && val > limit) {
        return {limit: {limit, actualValue: val}};
      } else {
        return null;
      }
    };
  }
}
