import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen">
      <img [src]="image" alt="screen" class="img-screen" />
    </section>
  `,
  styleUrls: ['./screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenComponent {
  @Input() image!: URL;
}
