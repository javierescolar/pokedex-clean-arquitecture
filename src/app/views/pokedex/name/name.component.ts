import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>{{ name | titlecase }}</h2>
      <p>{{ type }}</p>
    </section>
  `,
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameComponent {
  @Input() name!: string;
  @Input() type!: string;
}
