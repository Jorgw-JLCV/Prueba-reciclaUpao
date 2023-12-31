import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';
import {ParticipanteGuard } from './auth-guard.guard';

describe('AuthGuard', () => {
  let guard: ParticipanteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipanteGuard]
    });
    guard = TestBed.inject(ParticipanteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
