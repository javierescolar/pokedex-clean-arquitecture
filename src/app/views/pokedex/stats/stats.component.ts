import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <ul>
        <li *ngFor="let stat of stats">
          {{ stat.name }}:
          <div class="border">
            <div class="bar" [style.width]="(stat.value * 100) / 200 + '%'">
              <span class="value">{{ stat.value }}</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  @Input() stats!: { name: string; value: number }[];
}
