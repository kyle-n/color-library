import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-data',
  standalone: true,
  imports: [],
  templateUrl: './color-data.component.html',
  styleUrl: './color-data.component.scss',
})
export class ColorDataComponent {
  @Input() colorNumber = 0;

  get numberFacts(): Array<{
    name: string;
    description: string;
    value: string;
  }> {
    return [
      {
        name: 'colorNumberHex',
        description: 'Hexadecimal',
        value: this.colorNumberHex,
      },
      {
        name: 'colorNumberBinary',
        description: 'Binary',
        value: this.colorNumberBinary,
      },
      {
        name: 'colorNumberOctal',
        description: 'Octal',
        value: this.colorNumberOctal,
      },
      {
        name: 'isPureBlack',
        description: 'Is pure black',
        value: this.isPureBlack.toString(),
      },
      {
        name: 'isPureWhite',
        description: 'Is pure white',
        value: this.isPureWhite.toString(),
      },
      { name: 'isEven', description: 'Is even', value: this.isEven.toString() },
      { name: 'isOdd', description: 'Is odd', value: this.isOdd.toString() },
      {
        name: 'isPrime',
        description: 'Is prime',
        value: this.isPrime.toString(),
      },
    ];
  }

  get colorNumberHex(): string {
    return this.colorNumber.toString(16).padStart(2, '0');
  }

  get colorNumberBinary(): string {
    return this.colorNumber.toString(2).padStart(8, '0');
  }

  get colorNumberOctal(): string {
    return this.colorNumber.toString(8);
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
