import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent)
  componenteFilho!: ChildComponent;

  ngAfterViewInit(): void {
    console.log(this.componenteFilho);
  }
}
