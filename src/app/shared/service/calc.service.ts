
import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {
public calcs;
  constructor() {

   this.calcs = [
    {
        "id": "auto-loan",
        "Name": "Auto Loan Calculator",
        "Published Link": "https://premade.outgrow.us/Auto-Loan-Calc",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/auto+loan+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Auto",
        "Description": "Find out how much monthly installment you'll be paying on your auto loan.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"calculator"
    },
    {
        "id": "auto-lease",
        "Name": "Auto Lease Calculator",
        "Published Link": "https://premade.outgrow.us/Car-Lease-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/car+lease+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Auto",
        "Description": "Calculate the monthly lease payment on your next car.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"calculator"
    },
    {
        "id": "early-payment",
        "Name": "Early Payment Calculator",
        "Published Link": "https://premade.outgrow.us/Early-Payment-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/early+payment+calculator.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Auto",
        "Description": "How much extra monthly payment will you need to make to shorten your car loan term?",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"calculator"
    },
    {
        "id": "put-down",
        "Name": "How much should I put down?",
        "Published Link": "https://premade.outgrow.us/Downpayment-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/downpayment+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Auto",
        "Description": "Find out the downpayment amount you'll need to purchase your new home.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"calculator"
    },
    {
        "id": "calculate-net-cost",
        "Name": "Calculate the total REAL net cost of your college degree.",
        "Published Link": "https://premade.outgrow.us/Real-NET-college-degree-cost",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+is+college+really+going+to+cost+you.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "Education",
        "Description": "Find out how much is college really going to cost you.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"calculator"
    },
    {
        "id": "student-budget",
        "Name": "Student Budget Calculator",
        "Published Link": "https://premade.outgrow.us/student-budget-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+student+budget.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "Education",
        "Description": "Use this calculator to calculate your budget as a full-time student.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"calculator"
    },
    {
        "id": "harvard-background",
        "Name": "What is a good enough score to get into Harvard with your background?",
        "Published Link": "https://premade.outgrow.us/Harvard-Minimum-Score-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/chances+of+getting+into+harvard.gif",
        "Type": "Calculator",
        "Layout": "Greek",
        "Industry": "Education",
        "Description": "Find out if your SAT or ACT scores are good enough to land you in Harvard.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"calculator"
    },
    {
        "id": "mortgage-calc",
        "Name": "The quintessential mortage calculator!",
        "Published Link": "https://premade.outgrow.us/Copy-of-The-quintessential-mortgage-calculator-1",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/mortgage+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Finance",
        "Description": "Calculate your monthly mortgage payment.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"calculator"
    },
    {
        "id": "home-budget",
        "Name": "Home Budget Calculator",
        "Published Link": "https://premade.outgrow.us/Home-Budget-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+monthly+home+budget.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Finance",
        "Description": "Calculate your monthly home budget and find how much you are saving each month.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"calculator"
    },
    {
        "id": "retire-need",
        "Name": "How much do you need to retire?",
        "Published Link": "https://premade.outgrow.us/How-much-do-you-need-to-retire",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+do+you+need+to+retire.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Finance",
        "Description": "How much money do you need if you want to retire?",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"calculator"
    },
    {
        "id": "save-million",
        "Name": "SAVE A MILLION DOLLARS CALCULATOR",
        "Published Link": "https://premade.outgrow.us/When-can-you-become-a-millionaire",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/when+can+you+become+a+millionaire.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Finance",
        "Description": "Find out when you will become a millionaire!",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"calculator"
    },
    {
        "id": "saving-goal",
        "Name": "Savings goal calculator",
        "Published Link": "https://premade.outgrow.us/Saving-goal-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/savings+goal+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Finance",
        "Description": "Set your savings goal today and find out how much you need to invest every month to achieve that goal.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"calculator"
    },
    {
        "id": "retirement-balance",
        "Name": "What will be my 401(k) balance at retirement?",
        "Published Link": "https://premade.outgrow.us/401k-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+will+be+my+401k+balance+at+retirement.gif",
        "Type": "Calculator",
        "Layout": "Seattle",
        "Industry": "Finance",
        "Description": "Find out how much balance will you have in your 401(k) at retirement.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"calculator"
    },
    {
        "id": "credit-card",
        "Name": "How long will it take to pay off my credit card?",
        "Published Link": "https://premade.outgrow.us/credit-card-pay-off-calc",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+long+will+it+take+to+payoff+my+credit+card.gif",
        "Type": "Calculator",
        "Layout": "Seattle",
        "Industry": "Finance",
        "Description": "Find out how long will you take to payoff your credit card.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"calculator"
    },
    {
        "id": "calc-weight",
        "Name": "Weight Loss Calculator",
        "Published Link": "https://premade.outgrow.us/weightloss-calc",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Weightloss+Calc.gif",
        "Type": "Calculator",
        "Layout": "Greek",
        "Industry": "health-fitness",
        "Description": "Set your weight loss target and find out how much calories you need to reduce every day.",
        "filters": [
            "filter-auto",
            "health-fitness"
        ],
        "route":"calculator"
    },
    {
        "id": "calories-calc",
        "Name": "Calories Calculator",
        "Published Link": "https://premade.outgrow.us/calories-calc",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calories+calculator.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "health-fitness",
        "Description": "FInd out the ideal number of calories you should be consuming every day.",
        "filters": [
            "filter-auto",
            "health-fitness"
        ],
        "route":"calculator"
    },
    {
        "id": "heart-disease",
        "Name": "What is your risk of getting a heart disease?",
        "Published Link": "https://premade.outgrow.us/heart-disease-calc",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+is+your+risk+of+getting+a+heart+disease.gif",
        "Type": "Calculator",
        "Layout": "Greek",
        "Industry": "health-fitness",
        "Description": "Find out if you are at risk of a heart attack or a stroke.",
        "filters": [
            "filter-auto",
            "health-fitness"
        ],
        "route":"calculator"
    },
    {
        "id": "protein-need",
        "Name": "How much daily protein do I need?",
        "Published Link": "https://premade.outgrow.us/daily-protein-requirement-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+daily+protein+do+i+need.gif",
        "Type": "Calculator",
        "Layout": "Seattle",
        "Industry": "health-fitness",
        "Description": "Get your recommended daily protein intake.",
        "filters": [
            "filter-auto",
            "health-fitness"
        ],
        "route":"calculator"
    },
    {
        "id": "ideal-weight-calc",
        "Name": "Ideal Weight Calculator",
        "Published Link": "https://premade.outgrow.us/ideal-weight-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/ideal+weight+calculator.gif",
        "Type": "Calculator",
        "Layout": "Seattle",
        "Industry": "health-fitness",
        "Description": "Find your ideal bodyweight.",
        "filters": [
            "filter-auto",
            "health-fitness"
        ],
        "route":"calculator"
    },
    {
        "id": "consultant-house",
        "Name": "Calculate how much hiring an expert consultant will save you versus running PPC in house.",
        "Published Link": "https://premade.outgrow.us/ppc-agency-vs-inhouse-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/PPC+vs+in-house.gif",
        "Type": "Calculator",
        "Layout": "Chicago",
        "Industry": "marketing-advertising",
        "Description": "Find out whether you should go for a PPC agency or build an in-house team.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"calculator"
    },
    {
        "id": "paid-advertising",
        "Name": "How much should you spend on paid advertising?",
        "Published Link": "https://premade.outgrow.us/how-much-should-you-spend-on-paid-advertising",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+should+you+spend+on+paid+advertising.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "marketing-advertising",
        "Description": "Find out how much you should spend on Paid Advertising.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"calculator"
    },
    {
        "id": "marketing-roi",
        "Name": "ROI of your Marketing Strategy",
        "Published Link": "https://premade.outgrow.us/ROI-of-your-Email-Marketing-Strategy",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+your+email+marketing+strategy.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "marketing-advertising",
        "Description": "Estimate the ROI of your current email marketing strategy.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"calculator"
    },
    {
        "id": "blogging-frequency",
        "Name": "Blogging Frequency Calculator",
        "Published Link": "https://premade.outgrow.us/blogging-frequency-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+often+should+you+blog.gif",
        "Type": "Calculator",
        "Layout": "Chicago",
        "Industry": "marketing-advertising",
        "Description": "Find out how often you should be blogging and how much you stand to gain from it.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"calculator"
    },
    {
        "id": "roi-outgrow",
        "Name": "Check how high of a ROI you can get with Outgrow!",
        "Published Link": "https://premade.outgrow.us/roi-of-using-outgrow",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+using+outgrow.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Quintessential",
        "Description": "Estimate the ROI you will get from using Outgrow.",
        "filters": [
            "filter-auto",
            "Quintessential"
        ],
        "route":"calculator"
    },
    {
        "id": "resale-property",
        "Name": "Find out the resale value of your property",
        "Published Link": "https://premade.outgrow.us/how-much-will-you-make-by-selling-your-property",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+will+you+make+from+selling+your+property.gif",
        "Type": "Calculator",
        "Layout": "Stockholm",
        "Industry": "Real Estate & Construction",
        "Description": "Enter some details about your property and find out how much you will make by selling it.",
        "filters": [
            "filter-auto",
            "Real Estate & Construction"
        ],
        "route":"calculator"
    },
    {
        "Name": "How much does it cost to build a pool?",
        "Published Link": "https://premade.outgrow.us/cost-of-building-a-pool",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/cost+of+building+a+pool.gif",
        "Type": "Calculator",
        "Layout": "Chicago",
        "Industry": "construction",
        "Description": "Find out how much you will need to shell out for your dream pool.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"calculator"
    },
    {
        "id": "house-afford",
        "Name": "How much house can I afford?",
        "Published Link": "https://premade.outgrow.us/how-much-house-can-I-afford",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+house+can+i+afford.gif",
        "Type": "Calculator",
        "Layout": "Greek",
        "Industry": "construction",
        "Description": "Enter your details to find out the house value that fits within your budget.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"calculator"
    },
    {
        "id": "rent-buy-home",
        "Name": "See how much it would cost you to rent instead of buying a home.",
        "Published Link": "https://premade.outgrow.us/renting-vs-buying-cost-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/buying+vs+renting+calculator.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "construction",
        "Description": "See how much it would cost you to rent instead of buying a house.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"calculator"
    },






    {
        "id": "new-car-used-car",
        "Name": "New Car vs Used Car",
        "Published Link": "https://premade.outgrow.us/New-Car-vs-Used-Car",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif",
        "Type": "Outcome Quiz",
        "Layout": "Chicago",
        "Industry": "Auto",
        "Description": "Find out whether you should buy a used card or a new one.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"increase-sales"
    },
    {
        "id": "buy-rent",
        "Name": "Should i buy or rent a car?",
        "Published Link": "https://premade.outgrow.us/Buy-Or-Lease-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/should+you+buy+or+lease+your+next+car.gif",
        "Type": "Outcome Quiz",
        "Layout": "Chicago",
        "Industry": "Auto",
        "Tier": "",
        "Description": "Answer 6 questions to find out whether you should buy or lease your next car.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"increase-sales"
    },
    {
        "id": "auto-loan",
        "Name": "Auto Loan Calculator",
        "Published Link": "https://premade.outgrow.us/Auto-Loan-Calc",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/auto+loan+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Auto",
        "Tier": "",
        "Description": "Find out how much monthly installment you'll be paying on your auto loan.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"increase-sales"
    },
    {
        "id": "early-payment",
        "Name": "Early Payment Calculator",
        "Published Link": "https://premade.outgrow.us/Early-Payment-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/early+payment+calculator.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Auto",
        "Tier": "",
        "Description": "How much extra monthly payment will you need to make to shorten your car loan term?",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"increase-sales"
    },
    {
        "id": "put-down",
        "Name": "How much should I put down?",
        "Published Link": "https://premade.outgrow.us/Downpayment-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/downpayment+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Auto",
        "Tier": "",
        "Description": "Find out the downpayment amount you'll need to purchase your new home.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"increase-sales"
    },
    {
        "id": "type-car",
        "Name": "Which type of car is best suited to my use case?",
        "Published Link": "https://premade.outgrow.us/what-car-should-you-go-for",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+kind+of+car+should+you+buy.gif",
        "Type": "Outcome Quiz",
        "Layout": "Chicago",
        "Industry": "Auto",
        "Tier": "",
        "Description": "Find out which car suits you the best.",
        "filters": [
            "filter-auto",
            "Auto"
        ],
        "route":"increase-sales"
    },
    {
        "id": "ivy-league",
        "Name": "Which Ivy League is best for me?",
        "Published Link": "https://premade.outgrow.us/which-ivy-league-is-best-for-you",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+ivy+league+is+best+for+you.gif",
        "Type": "Outcome Quiz",
        "Layout": "Chicago",
        "Industry": "Education",
        "Tier": "",
        "Description": "Answer 9 simple questions to find out which Ivy League college is best for you.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"increase-sales"
    },
    {
        "id": "college-degree",
        "Name": "Calculate the total REAL net cost of your college degree.",
        "Published Link": "https://premade.outgrow.us/Real-NET-college-degree-cost",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+is+college+really+going+to+cost+you.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "Education",
        "Tier": "",
        "Description": "Find out how much is college really going to cost you.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"increase-sales"
    },
    {
        "id": "budget-calc",
        "Name": "Student Budget Calculator",
        "Published Link": "https://premade.outgrow.us/student-budget-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+student+budget.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "Education",
        "Tier": "",
        "Description": "Use this calculator to calculate your budget as a full-time student.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"increase-sales"
    },
    {
        "id": "harvard",
        "Name": "What is a good enough score to get into Harvard with your background?",
        "Published Link": "https://premade.outgrow.us/Harvard-Minimum-Score-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/chances+of+getting+into+harvard.gif",
        "Type": "Calculator",
        "Layout": "Greek",
        "Industry": "Education",
        "Tier": "",
        "Description": "Find out if your SAT or ACT scores are good enough to land you in Harvard.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"increase-sales"
    },
    {
        "id": "major-study",
        "Name": "Which major should I study?",
        "Published Link": "https://premade.outgrow.us/What-major-should-i-study",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+major.gif",
        "Type": "Outcome Quiz",
        "Layout": "Stockholm",
        "Industry": "Education",
        "Tier": "",
        "Description": "Find out which major should you study.",
        "filters": [
            "filter-auto",
            "Education"
        ],
        "route":"increase-sales"
    },
    {
        "id": "mortgage",
        "Name": "The quintessential mortage calculator!",
        "Published Link": "https://premade.outgrow.us/Copy-of-The-quintessential-mortgage-calculator-1",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/mortgage+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Finance",
        "Tier": "",
        "Description": "Calculate your monthly mortgage payment.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"increase-sales"
    },
    {
        "id": "home-budget",
        "Name": "Home Budget Calculator",
        "Published Link": "https://premade.outgrow.us/Home-Budget-Calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+monthly+home+budget.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Finance",
        "Tier": "",
        "Description": "Calculate your monthly home budget and find how much you are saving each month.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"increase-sales"
    },
    {
        "id": "retire",
        "Name": "How much do you need to retire?",
        "Published Link": "https://premade.outgrow.us/How-much-do-you-need-to-retire",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+do+you+need+to+retire.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Finance",
        "Tier": "",
        "Description": "How much money do you need if you want to retire?",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"increase-sales"
    },
    {
        "id": "save-million",
        "Name": "SAVE A MILLION DOLLARS CALCULATOR",
        "Published Link": "https://premade.outgrow.us/When-can-you-become-a-millionaire",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/when+can+you+become+a+millionaire.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "Finance",
        "Tier": "",
        "Description": "Find out when you will become a millionaire!",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"increase-sales"
    },
    {
        "id": "savings-goal",
        "Name": "Savings goal calculator",
        "Published Link": "https://premade.outgrow.us/Saving-goal-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/savings+goal+calculator.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Finance",
        "Tier": "",
        "Description": "Set your savings goal today and find out how much you need to invest every month to achieve that goal.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"increase-sales"
    },
    {
        "id": "balance-retirement",
        "Name": "What will be my 401(k) balance at retirement?",
        "Published Link": "https://premade.outgrow.us/401k-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+will+be+my+401k+balance+at+retirement.gif",
        "Type": "Calculator",
        "Layout": "Seattle",
        "Industry": "Finance",
        "Tier": "",
        "Description": "Find out how much balance will you have in your 401(k) at retirement.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"increase-sales"
    },
    {
        "id": "credit-card",
        "Name": "How long will it take to pay off my credit card?",
        "Published Link": "https://premade.outgrow.us/credit-card-pay-off-calc",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+long+will+it+take+to+payoff+my+credit+card.gif",
        "Type": "Calculator",
        "Layout": "Seattle",
        "Industry": "Finance",
        "Tier": "",
        "Description": "Find out how long will you take to payoff your credit card.",
        "filters": [
            "filter-auto",
            "Finance"
        ],
        "route":"increase-sales"
    },
    {
        "id": "digital",
        "Name": "What is your digital quotient?",
        "Published Link": "https://premade.outgrow.us/digital-quotient-quiz",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/find+out+your+digital+quotient.gif",
        "Type": "Graded Quiz",
        "Layout": "Stockholm",
        "Industry": "marketing-advertising",
        "Tier": "",
        "Description": "Find out your Digital Quotient.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"increase-sales"
    },
    {
        "id": "seo-quiz",
        "Name": "Find out where you stand amongst 5000 marketers on this SEO quiz!",
        "Published Link": "https://premade.outgrow.us/grade_your_seo_knowledge",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/SEO+knowledge+quiz.gif",
        "Type": "Graded Quiz",
        "Layout": "Stockholm",
        "Industry": "marketing-advertising",
        "Tier": "",
        "Description": "Find out if your SEO knowledge stacks up against top the 150 marketers with this 12-question SEO quiz.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"increase-sales"
    },
    {
        "id": "expert",
        "Name": "Calculate how much hiring an expert consultant will save you versus running PPC in house.",
        "Published Link": "https://premade.outgrow.us/ppc-agency-vs-inhouse-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/PPC+vs+in-house.gif",
        "Type": "Calculator",
        "Layout": "Chicago",
        "Industry": "marketing-advertising",
        "Tier": "",
        "Description": "Find out whether you should go for a PPC agency or build an in-house team.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"increase-sales"
    },
    {
        "id": "facebook-marketing",
        "Name": "You think you are a Facebook Marketing expert? Take this quiz to really find out!",
        "Published Link": "https://premade.outgrow.us/facebook-marketing-expert-quiz",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/are+you+really+a+facebook+marketing+expert.gif",
        "Type": "Graded Quiz",
        "Layout": "Stockholm",
        "Industry": "marketing-advertising",
        "Tier": "",
        "Description": "Take this quiz to find out if you are a Facebook Marketing Expert.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"increase-sales"
    },
    {
        "id": "paid-advertsing",
        "Name": "How much should you spend on paid advertising?",
        "Published Link": "https://premade.outgrow.us/how-much-should-you-spend-on-paid-advertising",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+should+you+spend+on+paid+advertising.gif",
        "Type": "Calculator",
        "Layout": "Tokyo",
        "Industry": "marketing-advertising",
        "Tier": "",
        "Description": "Find out how much you should spend on Paid Advertising.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"increase-sales"
    },
    {
        "id": "roi-marketing",
        "Name": "ROI of your Marketing Strategy",
        "Published Link": "https://premade.outgrow.us/ROI-of-your-Email-Marketing-Strategy",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+your+email+marketing+strategy.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "marketing-advertising",
        "Tier": "",
        "Description": "Estimate the ROI of your current email marketing strategy.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"increase-sales"
    },
    {
        "id": "blogging-frequency",
        "Name": "Blogging Frequency Calculator",
        "Published Link": "https://premade.outgrow.us/blogging-frequency-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+often+should+you+blog.gif",
        "Type": "Calculator",
        "Layout": "Chicago",
        "Industry": "marketing-advertising",
        "Tier": "",
        "Description": "Find out how often you should be blogging and how much you stand to gain from it.",
        "filters": [
            "filter-auto",
            "marketing-advertising"
        ],
        "route":"increase-sales"
    },
    {
        "id": "high-roi",
        "Name": "Check how high of a ROI you can get with Outgrow!",
        "Published Link": "https://premade.outgrow.us/roi-of-using-outgrow",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+using+outgrow.gif",
        "Type": "Calculator",
        "Layout": "Londoner",
        "Industry": "Quintessential",
        "Tier": "",
        "Description": "Estimate the ROI you will get from using Outgrow.",
        "filters": [
            "filter-auto",
            "Quintessential"
        ],
        "route":"increase-sales"
    },
    {
        "id": "resale-value-property",
        "Name": "Find out the resale value of your property",
        "Published Link": "https://premade.outgrow.us/how-much-will-you-make-by-selling-your-property",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+will+you+make+from+selling+your+property.gif",
        "Type": "Calculator",
        "Layout": "Stockholm",
        "Industry": "construction",
        "Tier": "",
        "Description": "Enter some details about your property and find out how much you will make by selling it.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"increase-sales"
    },
    {
        "id": "build-pool",
        "Name": "How much does it cost to build a pool?",
        "Published Link": "https://premade.outgrow.us/cost-of-building-a-pool",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/cost+of+building+a+pool.gif",
        "Type": "Calculator",
        "Layout": "Chicago",
        "Industry": "construction",
        "Tier": "",
        "Description": "Find out how much you will need to shell out for your dream pool.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"increase-sales"
    },
    {
        "id": "buy-or-rent",
        "Name": "Should I buy or rent?",
        "Published Link": "https://premade.outgrow.us/should-i-buy-or-rent",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Buy+Or+Rent.gif",
        "Type": "Outcome Quiz",
        "Layout": "Stockholm",
        "Industry": "construction",
        "Tier": "",
        "Description": "Find out if you should buy or rent your next accomodation.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"increase-sales"
    },
    {
        "id": "house-afford",
        "Name": "How much house can I afford?",
        "Published Link": "https://premade.outgrow.us/how-much-house-can-I-afford",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+house+can+i+afford.gif",
        "Type": "Calculator",
        "Layout": "Greek",
        "Industry": "construction",
        "Tier": "",
        "Description": "Enter your details to find out the house value that fits within your budget.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"increase-sales"
    },
    {
        "id": "buying-home",
        "Name": "See how much it would cost you to rent instead of buying a home.",
        "Published Link": "https://premade.outgrow.us/renting-vs-buying-cost-calculator",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/buying+vs+renting+calculator.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "construction",
        "Tier": "",
        "Description": "See how much it would cost you to rent instead of buying a house.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"increase-sales"
    },
    {
        "id": "real-estate",
        "Name": "You shouldn't buy real estate unless you pass this ultimate buyer quiz!",
        "Published Link": "https://premade.outgrow.us/ultimate-buyer-quiz",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/real+estate+buying+quiz.gif",
        "Type": "Graded Quiz",
        "Layout": "Chicago",
        "Industry": "construction",
        "Tier": "",
        "Description": "Take this quiz to find out if you are ready to buy a house.",
        "filters": [
            "filter-auto",
            "construction"
        ],
        "route":"increase-sales"
    },
    {
        "id": "saas",
        "Name": "Are you leveraging SaaS right? Calculate the efficacy of your tech dollars.",
        "Published Link": "https://premade.outgrow.us/Health-SaaS-metrics",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+healthy+is+your+saas+business.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "Technology",
        "Tier": "",
        "Description": "Find out if your SaaS business is in a healthy condition.",
        "filters": [
            "filter-auto",
            "Technology"
        ],
        "route":"increase-sales"
    },
    {
        "id": "calculate-efficiency",
        "Name": "Calculate how much efficiency you stand to gain by shifting to an automated payroll solution.",
        "Published Link": "https://premade.outgrow.us/savings-from-Payroll-System",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+can+your+company+save+with+payroll+system.gif",
        "Type": "Calculator",
        "Layout": "Stockholm",
        "Industry": "Technology",
        "Tier": "",
        "Description": "Find out how much your company can save with a payroll system.",
        "filters": [
            "filter-auto",
            "Technology"
        ],
        "route":"increase-sales"
    },
    {
        "id": "build-app",
        "Name": "How much to build an app?",
        "Published Link": "https://premade.outgrow.us/How-much-to-build-an-app1",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+to+build+an+app.gif",
        "Type": "Calculator",
        "Layout": "Madrid",
        "Industry": "Technology",
        "Tier": "",
        "Description": "Get an estimate of how much you will need to build the app that you want.",
        "filters": [
            "filter-auto",
            "Technology"
        ],
        "route":"increase-sales"
    },
    {
        "id": "friends-character",
        "Name": "Which Friends character are you?",
        "Published Link": "https://premade.outgrow.us/which-friends-character-are-you",
        "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+friends+character+are+you.gif",
        "Type": "Outcome Quiz",
        "Layout": "Chicago",
        "Industry": "Entertainment",
        "Tier": "",
        "Description": "Find out which Friends character are you most like.",
        "filters": [
            "filter-auto",
            "Entertainment"
        ],
        "route":"increase-sales"
    },


    {
      "id": "used-car-new-car",
      "Name": "New Car vs Used Car",
      "Published Link": "https://premade.outgrow.us/New-Car-vs-Used-Car",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Auto",
      "Description": "Find out whether you should buy a used card or a new one.",
      "filters": [
          "filter-auto",
          "Auto"
      ],
      "route":"quiz"
  },
  {
      "id": "car-rent-buy",
      "Name": "Should i buy or rent a car?",
      "Published Link": "https://premade.outgrow.us/Buy-Or-Lease-Calculator",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/should+you+buy+or+lease+your+next+car.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Auto",
      "Description": "Answer 6 questions to find out whether you should buy or lease your next car.",
      "filters": [
          "filter-auto",
          "Auto"
      ],
      "route":"quiz"
  },
  {
      "id": "type-car",
      "Name": "Which type of car is best suited to my use case?",
      "Published Link": "https://premade.outgrow.us/what-car-should-you-go-for",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+kind+of+car+should+you+buy.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Auto",
      "Description": "Find out which car suits you the best.",
      "filters": [
          "filter-auto",
          "Auto"
      ],
      "route":"quiz"
  },
  {
      "id": "ivy-league",
      "Name": "Which Ivy League is best for me?",
      "Published Link": "https://premade.outgrow.us/which-ivy-league-is-best-for-you",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+ivy+league+is+best+for+you.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Education",
      "Description": "Answer 9 simple questions to find out which Ivy League college is best for you.",
      "filters": [
          "filter-auto",
          "Education"
      ],
      "route":"quiz"
  },
  {
      "id": "study-major",
      "Name": "Which major should I study?",
      "Published Link": "https://premade.outgrow.us/What-major-should-i-study",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+major.gif",
      "Type": "Outcome Quiz",
      "Layout": "Stockholm",
      "Industry": "Education",
      "Description": "Find out which major should you study.",
      "filters": [
          "filter-auto",
          "Education"
      ],
      "route":"quiz"
  },
  {
      "id": "sport-right",
      "Name": "Which sport is right for my fitness goals?",
      "Published Link": "https://premade.outgrow.us/sport-quiz",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Sports+quiz.gif",
      "Type": "Outcome Quiz",
      "Layout": "Stockholm",
      "Industry": "health-fitness",
      "Description": "Find out which sport will be best suited for you.",
      "filters": [
          "filter-auto",
          "health-fitness"
      ],
      "route":"quiz"
  },
  {
      "id": "yoga-right",
      "Name": "Which type of Yoga is right for me?",
      "Published Link": "https://premade.outgrow.us/yoga",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+type+of+yoga+is+right+for+me.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "health-fitness",
      "Description": "Find out which yoga practice will deliver the results you want and is best suited for your physical condition",
      "filters": [
          "filter-auto",
          "health-fitness"
      ],
      "route":"quiz"
  },
  {
      "id": "rent-buy",
      "Name": "Should I buy or rent?",
      "Published Link": "https://premade.outgrow.us/should-i-buy-or-rent",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Buy+Or+Rent.gif",
      "Type": "Outcome Quiz",
      "Layout": "Stockholm",
      "Industry": "construction",
      "Description": "Find out if you should buy or rent your next accomodation.",
      "filters": [
          "filter-auto",
          "construction"
      ],
      "route":"quiz"
  },
  {
      "id": "summer-quiz",
      "Name": "The ultimate summer destination quiz!",
      "Published Link": "https://premade.outgrow.us/ultimate-summer-destination-quiz",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/ultimate+summer+destination+quiz.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Travel",
      "Description": "Find out which summer destination should you be heading out to.",
      "filters": [
          "filter-auto",
          "Travel"
      ],
      "route":"quiz"
  },
  {
      "id": "friends-character",
      "Name": "Which Friends character are you?",
      "Published Link": "https://premade.outgrow.us/which-friends-character-are-you",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+friends+character+are+you.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Entertainment",
      "Description": "Find out which Friends character are you most like.",
      "filters": [
          "filter-auto",
          "Entertainment"
      ],
      "route":"quiz"
  },
  {
      "id": "olympic-controversy",
      "Name": "Which 2018 Winter Olympics Controversy Are You?",
      "Published Link": "https://premade.outgrow.us/premade-839",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Which+2018+Winter+Olympics+Controversy+Are+You.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Trending",
      "Description": "The 2018 Winter Olympics has been in the storm of controversies. Find out which one would you be!",
      "filters": [
          "filter-auto",
          "Trending"
      ],
      "route":"quiz"
  },
  {
      "id": "destination-quiz",
      "Name": "The Ultimate Expat Destination Quiz",
      "Published Link": "https://premade.outgrow.us/premade-838",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/The+Ultimate+Expat+Destination+Quiz.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Trending",
      "Description": "Find out the expat destination most suitable for you!",
      "filters": [
          "filter-auto",
          "Trending"
      ],
      "route":"quiz"
  },
  {
      "id": "oscar-nominee",
      "Name": "Which Oscar Best Picture Nominee are you?",
      "Published Link": "https://premade.outgrow.us/premade-842",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Which+Oscar+Best+Picture+Nominee+are+you.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Trending",
      "Description": "There are 9 Best Picture nominations this year. Find out which of them are you likely to be!",
      "filters": [
          "filter-auto",
          "Trending"
      ],
      "route":"quiz"
  },
  {
      "id": "chinese-flower",
      "Name": "Find out your Chinese New Year Flower",
      "Published Link": "https://premade.outgrow.us/premade-847",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Find+out+your+Chinese+New+Year+Flower.gif",
      "Type": "Outcome Quiz",
      "Layout": "Chicago",
      "Industry": "Trending",
      "Tier": "",
      "Description": "The Lunar New Year celebrations involve a lot of floral decorations. Find out which one suits you the best. ",
      "filters": [
          "filter-auto",
          "Trending"
      ],
      "route":"quiz"
  },
  {
      "id": "black-panther",
      "Name": "Are you as Posh as Black Panther?",
      "Published Link": "https://premade.outgrow.us/premade-873",
      "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Are+you+as+Posh+as+Black+Panther.gif",
      "Type": "Outcome Quiz",
      "Layout": "Stockholm",
      "Industry": "Trending",
      "Description": "Find out how posh you are compared to one of the wealthiest fictional characters of all time.",
      "filters": [
          "filter-auto",
          "Trending"
      ],
      "route":"quiz"
  },



  {
    "id": "car-game",
    "Name": "Are you ready to buy a car? Find out if you truly understand the game!",
    "Published Link": "https://premade.outgrow.us/Are-You-Ready-to-Buy-a-Car",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/are+you+ready+to+buy+a+car.gif",
    "Type": "Graded Quiz",
    "Layout": "Chicago",
    "Industry": "Auto",
    "Description": "Find out if you're ready to buy a car.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"survey"
},
{
    "id": "fitness-regime",
    "Name": "You need to take this quiz before starting your fitness regime. If you fail maybe you'll break your back.",
    "Published Link": "https://premade.outgrow.us/fitness-regime-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/fitness+regime+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "health-fitness",
    "Description": "Find out if you know enough before jumping into your new fitness regime.",
    "filters": [
        "filter-auto",
        "health-fitness"
    ],
    "route":"survey"
},
{
    "id": "digital-quotient",
    "Name": "What is your digital quotient?",
    "Published Link": "https://premade.outgrow.us/digital-quotient-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/find+out+your+digital+quotient.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Description": "Find out your Digital Quotient.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"survey"
},
{
    "id": "marketers-quiz",
    "Name": "Find out where you stand amongst 5000 marketers on this SEO quiz!",
    "Published Link": "https://premade.outgrow.us/grade_your_seo_knowledge",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/SEO+knowledge+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Description": "Find out if your SEO knowledge stacks up against top the 150 marketers with this 12-question SEO quiz.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"survey"
},
{
    "id": "facebook-marketing",
    "Name": "You think you are a Facebook Marketing expert? Take this quiz to really find out!",
    "Published Link": "https://premade.outgrow.us/facebook-marketing-expert-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/are+you+really+a+facebook+marketing+expert.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Description": "Take this quiz to find out if you are a Facebook Marketing Expert.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"survey"
},
{
    "id": "global-warming",
    "Name": "How much do you know about global warming?",
    "Published Link": "https://premade.outgrow.us/global-warming-1",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/global+warming+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Chicago",
    "Industry": "Publishing",
    "Description": "Find out how much you know about global warming.",
    "filters": [
        "filter-auto",
        "Publishing"
    ],
    "route":"survey"
},
{
    "id": "real-estate-quiz",
    "Name": "You shouldn't buy real estate unless you pass this ultimate buyer quiz!",
    "Published Link": "https://premade.outgrow.us/ultimate-buyer-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/real+estate+buying+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Chicago",
    "Industry": "construction",
    "Description": "Take this quiz to find out if you are ready to buy a house.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"survey"
},




{
    "id": "new-car-used-car",
    "Name": "New Car vs Used Car",
    "Published Link": "https://premade.outgrow.us/New-Car-vs-Used-Car",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Auto",
    "Description": "Find out whether you should buy a used card or a new one.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-conversions"
},
{
    "id": "buy-rent",
    "Name": "Should i buy or rent a car?",
    "Published Link": "https://premade.outgrow.us/Buy-Or-Lease-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/should+you+buy+or+lease+your+next+car.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Answer 6 questions to find out whether you should buy or lease your next car.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-conversions"
},
{
    "id": "auto-loan",
    "Name": "Auto Loan Calculator",
    "Published Link": "https://premade.outgrow.us/Auto-Loan-Calc",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/auto+loan+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Find out how much monthly installment you'll be paying on your auto loan.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-conversions"
},
{
    "id": "early-payment",
    "Name": "Early Payment Calculator",
    "Published Link": "https://premade.outgrow.us/Early-Payment-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/early+payment+calculator.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Auto",
    "Tier": "",
    "Description": "How much extra monthly payment will you need to make to shorten your car loan term?",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-conversions"
},
{
    "id": "put-down",
    "Name": "How much should I put down?",
    "Published Link": "https://premade.outgrow.us/Downpayment-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/downpayment+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Find out the downpayment amount you'll need to purchase your new home.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-conversions"
},
{
    "id": "type-car",
    "Name": "Which type of car is best suited to my use case?",
    "Published Link": "https://premade.outgrow.us/what-car-should-you-go-for",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+kind+of+car+should+you+buy.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Find out which car suits you the best.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-conversions"
},
{
    "id": "ivy-league",
    "Name": "Which Ivy League is best for me?",
    "Published Link": "https://premade.outgrow.us/which-ivy-league-is-best-for-you",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+ivy+league+is+best+for+you.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Education",
    "Tier": "",
    "Description": "Answer 9 simple questions to find out which Ivy League college is best for you.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-conversions"
},
{
    "id": "college-degree",
    "Name": "Calculate the total REAL net cost of your college degree.",
    "Published Link": "https://premade.outgrow.us/Real-NET-college-degree-cost",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+is+college+really+going+to+cost+you.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Education",
    "Tier": "",
    "Description": "Find out how much is college really going to cost you.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-conversions"
},
{
    "id": "budget-calc",
    "Name": "Student Budget Calculator",
    "Published Link": "https://premade.outgrow.us/student-budget-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+student+budget.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Education",
    "Tier": "",
    "Description": "Use this calculator to calculate your budget as a full-time student.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-conversions"
},
{
    "id": "harvard",
    "Name": "What is a good enough score to get into Harvard with your background?",
    "Published Link": "https://premade.outgrow.us/Harvard-Minimum-Score-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/chances+of+getting+into+harvard.gif",
    "Type": "Calculator",
    "Layout": "Greek",
    "Industry": "Education",
    "Tier": "",
    "Description": "Find out if your SAT or ACT scores are good enough to land you in Harvard.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-conversions"
},
{
    "id": "major-study",
    "Name": "Which major should I study?",
    "Published Link": "https://premade.outgrow.us/What-major-should-i-study",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+major.gif",
    "Type": "Outcome Quiz",
    "Layout": "Stockholm",
    "Industry": "Education",
    "Tier": "",
    "Description": "Find out which major should you study.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-conversions"
},
{
    "id": "mortgage",
    "Name": "The quintessential mortage calculator!",
    "Published Link": "https://premade.outgrow.us/Copy-of-The-quintessential-mortgage-calculator-1",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/mortgage+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Calculate your monthly mortgage payment.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-conversions"
},
{
    "id": "home-budget",
    "Name": "Home Budget Calculator",
    "Published Link": "https://premade.outgrow.us/Home-Budget-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+monthly+home+budget.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Calculate your monthly home budget and find how much you are saving each month.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-conversions"
},
{
    "id": "retire",
    "Name": "How much do you need to retire?",
    "Published Link": "https://premade.outgrow.us/How-much-do-you-need-to-retire",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+do+you+need+to+retire.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Finance",
    "Tier": "",
    "Description": "How much money do you need if you want to retire?",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-conversions"
},
{
    "id": "save-million",
    "Name": "SAVE A MILLION DOLLARS CALCULATOR",
    "Published Link": "https://premade.outgrow.us/When-can-you-become-a-millionaire",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/when+can+you+become+a+millionaire.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Find out when you will become a millionaire!",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-conversions"
},
{
    "id": "savings-goal",
    "Name": "Savings goal calculator",
    "Published Link": "https://premade.outgrow.us/Saving-goal-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/savings+goal+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Set your savings goal today and find out how much you need to invest every month to achieve that goal.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-conversions"
},
{
    "id": "balance-retirement",
    "Name": "What will be my 401(k) balance at retirement?",
    "Published Link": "https://premade.outgrow.us/401k-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+will+be+my+401k+balance+at+retirement.gif",
    "Type": "Calculator",
    "Layout": "Seattle",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Find out how much balance will you have in your 401(k) at retirement.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-conversions"
},
{
    "id": "credit-card",
    "Name": "How long will it take to pay off my credit card?",
    "Published Link": "https://premade.outgrow.us/credit-card-pay-off-calc",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+long+will+it+take+to+payoff+my+credit+card.gif",
    "Type": "Calculator",
    "Layout": "Seattle",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Find out how long will you take to payoff your credit card.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-conversions"
},
{
    "id": "digital",
    "Name": "What is your digital quotient?",
    "Published Link": "https://premade.outgrow.us/digital-quotient-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/find+out+your+digital+quotient.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out your Digital Quotient.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-conversions"
},
{
    "id": "seo-quiz",
    "Name": "Find out where you stand amongst 5000 marketers on this SEO quiz!",
    "Published Link": "https://premade.outgrow.us/grade_your_seo_knowledge",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/SEO+knowledge+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out if your SEO knowledge stacks up against top the 150 marketers with this 12-question SEO quiz.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-conversions"
},
{
    "id": "expert",
    "Name": "Calculate how much hiring an expert consultant will save you versus running PPC in house.",
    "Published Link": "https://premade.outgrow.us/ppc-agency-vs-inhouse-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/PPC+vs+in-house.gif",
    "Type": "Calculator",
    "Layout": "Chicago",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out whether you should go for a PPC agency or build an in-house team.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-conversions"
},
{
    "id": "facebook-marketing",
    "Name": "You think you are a Facebook Marketing expert? Take this quiz to really find out!",
    "Published Link": "https://premade.outgrow.us/facebook-marketing-expert-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/are+you+really+a+facebook+marketing+expert.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Take this quiz to find out if you are a Facebook Marketing Expert.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-conversions"
},
{
    "id": "paid-advertsing",
    "Name": "How much should you spend on paid advertising?",
    "Published Link": "https://premade.outgrow.us/how-much-should-you-spend-on-paid-advertising",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+should+you+spend+on+paid+advertising.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out how much you should spend on Paid Advertising.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-conversions"
},
{
    "id": "roi-marketing",
    "Name": "ROI of your Marketing Strategy",
    "Published Link": "https://premade.outgrow.us/ROI-of-your-Email-Marketing-Strategy",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+your+email+marketing+strategy.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Estimate the ROI of your current email marketing strategy.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-conversions"
},
{
    "id": "blogging-frequency",
    "Name": "Blogging Frequency Calculator",
    "Published Link": "https://premade.outgrow.us/blogging-frequency-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+often+should+you+blog.gif",
    "Type": "Calculator",
    "Layout": "Chicago",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out how often you should be blogging and how much you stand to gain from it.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-conversions"
},
{
    "id": "high-roi",
    "Name": "Check how high of a ROI you can get with Outgrow!",
    "Published Link": "https://premade.outgrow.us/roi-of-using-outgrow",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+using+outgrow.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Quintessential",
    "Tier": "",
    "Description": "Estimate the ROI you will get from using Outgrow.",
    "filters": [
        "filter-auto",
        "Quintessential"
    ],
    "route":"increase-conversions"
},
{
    "id": "resale-value-property",
    "Name": "Find out the resale value of your property",
    "Published Link": "https://premade.outgrow.us/how-much-will-you-make-by-selling-your-property",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+will+you+make+from+selling+your+property.gif",
    "Type": "Calculator",
    "Layout": "Stockholm",
    "Industry": "construction",
    "Tier": "",
    "Description": "Enter some details about your property and find out how much you will make by selling it.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-conversions"
},
{
    "id": "build-pool",
    "Name": "How much does it cost to build a pool?",
    "Published Link": "https://premade.outgrow.us/cost-of-building-a-pool",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/cost+of+building+a+pool.gif",
    "Type": "Calculator",
    "Layout": "Chicago",
    "Industry": "construction",
    "Tier": "",
    "Description": "Find out how much you will need to shell out for your dream pool.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-conversions"
},
{
    "id": "buy-or-rent",
    "Name": "Should I buy or rent?",
    "Published Link": "https://premade.outgrow.us/should-i-buy-or-rent",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Buy+Or+Rent.gif",
    "Type": "Outcome Quiz",
    "Layout": "Stockholm",
    "Industry": "construction",
    "Tier": "",
    "Description": "Find out if you should buy or rent your next accomodation.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-conversions"
},
{
    "id": "house-afford",
    "Name": "How much house can I afford?",
    "Published Link": "https://premade.outgrow.us/how-much-house-can-I-afford",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+house+can+i+afford.gif",
    "Type": "Calculator",
    "Layout": "Greek",
    "Industry": "construction",
    "Tier": "",
    "Description": "Enter your details to find out the house value that fits within your budget.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-conversions"
},
{
    "id": "buying-home",
    "Name": "See how much it would cost you to rent instead of buying a home.",
    "Published Link": "https://premade.outgrow.us/renting-vs-buying-cost-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/buying+vs+renting+calculator.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "construction",
    "Tier": "",
    "Description": "See how much it would cost you to rent instead of buying a house.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-conversions"
},
{
    "id": "real-estate",
    "Name": "You shouldn't buy real estate unless you pass this ultimate buyer quiz!",
    "Published Link": "https://premade.outgrow.us/ultimate-buyer-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/real+estate+buying+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Chicago",
    "Industry": "construction",
    "Tier": "",
    "Description": "Take this quiz to find out if you are ready to buy a house.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-conversions"
},
{
    "id": "saas",
    "Name": "Are you leveraging SaaS right? Calculate the efficacy of your tech dollars.",
    "Published Link": "https://premade.outgrow.us/Health-SaaS-metrics",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+healthy+is+your+saas+business.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Technology",
    "Tier": "",
    "Description": "Find out if your SaaS business is in a healthy condition.",
    "filters": [
        "filter-auto",
        "Technology"
    ],
    "route":"increase-conversions"
},
{
    "id": "calculate-efficiency",
    "Name": "Calculate how much efficiency you stand to gain by shifting to an automated payroll solution.",
    "Published Link": "https://premade.outgrow.us/savings-from-Payroll-System",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+can+your+company+save+with+payroll+system.gif",
    "Type": "Calculator",
    "Layout": "Stockholm",
    "Industry": "Technology",
    "Tier": "",
    "Description": "Find out how much your company can save with a payroll system.",
    "filters": [
        "filter-auto",
        "Technology"
    ],
    "route":"increase-conversions"
},
{
    "id": "build-app",
    "Name": "How much to build an app?",
    "Published Link": "https://premade.outgrow.us/How-much-to-build-an-app1",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+to+build+an+app.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Technology",
    "Tier": "",
    "Description": "Get an estimate of how much you will need to build the app that you want.",
    "filters": [
        "filter-auto",
        "Technology"
    ],
    "route":"increase-conversions"
},
{
    "id": "friends-character",
    "Name": "Which Friends character are you?",
    "Published Link": "https://premade.outgrow.us/which-friends-character-are-you",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+friends+character+are+you.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Entertainment",
    "Tier": "",
    "Description": "Find out which Friends character are you most like.",
    "filters": [
        "filter-auto",
        "Entertainment"
    ],
    "route":"increase-conversions"
},




{
    "id": "new-car-used-car",
    "Name": "New Car vs Used Car",
    "Published Link": "https://premade.outgrow.us/New-Car-vs-Used-Car",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Auto",
    "Description": "Find out whether you should buy a used card or a new one.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-roi"
},
{
    "id": "buy-rent",
    "Name": "Should i buy or rent a car?",
    "Published Link": "https://premade.outgrow.us/Buy-Or-Lease-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/should+you+buy+or+lease+your+next+car.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Answer 6 questions to find out whether you should buy or lease your next car.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-roi"
},
{
    "id": "auto-loan",
    "Name": "Auto Loan Calculator",
    "Published Link": "https://premade.outgrow.us/Auto-Loan-Calc",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/auto+loan+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Find out how much monthly installment you'll be paying on your auto loan.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-roi"
},
{
    "id": "early-payment",
    "Name": "Early Payment Calculator",
    "Published Link": "https://premade.outgrow.us/Early-Payment-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/early+payment+calculator.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Auto",
    "Tier": "",
    "Description": "How much extra monthly payment will you need to make to shorten your car loan term?",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-roi"
},
{
    "id": "put-down",
    "Name": "How much should I put down?",
    "Published Link": "https://premade.outgrow.us/Downpayment-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/downpayment+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Find out the downpayment amount you'll need to purchase your new home.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-roi"
},
{
    "id": "type-car",
    "Name": "Which type of car is best suited to my use case?",
    "Published Link": "https://premade.outgrow.us/what-car-should-you-go-for",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+kind+of+car+should+you+buy.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Auto",
    "Tier": "",
    "Description": "Find out which car suits you the best.",
    "filters": [
        "filter-auto",
        "Auto"
    ],
    "route":"increase-roi"
},
{
    "id": "ivy-league",
    "Name": "Which Ivy League is best for me?",
    "Published Link": "https://premade.outgrow.us/which-ivy-league-is-best-for-you",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+ivy+league+is+best+for+you.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Education",
    "Tier": "",
    "Description": "Answer 9 simple questions to find out which Ivy League college is best for you.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-roi"
},
{
    "id": "college-degree",
    "Name": "Calculate the total REAL net cost of your college degree.",
    "Published Link": "https://premade.outgrow.us/Real-NET-college-degree-cost",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+is+college+really+going+to+cost+you.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Education",
    "Tier": "",
    "Description": "Find out how much is college really going to cost you.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-roi"
},
{
    "id": "budget-calc",
    "Name": "Student Budget Calculator",
    "Published Link": "https://premade.outgrow.us/student-budget-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+student+budget.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Education",
    "Tier": "",
    "Description": "Use this calculator to calculate your budget as a full-time student.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-roi"
},
{
    "id": "harvard",
    "Name": "What is a good enough score to get into Harvard with your background?",
    "Published Link": "https://premade.outgrow.us/Harvard-Minimum-Score-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/chances+of+getting+into+harvard.gif",
    "Type": "Calculator",
    "Layout": "Greek",
    "Industry": "Education",
    "Tier": "",
    "Description": "Find out if your SAT or ACT scores are good enough to land you in Harvard.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-roi"
},
{
    "id": "major-study",
    "Name": "Which major should I study?",
    "Published Link": "https://premade.outgrow.us/What-major-should-i-study",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+major.gif",
    "Type": "Outcome Quiz",
    "Layout": "Stockholm",
    "Industry": "Education",
    "Tier": "",
    "Description": "Find out which major should you study.",
    "filters": [
        "filter-auto",
        "Education"
    ],
    "route":"increase-roi"
},
{
    "id": "mortgage",
    "Name": "The quintessential mortage calculator!",
    "Published Link": "https://premade.outgrow.us/Copy-of-The-quintessential-mortgage-calculator-1",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/mortgage+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Calculate your monthly mortgage payment.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-roi"
},
{
    "id": "home-budget",
    "Name": "Home Budget Calculator",
    "Published Link": "https://premade.outgrow.us/Home-Budget-Calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/calculate+your+monthly+home+budget.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Calculate your monthly home budget and find how much you are saving each month.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-roi"
},
{
    "id": "retire",
    "Name": "How much do you need to retire?",
    "Published Link": "https://premade.outgrow.us/How-much-do-you-need-to-retire",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+do+you+need+to+retire.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Finance",
    "Tier": "",
    "Description": "How much money do you need if you want to retire?",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-roi"
},
{
    "id": "save-million",
    "Name": "SAVE A MILLION DOLLARS CALCULATOR",
    "Published Link": "https://premade.outgrow.us/When-can-you-become-a-millionaire",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/when+can+you+become+a+millionaire.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Find out when you will become a millionaire!",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-roi"
},
{
    "id": "savings-goal",
    "Name": "Savings goal calculator",
    "Published Link": "https://premade.outgrow.us/Saving-goal-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/savings+goal+calculator.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Set your savings goal today and find out how much you need to invest every month to achieve that goal.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-roi"
},
{
    "id": "balance-retirement",
    "Name": "What will be my 401(k) balance at retirement?",
    "Published Link": "https://premade.outgrow.us/401k-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/what+will+be+my+401k+balance+at+retirement.gif",
    "Type": "Calculator",
    "Layout": "Seattle",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Find out how much balance will you have in your 401(k) at retirement.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-roi"
},
{
    "id": "credit-card",
    "Name": "How long will it take to pay off my credit card?",
    "Published Link": "https://premade.outgrow.us/credit-card-pay-off-calc",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+long+will+it+take+to+payoff+my+credit+card.gif",
    "Type": "Calculator",
    "Layout": "Seattle",
    "Industry": "Finance",
    "Tier": "",
    "Description": "Find out how long will you take to payoff your credit card.",
    "filters": [
        "filter-auto",
        "Finance"
    ],
    "route":"increase-roi"
},
{
    "id": "digital",
    "Name": "What is your digital quotient?",
    "Published Link": "https://premade.outgrow.us/digital-quotient-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/find+out+your+digital+quotient.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out your Digital Quotient.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-roi"
},
{
    "id": "seo-quiz",
    "Name": "Find out where you stand amongst 5000 marketers on this SEO quiz!",
    "Published Link": "https://premade.outgrow.us/grade_your_seo_knowledge",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/SEO+knowledge+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out if your SEO knowledge stacks up against top the 150 marketers with this 12-question SEO quiz.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-roi"
},
{
    "id": "expert",
    "Name": "Calculate how much hiring an expert consultant will save you versus running PPC in house.",
    "Published Link": "https://premade.outgrow.us/ppc-agency-vs-inhouse-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/PPC+vs+in-house.gif",
    "Type": "Calculator",
    "Layout": "Chicago",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out whether you should go for a PPC agency or build an in-house team.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-roi"
},
{
    "id": "facebook-marketing",
    "Name": "You think you are a Facebook Marketing expert? Take this quiz to really find out!",
    "Published Link": "https://premade.outgrow.us/facebook-marketing-expert-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/are+you+really+a+facebook+marketing+expert.gif",
    "Type": "Graded Quiz",
    "Layout": "Stockholm",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Take this quiz to find out if you are a Facebook Marketing Expert.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-roi"
},
{
    "id": "paid-advertsing",
    "Name": "How much should you spend on paid advertising?",
    "Published Link": "https://premade.outgrow.us/how-much-should-you-spend-on-paid-advertising",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+should+you+spend+on+paid+advertising.gif",
    "Type": "Calculator",
    "Layout": "Tokyo",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out how much you should spend on Paid Advertising.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-roi"
},
{
    "id": "roi-marketing",
    "Name": "ROI of your Marketing Strategy",
    "Published Link": "https://premade.outgrow.us/ROI-of-your-Email-Marketing-Strategy",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+your+email+marketing+strategy.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Estimate the ROI of your current email marketing strategy.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-roi"
},
{
    "id": "blogging-frequency",
    "Name": "Blogging Frequency Calculator",
    "Published Link": "https://premade.outgrow.us/blogging-frequency-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+often+should+you+blog.gif",
    "Type": "Calculator",
    "Layout": "Chicago",
    "Industry": "marketing-advertising",
    "Tier": "",
    "Description": "Find out how often you should be blogging and how much you stand to gain from it.",
    "filters": [
        "filter-auto",
        "marketing-advertising"
    ],
    "route":"increase-roi"
},
{
    "id": "high-roi",
    "Name": "Check how high of a ROI you can get with Outgrow!",
    "Published Link": "https://premade.outgrow.us/roi-of-using-outgrow",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/roi+of+using+outgrow.gif",
    "Type": "Calculator",
    "Layout": "Londoner",
    "Industry": "Quintessential",
    "Tier": "",
    "Description": "Estimate the ROI you will get from using Outgrow.",
    "filters": [
        "filter-auto",
        "Quintessential"
    ],
    "route":"increase-roi"
},
{
    "id": "resale-value-property",
    "Name": "Find out the resale value of your property",
    "Published Link": "https://premade.outgrow.us/how-much-will-you-make-by-selling-your-property",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+will+you+make+from+selling+your+property.gif",
    "Type": "Calculator",
    "Layout": "Stockholm",
    "Industry": "construction",
    "Tier": "",
    "Description": "Enter some details about your property and find out how much you will make by selling it.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-roi"
},
{
    "id": "build-pool",
    "Name": "How much does it cost to build a pool?",
    "Published Link": "https://premade.outgrow.us/cost-of-building-a-pool",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/cost+of+building+a+pool.gif",
    "Type": "Calculator",
    "Layout": "Chicago",
    "Industry": "construction",
    "Tier": "",
    "Description": "Find out how much you will need to shell out for your dream pool.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-roi"
},
{
    "id": "buy-or-rent",
    "Name": "Should I buy or rent?",
    "Published Link": "https://premade.outgrow.us/should-i-buy-or-rent",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/Buy+Or+Rent.gif",
    "Type": "Outcome Quiz",
    "Layout": "Stockholm",
    "Industry": "construction",
    "Tier": "",
    "Description": "Find out if you should buy or rent your next accomodation.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-roi"
},
{
    "id": "house-afford",
    "Name": "How much house can I afford?",
    "Published Link": "https://premade.outgrow.us/how-much-house-can-I-afford",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+house+can+i+afford.gif",
    "Type": "Calculator",
    "Layout": "Greek",
    "Industry": "construction",
    "Tier": "",
    "Description": "Enter your details to find out the house value that fits within your budget.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-roi"
},
{
    "id": "buying-home",
    "Name": "See how much it would cost you to rent instead of buying a home.",
    "Published Link": "https://premade.outgrow.us/renting-vs-buying-cost-calculator",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/buying+vs+renting+calculator.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "construction",
    "Tier": "",
    "Description": "See how much it would cost you to rent instead of buying a house.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-roi"
},
{
    "id": "real-estate",
    "Name": "You shouldn't buy real estate unless you pass this ultimate buyer quiz!",
    "Published Link": "https://premade.outgrow.us/ultimate-buyer-quiz",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/real+estate+buying+quiz.gif",
    "Type": "Graded Quiz",
    "Layout": "Chicago",
    "Industry": "construction",
    "Tier": "",
    "Description": "Take this quiz to find out if you are ready to buy a house.",
    "filters": [
        "filter-auto",
        "construction"
    ],
    "route":"increase-roi"
},
{
    "id": "saas",
    "Name": "Are you leveraging SaaS right? Calculate the efficacy of your tech dollars.",
    "Published Link": "https://premade.outgrow.us/Health-SaaS-metrics",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+healthy+is+your+saas+business.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Technology",
    "Tier": "",
    "Description": "Find out if your SaaS business is in a healthy condition.",
    "filters": [
        "filter-auto",
        "Technology"
    ],
    "route":"increase-roi"
},
{
    "id": "calculate-efficiency",
    "Name": "Calculate how much efficiency you stand to gain by shifting to an automated payroll solution.",
    "Published Link": "https://premade.outgrow.us/savings-from-Payroll-System",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+can+your+company+save+with+payroll+system.gif",
    "Type": "Calculator",
    "Layout": "Stockholm",
    "Industry": "Technology",
    "Tier": "",
    "Description": "Find out how much your company can save with a payroll system.",
    "filters": [
        "filter-auto",
        "Technology"
    ],
    "route":"increase-roi"
},
{
    "id": "build-app",
    "Name": "How much to build an app?",
    "Published Link": "https://premade.outgrow.us/How-much-to-build-an-app1",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/how+much+to+build+an+app.gif",
    "Type": "Calculator",
    "Layout": "Madrid",
    "Industry": "Technology",
    "Tier": "",
    "Description": "Get an estimate of how much you will need to build the app that you want.",
    "filters": [
        "filter-auto",
        "Technology"
    ],
    "route":"increase-roi"
},
{
    "id": "friends-character",
    "Name": "Which Friends character are you?",
    "Published Link": "https://premade.outgrow.us/which-friends-character-are-you",
    "GIF": "https://dzvexx2x036l1.cloudfront.net/calc_images/which+friends+character+are+you.gif",
    "Type": "Outcome Quiz",
    "Layout": "Chicago",
    "Industry": "Entertainment",
    "Tier": "",
    "Description": "Find out which Friends character are you most like.",
    "filters": [
        "filter-auto",
        "Entertainment"
    ],
    "route":"increase-roi"
}
]


   }

}
