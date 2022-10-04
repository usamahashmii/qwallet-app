import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'phonenumber',
    pathMatch: 'full'
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('./promotion/promotion.module').then( m => m.PromotionPageModule)
  },
  {
    path: 'accountsettings',
    loadChildren: () => import('./accountsettings/accountsettings.module').then( m => m.AccountsettingsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'accountinfo',
    loadChildren: () => import('./accountinfo/accountinfo.module').then( m => m.AccountinfoPageModule)
  },
  {
    path: 'linkwithbank',
    loadChildren: () => import('./linkwithbank/linkwithbank.module').then( m => m.LinkwithbankPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'changepin',
    loadChildren: () => import('./changepin/changepin.module').then( m => m.ChangepinPageModule)
  },
  {
    path: 'transactionhistory',
    loadChildren: () => import('./transactionhistory/transactionhistory.module').then( m => m.TransactionhistoryPageModule)
  },
  {
    path: 'transactiondetail',
    loadChildren: () => import('./transactiondetail/transactiondetail.module').then( m => m.TransactiondetailPageModule)
  },
  {
    path: 'favoritetransfers',
    loadChildren: () => import('./favoritetransfers/favoritetransfers.module').then( m => m.FavoritetransfersPageModule)
  },
  {
    path: 'invite',
    loadChildren: () => import('./invite/invite.module').then( m => m.InvitePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'sendmoney',
    loadChildren: () => import('./sendmoney/sendmoney.module').then( m => m.SendmoneyPageModule)
  },
  {
    path: 'sendmoneyqwallet',
    loadChildren: () => import('./sendmoneyqwallet/sendmoneyqwallet.module').then( m => m.SendmoneyqwalletPageModule)
  },
  {
    path: 'sendmoneyqwalletfin',
    loadChildren: () => import('./sendmoneyqwalletfin/sendmoneyqwalletfin.module').then( m => m.SendmoneyqwalletfinPageModule)
  },
  {
    path: 'sendmoneycnic',
    loadChildren: () => import('./sendmoneycnic/sendmoneycnic.module').then( m => m.SendmoneycnicPageModule)
  },
  {
    path: 'sendmoneybank',
    loadChildren: () => import('./sendmoneybank/sendmoneybank.module').then( m => m.SendmoneybankPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'qload',
    loadChildren: () => import('./qload/qload.module').then( m => m.QloadPageModule)
  },
  {
    path: 'qloadnext',
    loadChildren: () => import('./qloadnext/qloadnext.module').then( m => m.QloadnextPageModule)
  },
  {
    path: 'qbundlefin',
    loadChildren: () => import('./qbundlefin/qbundlefin.module').then( m => m.QbundlefinPageModule)
  },
  {
    path: 'morewidgets',
    loadChildren: () => import('./morewidgets/morewidgets.module').then( m => m.MorewidgetsPageModule)
  },
  {
    path: 'selectpayment',
    loadChildren: () => import('./selectpayment/selectpayment.module').then( m => m.SelectpaymentPageModule)
  },
  {
    path: 'electric',
    loadChildren: () => import('./electric/electric.module').then( m => m.ElectricPageModule)
  },
  {
    path: 'barkiyat',
    loadChildren: () => import('./barkiyat/barkiyat.module').then( m => m.BarkiyatPageModule)
  },
  {
    path: 'barkiyatnext',
    loadChildren: () => import('./barkiyatnext/barkiyatnext.module').then( m => m.BarkiyatnextPageModule)
  },
  {
    path: 'profiletab',
    loadChildren: () => import('./profiletab/profiletab.module').then( m => m.ProfiletabPageModule)
  },
  {
    path: 'gifts',
    loadChildren: () => import('./gifts/gifts.module').then( m => m.GiftsPageModule)
  },
  {
    path: 'giftstransaction',
    loadChildren: () => import('./giftstransaction/giftstransaction.module').then( m => m.GiftstransactionPageModule)
  },
  {
    path: 'discounts',
    loadChildren: () => import('./discounts/discounts.module').then( m => m.DiscountsPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'donatenow',
    loadChildren: () => import('./donatenow/donatenow.module').then( m => m.DonatenowPageModule)
  },
  {
    path: 'askus',
    loadChildren: () => import('./askus/askus.module').then( m => m.AskusPageModule)
  },
  {
    path: 'donationtransaction',
    loadChildren: () => import('./donationtransaction/donationtransaction.module').then( m => m.DonationtransactionPageModule)
  },
  {
    path: 'shortcuts',
    loadChildren: () => import('./shortcuts/shortcuts.module').then( m => m.ShortcutsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesPageModule)
  },
  {
    path: 'phonenumber',
    loadChildren: () => import('./phonenumber/phonenumber.module').then( m => m.PhonenumberPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
