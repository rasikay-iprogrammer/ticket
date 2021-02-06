import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
describe('AuthGuardService', () => {
  let service: AuthGuardService;
  const RouterSpy = jasmine.createSpyObj(
    'Router',
    ['navigate']
  );
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule],
      providers: [
        // { provide: ActivatedRoute,   useValue: ActivatedRouteSpy    },
        { provide: Router,           useValue: RouterSpy            }
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
