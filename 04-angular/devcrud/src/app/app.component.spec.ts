import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { DeveloperService } from './services/developer.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],

			declarations: [AppComponent, NavigationComponent, FooterComponent, ListComponent],
			// ^^^ itt meg kell adni mindig, ha valamit használunk (pl. komponens) akkor is, ha egy másik komponensben van benne
			// pl. app.component -> navigation component
			// pl. app.component -> footer component

			providers: [provideHttpClient()],
			// ^^^ ha valami providerként van megadva az app.module.ts-ben (ld. http client) akkor azt itt is úgy kell megadni

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'devcrud'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('devcrud');
  });

  it('should render navigation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-navigation')).toBeTruthy();
  });

  it('should contain router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should create ListComponent', () => {
    const fixture = TestBed.createComponent(ListComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create DeveloperService', () => {
    const service = TestBed.inject(DeveloperService);

    expect(service).toBeTruthy();
  });
});
