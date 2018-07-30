import { Injectable } from '@angular/core';

@Injectable()
export class IdeaGenService {

  constructor() {  
  }
  

  callGoogleSheet(link):any{
    fetch(link).then((res)=>{
      console.log(res.json())
      return res.json();
    }).catch((err)=>{
      console.log(err);
      return err;
    })
  }

  getSubCategoryKey(subCategory) {
    let subCategoryKey;
    switch (subCategory) {
      case 'Marketing':
        subCategoryKey = 'keyMarketing';
        break;
      case 'Collaborative Software':
        subCategoryKey = 'keyCollaborativeSoftware';
        break;
      case 'CRM':
        subCategoryKey = 'keyCRM';
        break;

      case 'Higher Education':
        subCategoryKey = 'keyHigherEducation';
        break;

      case 'Venture Capital':
        subCategoryKey = 'keyVentureCapital';
        break;
      case 'Banking':
        subCategoryKey = 'keyBanking';
        break;
      case 'Mortgage and Loans':
        subCategoryKey = 'keyMortgageand Loans';
        break;
      case 'Mutual Funds':
        subCategoryKey = 'keyMutualFunds';
        break;

      case 'Health Insurance':
        subCategoryKey = 'keyHealthInsurance';
        break;
      case 'Vehicle Insurance':
        subCategoryKey = 'keyVehicleInsurance';
        break;
      case 'Life Insurance':
        subCategoryKey = 'keyLifeInsurance';
        break;
      case 'Fire Insurance':
        subCategoryKey = 'keyFireInsurance';
        break;

      case 'B2B':
        subCategoryKey = 'keyB2B';
        break;
      case 'B2C':
        subCategoryKey = 'keyB2C';
        break;

      case 'Subscription-based Content':
        subCategoryKey = 'keySubscription-basedContent';
        break;
      case 'News & Journalism':
        subCategoryKey = 'keyNews& Journalism';
        break;
    }
    return subCategoryKey;
  }
  
}
