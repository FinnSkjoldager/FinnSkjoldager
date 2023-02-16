# angular cookie gdpr
https://www.rajeshkumaryadav.com/#/about
https://dev.to/rajeshkumaryadavdotcom/angular-add-cookie-consent-in-your-angular-project-just-in-5-minutes-5a3b
https://github.com/tinesoft/ngx-cookieconsent
npm install --save cookieconsent
npm install --save ngx-cookieconsent

app.module.ts
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};


@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgcCookieConsentModule.forRoot(cookieConfig), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}

# Angular dele
https://github.com/bobangajicsm/E-Commerce-Store.git
https://github.com/veliyat/angular-8-shopping-cart.git
https://github.com/gothinkster/angular-realworld-example-app.git