import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavComponent } from "./nav.component";
import { DebugElement, ElementRef } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("NavComponent", () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent]
    }).compileComponents();
  }));
  let de: DebugElement;
  let button: ElementRef;
  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit when the button is clicked", () => {
    fixture = TestBed.createComponent(NavComponent);

    spyOn(component.catSelected, "emit");
    fixture.detectChanges();

    component.selectCat("health");
    expect(component.catSelected.emit).toHaveBeenCalledWith("health");
  });
});
