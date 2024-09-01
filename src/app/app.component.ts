import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly minVal = 0;
  protected readonly maxVal = 255;
  protected title = 'color-library';
  protected colorNumber = new FormControl<number>(0, {
    nonNullable: true,
    validators: [Validators.min(this.minVal), Validators.max(this.maxVal)],
  });
  protected savedColorNumber: number | undefined;

  protected saveColorNumber(): void {
    const colorNumberWithinLimits = Math.min(this.maxVal, Math.max(this.minVal, this.colorNumber.value));
    this.colorNumber.setValue(colorNumberWithinLimits);
    this.savedColorNumber = colorNumberWithinLimits;
  }
}
