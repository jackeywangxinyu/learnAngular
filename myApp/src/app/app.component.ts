import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  value = '';
  calculator = {
    formula: '* 0.62 + 15',
    inputValue: 0,
    outputValue: 0
  }
  calculate(num: number, formula: string) {
    const fullFormula = (num.toString() || 0) + formula;
    let result = 9999999;
    try {
      result = eval(fullFormula);
    } catch (error) {
      console.log(error);
      
    }
    return result
  }

}
