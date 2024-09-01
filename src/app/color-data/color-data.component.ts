import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-data',
  standalone: true,
  imports: [],
  templateUrl: './color-data.component.html',
  styleUrl: './color-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorDataComponent {
  @Input() colorNumber = 0;

  get colorNumberHex(): string {
    return this.colorNumber.toString(16).padStart(2, '0');
  }

  get colorNumberBinary(): string {
    return this.colorNumber.toString(2).padStart(8, '0');
  }

  get colorNumberOctal(): string {
    return this.colorNumber.toString(8);
  }

  get colorNumberDecimal(): string {
    return this.colorNumber.toString(10);
  }

  get isPureBlack(): boolean {
    return this.colorNumber === 0;
  }

  get isPureWhite(): boolean {
    return this.colorNumber === 255;
  }

  get isEven(): boolean {
    return this.colorNumber % 2 === 0;
  }

  get isOdd(): boolean {
    return this.colorNumber % 2 !== 0;
  }

  get isPrime(): boolean {
    if (this.colorNumber < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(this.colorNumber); i++) {
      if (this.colorNumber % i === 0) {
        return false;
      }
    }
    return true;
  }
}
