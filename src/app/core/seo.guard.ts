import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoGuard implements CanActivate {
  constructor(private router: Router, private meta: Meta, private title: Title) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const seo: SeoData = route.data.seo;
    this.title.setTitle(seo.title);

    this.meta.updateTag({
      name: 'keywords',
      content: seo.keywords
    });

    this.meta.updateTag({
      name: 'description',
      content: seo.description
    });

    return true;
  }
}
