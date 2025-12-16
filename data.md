# Comprehensive Hardcoded Data Objects in Mahamobile Plus Banking Application

This document catalogues all hardcoded data objects found in the Mahamobile Plus banking application codebase that should be moved to a centralized admin dashboard system for better management and control.

## 1. User Account Data (data/user.ts)

### Primary User Account
- **Account Number**: `60543803435`
- **Account Holder Name**: `Mr BAL GOPAL LUHA`
- **Account Type**: `SAVINGS`
- **IFSC Code**: `MAHB0001234`
- **Branch Name**: `Mumbai Main Branch`
- **Balance**: `50000.0`
- **Customer ID**: `CUST_2025_001`
- **Mobile Number**: `+91 9876543210`
- **Email**: `user@mahabank.com`
- **Date of Birth**: `1990-01-15`
- **Address**: `123, MG Road, Mumbai, Maharashtra - 400001`
- **PAN Number**: `ABCDE1234F`
- **Aadhar Number**: `1234-5678-9012`
- **Account Open Date**: `2020-01-01`
- **Status**: `ACTIVE`
- **Nominee Name**: `Family Member`
- **Relation with Nominee**: `Spouse`

### Initial Balance
- **Reset Account Balance**: `50000.0`

## 2. Common Beneficiaries (data/demoData.ts)

### Beneficiary 1
- **ID**: `BEN_001`
- **Name**: `Rajesh Kumar`
- **Account Number**: `98765432101`
- **IFSC Code**: `MAHB0001234`
- **Bank Name**: `Maharashtra Bank`
- **Nickname**: `Friend`
- **Within Bank**: `true`

### Beneficiary 2
- **ID**: `BEN_002`
- **Name**: `Priya Sharma`
- **Account Number**: `12345678901`
- **IFSC Code**: `MAHB0001234`
- **Bank Name**: `Maharashtra Bank`
- **Nickname**: `Family`
- **Within Bank**: `true`

### Beneficiary 3
- **ID**: `BEN_003`
- **Name**: `Amit Patel`
- **Account Number**: `45678912301`
- **IFSC Code**: `SBIN0001234`
- **Bank Name**: `State Bank of India`
- **Nickname**: `Business Partner`
- **Within Bank**: `false`

### Beneficiary 4
- **ID**: `BEN_004`
- **Name**: `Neha Gupta`
- **Account Number**: `60543803436`
- **IFSC Code**: `MAHB0001234`
- **Bank Name**: `Maharashtra Bank`
- **Nickname**: `Sister`
- **Within Bank**: `true`

## 3. Transaction Data (data/transactions.ts)

### Sample Transactions
The following transaction IDs and details are hardcoded:

#### December 2025
- **TXN_1733998200000_a8k2m9x7p**: UPI Transfer to Amazon Pay (₹1500) - Date: 2025-12-12 Time: 14:30:00 - Balance After: 50000 - IFSC: UTIB0002083 - Within Bank: false
- **TXN_1733816400000_e2m6p9w4t**: Salary Credit from TechSoft Solutions (₹45000) - Date: 2025-12-10 Time: 09:20:00 - Balance After: 51500 - IFSC: HDFC0000123 - Within Bank: false
- **TXN_1733651400000_g4p9m2v6w**: Cash Deposit (₹5000) - Date: 2025-12-08 Time: 11:30:00 - Balance After: 6500 - Description: Cash Deposit at Branch - Within Bank: true - Remarks: Branch: Mumbai Main - Teller #4
- **TXN_1733134200000_l3n8k5v9c**: NEFT Transfer to Priya Mehta (₹3500) - Date: 2025-12-02 Time: 14:10:00 - Balance After: 1500 - IFSC: SBIN0001234 - Within Bank: false

#### November 2025
- **TXN_1732788600000_n4k9m2v7e**: Gas Bill to Mahanagar Gas (₹847) - Date: 2025-11-28 Time: 09:30:00 - Balance After: 5000 - Description: Gas Bill - Within Bank: false
- **TXN_1732356600000_q6n4p8x3h**: IMPS Transfer for Rent (₹18000) - Date: 2025-11-23 Time: 12:30:00 - Balance After: 5847 - IFSC: HDFC0002847 - Within Bank: false - Remarks: Nov 2025 Rent - Flat 402
- **TXN_1732011000000_s3n7p2x6j**: Freelance Payment (₹25000) - Date: 2025-11-19 Time: 14:30:00 - Balance After: 23847 - IFSC: ICIC0001234 - Within Bank: false
- **TXN_1731319800000_w9n2p8x5o**: Cheque Deposit (₹10000) - Date: 2025-11-11 Time: 14:30:00 - Balance After: -1153 - Credit: 10000 - Within Bank: true
- **TXN_1731147000000_x4k7m2v9p**: Salary Credit (₹45000) - Date: 2025-11-09 Time: 10:30:00 - Balance After: -11153 - Description: Salary Credit - November - Within Bank: false - Remarks: Salary Nov 2025 EMP-1847

#### October 2025
- **TXN_1730283000000_b9k6m4v8t**: Rent Transfer (₹18000) - Date: 2025-10-30 Time: 14:30:00 - Balance After: -56153 - IFSC: HDFC0002847 - Within Bank: false - Remarks: Oct 2025 Rent - Flat 402
- **TXN_1730110200000_c3n7p2x6u**: ATM Withdrawal (₹4000) - Date: 2025-10-28 Time: 11:30:00 - Balance After: -38153 - Description: ATM Withdrawal - Within Bank: true - Remarks: ATM ID: MAHB0002156 Dadar
- **TXN_1729419000000_g9n2p8x5z**: Insurance Payment (₹5500) - Date: 2025-10-20 Time: 12:30:00 - Balance After: -59402 - IFSC: SBIN0000001 - Within Bank: false
- **TXN_1729073400000_i8n5p3x7b**: Refund (₹2499) - Date: 2025-10-16 Time: 14:30:00 - Balance After: -58952 - IFSC: ICIC0002847 - Within Bank: false - Remarks: Refund Order #FK-1847563
- **TXN_1728555000000_l9k7m4v8e**: Salary Credit (₹45000) - Date: 2025-10-10 Time: 10:30:00 - Balance After: -73952 - Description: Salary Credit - October - Within Bank: false - Remarks: Salary Oct 2025 EMP-1847

#### September 2025
- **TXN_1727691000000_q9n2p5x8j**: Rent Transfer (₹18000) - Date: 2025-09-30 Time: 11:30:00 - Balance After: -58152 - IFSC: HDFC0002847 - Within Bank: false
- **TXN_1727345400000_s7n5p9x4l**: Dividend Credit (₹1250) - Date: 2025-09-26 Time: 09:30:00 - Balance After: -58952 - Description: Dividend Credit - Within Bank: false
- **TXN_1726827000000_v9k2m6v9o**: Water Bill (₹450) - Date: 2025-09-20 Time: 14:30:00 - Balance After: -58502 - Description: Water Bill - Within Bank: false
- **TXN_1726654200000_w3n7p2x5p**: Bonus Credit (₹15000) - Date: 2025-09-18 Time: 09:30:00 - Balance After: -43502 - Description: Bonus Credit - Within Bank: false
- **TXN_1726135800000_z6k3m7v4s**: Salary Credit (₹45000) - Date: 2025-09-12 Time: 10:30:00 - Balance After: -73952 - Description: Salary Credit - September - Within Bank: false - Remarks: Salary Sep 2025 EMP-847

## 4. Authentication Credentials

### Login Credentials
- **Test Email**: `Test2@gmail.com`
- **Test Password**: `123456`
- **Default MPIN**: `0000`
- **User Account Holder Name**: `Mr Bal Gopal Luha`

## 5. Financial Constants

### Account Limits & Policies
- **Minimum Balance Requirement**: `₹5,000`
- **Daily Transaction Limit**: `₹1,00,000`
- **Daily ATM Limit**: `₹25,000`
- **Daily UPI Limit**: `₹1,00,000`
- **Per Transaction Limit**: `₹50,000`
- **Monthly Transfer Limit**: `₹10,00,000`
- **Within Bank Account Prefix**: `605` or `606`

### Transaction Amounts
- Various amounts across transactions: 1500, 45000, 5000, 3500, 847, 18000, 25000, 10000, 4000, 5500, 2499, 1250, 450, 15000, 299, 2847, 1299, 649, 999, 567, 2500, 3000, 1847, 125, 200, 500, 8000, 119, 1850, 1245, 150, 2000, 1800, 1150, 2400, 6000, 8500, 4500

## 6. Bank-Specific Identifiers

### Internal Account Numbers
- **Primary Account Number**: `60543803435`
- **Test Account Numbers**: Various (e.g., `12345678901`, `98765432101`)
- **Additional test accounts**: 5963622403137043, 8544005804875274, 7634521098765432, 9876543210123456, 1234567890123456, 4567890123456789, 7890123456789012

### IFSC Codes
- **Primary Bank**: `MAHB0001234`
- **Other Banks**: `HDFC0000123`, `SBIN0001234`, `ICIC0001234`
- **Additional IFSC codes**: UBIN0943195, AUBL0806159, UTIB0002083, HDFC0001234, ICIC0000123, AXIS0001234, KOTAK001234, PUNB0001234, CITI0000004, HSBC0000001, CITI0000001, CITI0000847, SBIN0001847, HDFC0000001, CITI0000002, CITI0000003, HDFC0001847, ICIC0002847, HDFC0003847, HDFC0000123, MAHB0001847, PUNB0001234, CORP847563210, MSEB2847563210, MGL1847563210, UBER918475632, NFLX918475632, WEBT847563210, JIO1847563210, ZOMT918475632, BBSK918475632, DRPT918475632, ZERO847563210, LIFE918475632, HDFC847563210, DOMI918475632, BMC847563210, KIND918475632, LOAN847563210, CULT918475632, TATA847563210, SWIGGY00018475, AIRTEL918475632, DMART847562310, AMZN284756321, MGL1847563210, UBER918475632, NFLX918475632, WEBT847563210, JIO1847563210, ZOMT918475632, BBSK918475632, APOL918475632, GPAY847563210, HPCL918475632, SPOT918475632, FLIP847563210, ZERO847563210, JIO918475632, LIFE918475632, HDFC847563210, DOMI918475632, KIND918475632, LOAN847563210, CULT918475632, TATA847563210, 917020043210, 50100287456321, MSEB2847563210, CORP847563210, MGL1847563210, UBER918475632, NFLX918475632, WEBT847563210, JIO1847563210, ZOMT918475632, 32109876543210, BBSK918475632, APOL918475632, GPAY847563210, HPCL918475632, SPOT918475632, FLIP847563210, ZERO847563210, JIO918475632, LIFE918475632, HDFC847563210, DOMI918475632, BMC847563210, KIND918475632, LOAN847563210, CULT918475632, TATA847563210, 50100847563210, 4567XXXXXXXX1234, APOL918475632, GPAY847563210, HPCL918475632, SPOT918475632, FLIP847563210, ZERO847563210, JIO918475632, LIFE918475632, HDFC847563210, DOMI918475632, BMC847563210, KIND918475632, LOAN847563210, CULT918475632, TATA847563210

### Mobile Numbers
- **Primary Mobile**: `+91 9876543210`
- **Additional mobiles**: 9876543210, 9123456789, 8765432109, 9012345678, 8901234567, 9234567890

### Email Addresses
- **Primary Email**: `user@mahabank.com`
- **Test Email**: `Test2@gmail.com`

## 7. Test Data in Manage Beneficiaries (app/(protected)/manageBeneficial.tsx)
- Account Number: `5963622403137043`
- IFSC: `UBIN0943195`
- Mobile: `9741175528`

- Account Number: `8544005804875274`
- IFSC: `AUBL0806159`
- Mobile: `9876543210`

- Account Number: `7634521098765432`
- IFSC: `HDFC0001234`
- Mobile: `9123456789`

- Account Number: `9876543210123456`
- IFSC: `ICIC0000123`
- Mobile: `8765432109`

- Account Number: `1234567890123456`
- IFSC: `SBIN0000123`
- Mobile: `9012345678`

- Account Number: `4567890123456789`
- IFSC: `AXIS0001234`
- Mobile: `8901234567`

- Account Number: `7890123456789012`
- IFSC: `KOTAK001234`
- Mobile: `9234567890`

## 8. ATM/CDM Identifiers
- **CDM Location**: `MAHB0001234 Andheri`
- **ATM Locations**: MAHB0012847 Mumbai, MAHB0009284 Thane, MAHB0004521 Andheri, MAHB0007632 Powai, MAHB0002156 Dadar, MAHB0008475 Bandra, MAHB0003698 Malad, MAHB0009847 Goregaon

## 9. System Configuration
- **Default Initial Balance**: `50000.0`
- **Account Display Format**: `XXXXXXXX` + last 4 digits
- **Within Bank Account Prefix**: `605` or `606`
- **Default IFSC**: `MAHB0000001` (in fund-transfer.tsx)

## 10. Transaction Reference Numbers
- **NEFT Reference**: `REF123456789`
- **Transaction IDs**: Various timestamp-based IDs (e.g., `TXN_1733998200000_a8k2m9x7p`)
- **Reference IDs**: 765395574585, REF123456789

## 11. User Interface Strings

### Greetings
- **Morning Greeting**: `Good Morning!`
- **Afternoon Greeting**: `Good Afternoon!`
- **Evening Greeting**: `Good Evening!`

### Account Display
- **Account Number Mask**: `XXXXXXX` + last 4 digits

### Navigation Labels
- **Dashboard**: `Dashboard`
- **Profile**: `Profile`
- **Settings**: `Settings`
- **Login**: `Login`
- **Transfer**: `Transfer`
- **Pay**: `Pay`
- **Bill**: `Bill`
- **Mobile**: `Mobile`
- **Recharge**: `Recharge`
- **Loan**: `Loan`
- **Credit**: `Credit`
- **Debit**: `Debit`
- **Savings**: `Savings`
- **Current**: `Current`
- **IFSC**: `IFSC`
- **Account Number**: `Account Number`
- **Name**: `Name`
- **Email**: `Email`
- **Mobile**: `Mobile`
- **Address**: `Address`
- **Welcome**: `Welcome`
- **Hello**: `Hello`
- **Hi**: `Hi`
- **Greetings**: `Greetings`
- **Home**: `Home`
- **Transaction**: `Transaction`
- **History**: `History`
- **Statement**: `Statement`
- **Passbook**: `Passbook`
- **Beneficiary**: `Beneficiary`
- **Manage**: `Manage`
- **Add**: `Add`
- **Delete**: `Delete`
- **Edit**: `Edit`
- **Sign in**: `Sign in`
- **Sign up**: `Sign up`
- **Forgot**: `Forgot`
- **Password**: `Password`
- **OTP**: `OTP`
- **Verification**: `Verification`
- **Success**: `Success`
- **Error**: `Error`
- **Failed**: `Failed`
- **Confirm**: `Confirm`
- **Cancel**: `Cancel`
- **Submit**: `Submit`
- **Save**: `Save`
- **Continue**: `Continue`
- **Next**: `Next`
- **Back**: `Back`
- **Previous**: `Previous`
- **Amount**: `Amount`
- **Enter Amount**: `Enter Amount`
- **Minimum**: `Minimum`
- **Maximum**: `Maximum`
- **Limit**: `Limit`
- **Daily**: `Daily`
- **Monthly**: `Monthly`
- **Yearly**: `Yearly`
- **Interest**: `Interest`
- **Rate**: `Rate`
- **Fees**: `Fees`
- **Charges**: `Charges`

## 12. Demo Account Information in Multiple Files

### In app/(public)/login.tsx
- User Name: `Mr Bal Gopal Luha`

### In components/Drawer.tsx
- User Name: `Mr BAL GOPAL LUHA`

### In app/(protected)/debitCard.tsx
- Card Holder Name: `MR. BAL GOPAL LUHA`

### In app/(protected)/account-details.tsx
- Account Name: `MR. BAL GOPAL LUHA`

## 13. Mobile Numbers in Beneficiary Management
- Mobile: `9876543210`
- Mobile: `9123456789`
- Mobile: `9012345678`
- Mobile: `8901234567`
- Mobile: `9741175528`
- Mobile: `8765432109`
- Mobile: `9234567890`

## 14. Address Information
- Primary Address: `123, MG Road, Mumbai, Maharashtra - 400001`
- Additional addresses in transactions: MG Road, Mumbai, Maharashtra - 400001

## 15. PAN and Aadhar Numbers
- PAN Number: `ABCDE1234F`
- Aadhar Number: `1234-5678-9012`

## 16. Date and Time Values
- Date of Birth: `1990-01-15`
- Account Open Date: `2020-01-01`
- Transaction Dates: 2025-12-12, 2025-12-10, 2025-12-08, 2025-12-02, 2025-11-30, 2025-11-28, 2025-11-26, 2025-11-25, 2025-11-23, 2025-11-21, 2025-11-19, 2025-11-17, 2025-11-15, 2025-11-13, 2025-11-11, 2025-11-09, 2025-11-07, 2025-11-05, 2025-11-01, 2025-10-30, 2025-10-28, 2025-10-26, 2025-10-24, 2025-10-22, 2025-10-20, 2025-10-18, 2025-10-16, 2025-10-14, 2025-10-12, 2025-10-10, 2025-10-08, 2025-10-06, 2025-10-04, 2025-10-02, 2025-09-30, 2025-09-26, 2025-09-20, 2025-09-18, 2025-09-12
- Time Values: 14:30:00, 09:20:00, 11:30:00, 14:10:00, 09:30:00, 10:20:00, 12:30:00, 15:30:00, 16:30:00, 10:30:00, 12:00:00, 14:00:00, 16:00:00, 08:00:00, 18:00:00

## 17. Additional Beneficiary Data
### In data/transactions_backup.ts:
- Beneficiary: Amazon Pay (Account: 917020043210, IFSC: UTIB0002083)
- Beneficiary: Self (Account: Various, IFSC: Various)
- Beneficiary: Amit Sharma (Account: 50100287456321, IFSC: HDFC0001234)
- Beneficiary: Maharashtra State Electricity Board (Account: MSEB2847563210)
- Beneficiary: TechSoft Solutions Pvt Ltd (Account: CORP847563210, IFSC: HDFC0000123)
- Beneficiary: Rajesh Kumar Singh (Account: 98765432101, IFSC: MAHB0001847)
- Beneficiary: Swiggy (Account: SWIGGY00018475, IFSC: ICIC0000104)
- Beneficiary: Bharti Airtel Limited (Account: AIRTEL918475632)
- Beneficiary: DMart Ready (Account: DMART847562310, IFSC: HDFC0001234)
- Beneficiary: Priya Mehta (Account: 1234567890123, IFSC: SBIN0001234)
- Beneficiary: Amazon Seller Services (Account: AMZN284756321, IFSC: CITI0000004)
- Beneficiary: Mahanagar Gas Limited (Account: MGL1847563210)
- Beneficiary: Uber India Systems (Account: UBER918475632, IFSC: HSBC0000001)
- Beneficiary: Netflix Entertainment (Account: NFLX918475632, IFSC: CITI0000001)
- Beneficiary: WebTech Solutions (Account: WEBT847563210, IFSC: ICIC0001234)
- Beneficiary: Reliance Jio Infocomm (Account: JIO1847563210)
- Beneficiary: Zomato Limited (Account: ZOMT918475632, IFSC: HDFC0000847)
- Beneficiary: Sunita Verma (Account: 32109876543210, IFSC: PUNB0001234)
- Beneficiary: BigBasket (Account: BBSK918475632, IFSC: ICIC0001847)
- Beneficiary: HDFC Bank Credit Card (Account: 4567XXXXXXXX1234)
- Beneficiary: Shree Properties (Account: 50100847563210, IFSC: HDFC0002847)
- Beneficiary: Apollo Pharmacy (Account: APOL918475632, IFSC: HDFC0003847)
- Beneficiary: Google Pay Rewards (Account: GPAY847563210, IFSC: CITI0000847)
- Beneficiary: HP Petrol Pump (Account: HPCL918475632, IFSC: SBIN0001847)
- Beneficiary: LIC of India (Account: LIC847563210, IFSC: SBIN0000001)
- Beneficiary: Flipkart India (Account: FLIP847563210, IFSC: ICIC0002847)
- Beneficiary: Spotify India (Account: SPOT918475632, IFSC: CITI0000002)
- Beneficiary: Dr. Patil Clinic (Account: DRPT918475632, IFSC: MAHB0001234)
- Beneficiary: Zerodha Broking (Account: ZERO847563210, IFSC: HDFC0001847)
- Beneficiary: Reliance Jio (Account: JIO918475632)
- Beneficiary: Lifestyle Store (Account: LIFE918475632, IFSC: ICIC0003847)
- Beneficiary: HDFC Mutual Fund (Account: HDFC847563210, IFSC: HDFC0000001)
- Beneficiary: Jubilant Foodworks (Account: DOMI918475632, IFSC: HDFC0001234)
- Beneficiary: BMC Water Supply (Account: BMC847563210)
- Beneficiary: Amazon Kindle (Account: KIND918475632, IFSC: CITI0000003)
- Beneficiary: HDFC Bank Loan (Account: LOAN847563210, IFSC: HDFC0000123)
- Beneficiary: Cult Fitness (Account: CULT918475632, IFSC: ICIC0002847)
- Beneficiary: Tata Play Limited (Account: TATA847563210, IFSC: ICIC0002847)

## 18. Branch Locations
- Mumbai Main Branch
- Additional branches referenced: Thane, Dadar, Bandra, Goregaon, Powai, Malad, Vile, Parle, Borivali, Dahisar, Kandivali, Chembur, Sion, Kurla, Wadala, Byculla, CSTM, Lower, Parel, Matunga, Khar, Santacruz, Andheri, Vasai, Bhiwandi, Kalyan, Ulhasnagar, Ambarnath, Badlapur, Shahad, Kopri, Kalwa, Dombivli, Virar

## 19. UPI Transaction Details
- UPI IDs referenced: INDB, JBIN, HDFC, ICICI
- UPI Transaction codes: 561823897577, 561816594065, 561880194590, 561789456123, 561456789012

## 20. Additional Bank Names
- Maharashtra Bank
- State Bank of India
- HDFC Bank
- ICICI Bank
- Axis Bank
- Kotak Bank
- Punjab National Bank
- Citibank
- HSBC Bank
- Bank of Maharashtra
- IndusInd Bank
- Yes Bank
- Federal Bank
- IDBI Bank
- Karnataka Bank
- NKGSB Bank
- Ratnakar Bank
- SVC Bank
- UCO Bank
- Bandhan Bank
- City Union Bank
- BOFA (Bank of America)
- Chase Bank
- Barclays Bank
- Standard Chartered Bank
- JP Morgan Chase
- Deutsche Bank
- HDFC Bank Limited
- State Bank of Mysore
- State Bank of Travancore
- State Bank of Bikaner and Jaipur
- State Bank of Hyderabad
- State Bank of Mysore
- Canara Bank
- Bank of China
- DBS Bank

## 21. Reference Numbers and Codes
- Order Numbers: AMZ-8827364512, SWG-284756321, AMZ-1847563, ZMT-847563210, BB-28475631284, FK-1847563, DOM-28475631
- Consumer Numbers: 102847563210
- Vehicle Numbers: MH02AB1234
- Trip IDs: UB-28475631284
- ATM IDs: MAHB0012847, MAHB0009284, MAHB0004521, MAHB0007632, MAHB0002156, MAHB0008475, MAHB0003698, MAHB0009847
- Employee IDs: EMP-1847
- Consumer numbers: 102847563210
- Transaction codes: AMZ-8827364512, SWG-284756321, AMZ-1847563, ZMT-847563210, BB-28475631284, FK-1847563, DOM-28475631
- Mobile numbers in remarks: 9876543210

## 22. Transaction Descriptions
- UPI Transfer
- Within Bank Transfer
- Cash Deposit at Branch
- NEFT Transfer
- IMPS Transfer
- ATM Withdrawal
- Salary Credit - December
- Salary Credit - November
- Salary Credit - October
- Salary Credit - September
- Gas Bill
- Electricity Bill - MSEB
- Water Bill
- Insurance Payment
- Dividend Credit
- Bonus Credit
- Rent Transfer
- Freelance Payment
- Cheque Deposit
- Credit Card Bill - HDFC
- Broadband Bill - Jio Fiber
- Electricity Bill - MSEB (duplicate)
- Refund Order
- Cashback Reward
- e-Book Purchase
- Credit Card Bill
- UPI Credit - Cashback
- Broadband Bill
- Broadband Bill - Airtel
- Vehicle Purchase
- Vehicle Insurance
- Car Loan EMI
- Home Loan EMI
- Personal Loan EMI
- Education Loan EMI
- Medical Bill
- Hospital Bill
- Doctor Consultation
- Medicine Purchase
- Grocery Shopping
- Restaurant Bill
- Movie Ticket
- Entertainment
- Shopping Mall
- Online Shopping
- E-commerce Transaction
- Bill Payment
- Insurance Premium
- Investment
- Mutual Fund
- Stock Purchase
- FD Interest
- RD Interest
- Tax Payment
- GST Payment
- Service Tax
- Professional Tax
- Income Tax

## 23. Transaction Statuses
- Success
- Failed
- Pending
- Reversed
- Cancelled
- Initiated
- Processed
- Approved
- Rejected
- On Hold
- Disputed
- Refunded
- Partial
- Complete

## 24. Transaction Types
- DEBIT
- CREDIT
- TRANSFER_OUT
- TRANSFER_IN
- UPI_TRANSFER
- ATM_WITHDRAWAL
- CHEQUE_DEPOSIT
- CASH_DEPOSIT
- NEFT_TRANSFER
- IMPS_TRANSFER
- RTGS_TRANSFER
- SALARY_CREDIT
- LOAN_DISBURSEMENT
- LOAN_EMI
- INSURANCE_PREMIUM
- TAX_PAYMENT
- BILL_PAYMENT
- FD_CREATION
- RD_CREATION
- FD_MATURITY
- RD_MATURITY
- INVESTMENT_PURCHASE
- INVESTMENT_REDEMPTION
- DIVIDEND_CREDIT
- BONUS_CREDIT
- INTEREST_CREDIT
- EMI_DEBIT
- MERCHANT_PAYMENT
- RECHARGE
- UTILITY_PAYMENT
- CARD_BILL_PAYMENT
- FEE_PAYMENT

## 25. Currency and Amount Formats
- Various amounts: 0.00, 1.00, 100.00, 500.00, 1000.00, 1500.00, 2000.00, 2500.00, 3000.00, 3500.00, 4000.00, 4500.00, 5000.00, 5500.00, 6000.00, 6500.00, 7000.00, 7500.00, 8000.00, 8500.00, 9000.00, 9500.00, 10000.00, 11000.00, 12000.00, 12500.00, 15000.00, 18000.00, 20000.00, 25000.00, 30000.00, 35000.00, 40000.00, 45000.00, 50000.00, 60000.00, 70000.00, 80000.00, 90000.00, 100000.00
- Currency formats: ₹ 0.00, ₹ 1.00, ₹1500, ₹45000, ₹5000, ₹3500, ₹847, ₹18000, ₹25000, ₹10000, ₹4000, ₹5500, ₹2499, ₹1250, ₹450, ₹15000, ₹299, ₹2847, ₹1299, ₹649, ₹999, ₹567, ₹2500, ₹3000, ₹1847, ₹125, ₹200, ₹500, ₹8000, ₹119, ₹1850, ₹1245, ₹150, ₹2000, ₹1800, ₹1150, ₹2400, ₹6000, ₹8500, ₹4500
- Balance formats: 50000.0, 51500.0, 6500.0, 1500.0, 5000.0, 5847.0, 23847.0, -1153.0, -11153.0, -56153.0, -38153.0, -59402.0, -58952.0, -73952.0, -58152.0, -58952.0, -43502.0

## 26. Account Types
- SAVINGS
- CURRENT
- FIXED_DEPOSIT
- RECURRING_DEPOSIT
- JOINT_ACCOUNT
- MINOR_ACCOUNT
- SENIOR_CITIZEN
- NRI_ACCOUNT
- STUDENT_ACCOUNT
- BUSINESS_ACCOUNT
- CORPORATE_ACCOUNT
- GOVERNMENT_ACCOUNT
- TRUST_ACCOUNT
- PARTNERSHIP_ACCOUNT
- LLP_ACCOUNT
- SOLE_PROPRIETORSHIP

## 27. Transaction Amount Keywords in Code
- "Amount must be positive"
- "Amount to transfer"
- "Transfer amount"
- "Withdrawal amount"
- "Credit amount"
- "Debit amount"
- "Invalid transaction amount"
- "Transaction amount"

## 28. User Profile Fields
- accountNumber
- accountHolderName
- accountType
- ifscCode
- branchName
- balance
- customerId
- mobileNumber
- email
- dateOfBirth
- address
- panNumber
- aadharNumber
- nomineeName
- nomineeRelation
- accountOpenDate
- status

## 29. Currency and Decimal Formats
- Currency formatting in account modal: `₹ ${balance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
- Various decimal formats: .toFixed(2), .toFixed(0), .toFixed(1)
- Currency symbols: ₹, Rs, INR

## 30. Passbook and Statement Data
- Balance formats: "694.27 CR", "6694.27 CR", "11194.27 CR", "1194.27 CR", "13694.27 CR", "23894.27 CR", "26394.27 CR", "76394.27 CR", "56394.27 CR", "59894.27 CR", "144894.27 CR", "149493.27 CR", "151692.27 CR"
- Narration values: UPI/561823897577/INDB/, UPI/561816594065/INDB/, UPI/561880194590/JBIN/, UPI/561789456123/HDFC/, UPI/561456789012/ICICI/
- Credit/debit amounts in passbook: 10000.00, 50000.00, 20000.00

## 31. Error Messages and Validation
- "Invalid transaction amount"
- "Insufficient balance for transaction"
- "Error processing transaction:"
- "Cannot reverse this transaction"
- "Invalid beneficiary account number"
- "Amount must be positive"
- "Balance cannot be negative"
- "User not found"
- "Account not found"
- "Transaction not found"
- "Beneficiary not found"
- "Invalid IFSC code"
- "Invalid account number"
- "Invalid mobile number"
- "Invalid email address"
- "Invalid PAN number"
- "Invalid Aadhar number"
- "Invalid date format"
- "Invalid amount"
- "Invalid balance"
- "Service unavailable"
- "Connection timeout"
- "Server error"
- "Network error"
- "Authentication failed"
- "Unauthorized access"

## 32. Success and Information Messages
- "Within-bank transfer of ₹{amount} to {beneficiaryName} ({beneficiaryAccountNumber}) successful"
- "IMPS transfer of ₹{amount} to {beneficiaryName} ({beneficiaryAccountNumber}) successful"
- "NEFT transfer of ₹{amount} to {beneficiaryName} ({beneficiaryAccountNumber}) successful"
- "UPI transfer of ₹{amount} to {beneficiaryName} successful"
- "ATM withdrawal of ₹{amount} successful"
- "Cash deposit of ₹{amount} successful"
- "Salary credit of ₹{amount} successful"
- "Transaction reversal completed successfully"
- "Fund transfer processed successfully"
- "Bill payment completed successfully"
- "Recharge successful"
- "Transaction completed successfully"
- "Beneficiary added successfully"
- "Beneficiary deleted successfully"
- "Beneficiary updated successfully"

## 33. Navigation and Routing Paths
- "/(protected)"
- "/(public)"
- "/login"
- "/sign-up"
- "/dashboard"
- "/account-details"
- "/transaction-history"
- "/passbook"
- "/fund-transfer"
- "/manage-beneficiaries"
- "/statements"
- "/settings"
- "/profile"
- "/ePassbook"
- "/mobile-passbook"
- "/debit-card"
- "/beneficiaryDetails"
- "/transaction-receipt"
- "/e-passbook-viewer"
- "/statement"

## 34. Configuration Values
- Expo app version: 1.0.0
- Bundle identifier: com.mahabank.mahamobileplus
- Package name: com.mahabank.mahamobileplus
- Project ID: fa346fee-7747-464e-871f-a833a63c4096
- Font loading: "Montserrat_300Light", "Montserrat_400Regular", "Montserrat_500Medium", "Montserrat_600SemiBold", "Montserrat_700Bold"
- App version source: "remote"
- Splash screen: "../Build/assets/images/splash.png"

## 35. Data Limits and Page Sizes
- Initial transaction count: 10
- Transaction limit: 10
- Page size: Various
- List rendering limits: Various
- Cache sizes: Various
- Timeout values: Various

## 36. API and Service Endpoints (Hardcoded)
- Various API endpoints referenced in comments
- Supabase URL: process.env.EXPO_PUBLIC_SUPABASE_URL!
- Supabase Key: process.env.EXPO_PUBLIC_SUPABASE_KEY!
- Various image URLs: "https://i.pravatar.cc/150?img=13", "https://i.pravatar.cc/150?img=15", etc.
- GIF images: "../Build/assets/gifs/moving_element.gif"
- SVG icons: Various icon paths

## 37. Color Values and Styling
- Various color codes: #FFFFFF, #000000, #0066CC, #E53E3E, #38A169, #ECC94B, #E53E3E, #718096, #ED8936
- Background colors: White, light gray, blue, green, red
- Text colors: Black, white, dark gray
- Button colors: Blue, green, red, yellow

## 38. Phone and WhatsApp Numbers
- WhatsApp: +917066066040

## 39. Customer IDs and Account Prefixes
- Customer ID: CUST_2025_001
- Account prefixes: 605, 606 (within bank)
- Account number patterns: Various formats

## 40. Test and Demo Values
- Test beneficiary: Rajesh Kumar, Priya Sharma, Amit Patel, Neha Gupta
- Demo amounts: 1500, 45000, 5000, 3500, 847, 18000, 25000, 10000
- Demo dates: 2025-12-12, 2025-11-28, etc.
- Demo times: 14:30:00, 09:20:00, etc.
- Demo names: TechSoft Solutions Pvt Ltd, Maharashtra State Electricity Board, etc.
- Demo addresses: Mumbai, Thane, Dadar, Andheri, etc.

## 41. UI Component Texts
- Button labels: "Transfer", "Pay Bills", "Recharge", "Loans", "Debit Card", "Credit Card", etc.
- Screen titles: "Account Details", "Transaction History", "Fund Transfer", "Beneficiaries", etc.
- Input placeholders: "Enter amount", "Enter account number", "Enter IFSC code", "Enter remarks", etc.
- Labels: "From Account", "To Account", "Amount", "Beneficiary", "Transfer Type", etc.
- Status texts: "Transaction Successful", "Transaction Failed", "Credit Successful", "Debit Frozen"
- Error messages: "Invalid input", "Insufficient balance", "Connection error", etc.
- Success messages: "Transfer successful", "Payment completed", "Added successfully", etc.

## 42. Test Cases and Demo Data
- Unit test values: Various test amounts, account numbers, IFSC codes
- Demo transaction amounts: 500, 1000, 1500, 2000, 2500, 3000, 3500, etc.
- Demo account balances: 50000.0, 45000.0, 35000.0, etc.
- Demo user profile: Mr BAL GOPAL LUHA with all personal details
- Demo beneficiary names: Rajesh Kumar, Priya Sharma, Amit Patel, Neha Gupta
- Demo IFSC codes: MAHB0001234, HDFC0001234, ICIC0001234, etc.
- Demo bank names: Maharashtra Bank, HDFC Bank, ICICI Bank, etc.

## 43. Data Relationships

### Account-Holder Relationship
- **Account Number** is linked to **Account Holder Name**
  - Account: `60543803435` → Holder: `Mr BAL GOPAL LUHA`
  - Account: `98765432101` → Holder: `Rajesh Kumar`
  - Account: `12345678901` → Holder: `Priya Sharma`
  - Account: `45678912301` → Holder: `Amit Patel`
  - Account: `60543803436` → Holder: `Neha Gupta`

### Account-Balance Relationship
- **Account Number** is linked to **Balance**
  - Account: `60543803435` → Balance: `50000.0`
  - Account: `98765432101` → Balance: Variable depending on transactions

### User-Profile Relationship
- **Account Holder Name** contains **Personal Details**
  - Mr BAL GOPAL LUHA → has mobile: `+91 9876543210`, email: `user@mahabank.com`, DOB: `1990-01-15`

### Account-Branch Relationship
- **Account Number** is linked to **Branch Name**
  - Account: `60543803435` → Branch: `Mumbai Main Branch`

### Transaction-Account Relationship
- **Transaction ID** is linked to **Account Number**
  - TXN_1733998200000_a8k2m9x7p → affects Account: `60543803435`
  - TXN_1733816400000_e2m6p9w4t → affects Account: `60543803435`

### Transaction-Beneficiary Relationship
- **Transaction** is linked to **Beneficiary**
  - UPI Transfer → Beneficiary: Amazon Pay (Account: 917020043210)
  - NEFT Transfer → Beneficiary: Priya Mehta (Account: 1234567890123)

### Account-IFSC Relationship
- **Account Number** is linked to **IFSC Code**
  - Account: `60543803435` → IFSC: `MAHB0001234`
  - Account: `98765432101` → IFSC: `MAHB0001234`

### Beneficiary-Account Relationship
- **Beneficiary Name** is linked to **Account Number** and **IFSC**
  - Rajesh Kumar → Account: `98765432101`, IFSC: `MAHB0001234`
  - Priya Sharma → Account: `12345678901`, IFSC: `MAHB0001234`

### Mobile-Account Relationship
- **Account** is linked to **Mobile Number**
  - Account: `60543803435` → Mobile: `+91 9876543210`

### Address-Account Relationship
- **Account Holder** is linked to **Address**
  - Mr BAL GOPAL LUHA → Address: `123, MG Road, Mumbai, Maharashtra - 400001`

### Nominee-Account Relationship
- **Account** is linked to **Nominee**
  - Account: `60543803435` → Nominee: `Family Member` (Relation: Spouse)

### Transaction-Amount Relationship
- **Transaction ID** is linked to **Amount**
  - TXN_1733998200000_a8k2m9x7p → Amount: 1500
  - TXN_1733816400000_e2m6p9w4t → Amount: 45000

### Transaction-Date-Time Relationship
- **Transaction ID** is linked to **Date** and **Time**
  - TXN_1733998200000_a8k2m9x7p → Date: 2025-12-12, Time: 14:30:00

### Balance-Transaction Relationship
- **Transaction** affects **Balance After**
  - TXN_1733998200000_a8k2m9x7p → Balance: 50000
  - TXN_1733816400000_e2m6p9w4t → Balance: 51500

### Parent-Child Account Relationships
- Within-Bank Transactions connect from-account to to-account
  - Account `60543803435` (source) → `917020043210` (destination) for UPI transfers

### Account-Category Relationships
- Account Number → Account Type → Services Available
  - `60543803435` (SAVINGS) → UPI, NEFT, IMPS, ATM services

### User-Role Relationships
- User ID → Permissions and Access Levels
  - Customer ID `CUST_2025_001` → Standard retail banking permissions

### Additional Transaction Details
- **Transaction Time Stamps** (HH:MM:SS format):
  - "14:30:00"
  - "09:20:00"
  - "11:30:00"
  - "14:10:00"
  - "10:20:00"
  - "15:45:00"
  - "16:30:00"
  - "18:20:00"
  - "12:15:00"
  - "10:00:00"
  - "14:10:00"
  - "11:30:00"
  - "12:30:00"
  - "10:30:00"
  - "15:30:00"
  - "16:30:00"
  - "09:30:00"
  - "12:00:00"
  - "14:00:00"
  - "16:00:00"
  - "08:00:00"
  - "18:00:00"

### Additional ATM/CDM Locations
- **ATM IDs** and locations:
  - MAHB0012847 Mumbai
  - MAHB0009284 Thane
  - MAHB0004521 Andheri
  - MAHB0007632 Powai
  - MAHB0002156 Dadar
  - MAHB0008475 Bandra
  - MAHB0003698 Malad
  - MAHB0009847 Goregaon

### Additional Beneficiary Account Numbers
- **Various beneficiary account numbers**:
  - 50100287456321
  - MSEB2847563210
  - CORP847563210
  - 98765432101
  - SWIGGY00018475
  - AIRTEL918475632
  - DMART847562310
  - 1234567890123
  - AMZN284756321
  - MGL1847563210
  - UBER918475632
  - NFLX918475632
  - WEBT847563210
  - JIO1847563210
  - ZOMT918475632
  - 32109876543210
  - BBSK918475632
  - 4567XXXXXXXX1234
  - 50100847563210
  - APOL918475632
  - GPAY847563210
  - HPCL918475632
  - SPOT918475632
  - FLIP847563210
  - ZERO847563210
  - LIFE918475632
  - HDFC847563210
  - DOMI918475632
  - BMC847563210
  - KIND918475632
  - LOAN847563210
  - CULT918475632
  - TATA847563210

### Additional Consumer and Reference Numbers
- **Consumer Numbers**: 102847563210
- **Trip IDs**: UB-28475631284
- **Vehicle Numbers**: MH02AB1234
- **Account References**: JF-284756321
- **Mobile Numbers**: 9876543210, 9741175528, 9123456789, 8765432109, 9012345678, 8901234567, 9234567890
- **WhatsApp Numbers**: +917066066040
- **Reference IDs**: 765395574585
- **UPI Transaction IDs**: 561823897577, 561816594065, 561880194590, 561789456123, 561456789012

### Additional Account Numbers
- **Main Account Number**: 60543803435
- **Within Bank Test Account**: 60543803999
- **Beneficiary Account Numbers**: 98765432101, 12345678901, 45678912301, 60543803436
- **Management Beneficiary Accounts**: 5963622403137043, 8544005804875274, 7634521098765432, 9876543210123456, 1234567890123456, 4567890123456789, 7890123456789012

### Date-of-Birth Relationships
- **Account Holder** → **Date of Birth**
  - Mr BAL GOPAL LUHA → DOB: 1990-01-15

### Account-Opening Date Relationships
- **Account** → **Opening Date**
  - Account: 60543803435 → Open Date: 2020-01-01

### Transaction Status Relations
- **Transaction ID** → **Status**
  - Various transactions → Status: "success", "failed", "pending", etc.

### Transaction Remark Relations
- **Transaction ID** → **Remarks**
  - TXN_1733998200000_a8k2m9x7p → Remarks: "Order #AMZ-8827364512"
  - TXN_1733134200000_l3n8k5v9c → Remarks: "Branch: Mumbai Main - Teller #4"
  - TXN_1728555000000_l9k7m4v8e → Remarks: "Salary Oct 2025 EMP-1847"
  - TXN_1732356600000_q6n4p8x3h → Remarks: "Nov 2025 Rent - Flat 402"
  - TXN_1729764600000_e2n8p5x9x → Remarks: "Cashback Reward Oct"
  - TXN_1727345400000_s7n5p9x4l → Remarks: "eBook Purchase"
  - TXN_1726654200000_w3n7p2x5p → Remarks: "Subscription Oct 2025"
  - TXN_1728382200000_m3n2p8x5f → Remarks: "Branch: Thane - Teller #2"
  - TXN_1726135800000_z6k3m7v4s → Remarks: "Branch: Goregaon - Teller #1"
  - TXN_1729073400000_i8n5p3x7b → Remarks: "Refund Order #FK-1847563"
  - TXN_1723691800000_r3n7p9x2s → Remarks: "Order #DOM-28475631"
  - TXN_1722485400000_k4m9p2v6s → Remarks: "CC Stmt Oct 2025"
  - TXN_1722142200000_y2n8q4w7s → Remarks: "Oct 2025 Rent - Flat 402"
  - TXN_1721535000000_x1m7r5t8s → Remarks: "Subscription Sep 2025"
  - TXN_1720325400000_m6n9p3v5s → Remarks: "Order #SWG-284756321"
  - TXN_1719721800000_p5n8q4w6s → Remarks: "Refund Order #AMZ-1847563"
  - TXN_1719117400000_q4m7r6t9s → Remarks: "Order #ZMT-847563210"
  - TXN_1718511800000_t3n6p8v2s → Remarks: "CC Stmt Sep 2025"
  - TXN_1715485400000_u2m5q7w1s → Remarks: "Sep 2025 Rent - Flat 402"
  - TXN_1714278200000_v1n4r6t8s → Remarks: "Subscription Aug 2025"
  - TXN_1713672600000_w9m3q5p7s → Remarks: "Order #BB-28475631284"
  - TXN_1712463000000_x8n2p4v6s → Remarks: "CC Stmt Aug 2025"
  - TXN_1711859400000_y7m1q3w5s → Remarks: "Aug 2025 Rent - Flat 402"
  - TXN_1710652200000_z6n9r5t7s → Remarks: "Subscription July 2025"

## Issues Identified

1. **Security Risk**: Hardcoded test credentials and default passwords
2. **Maintainability**: All account numbers, names, and IFSC codes are hardcoded
3. **Scalability**: No centralized system for account management
4. **Compliance**: Personal information embedded in code
5. **Multi-tenancy**: No way to manage multiple users or accounts without code changes
6. **Configuration Management**: All values are hardcoded in code
7. **Data Privacy**: Real personal information in test data
8. **Flexibility**: Cannot modify values without code changes
9. **Performance**: Inefficient data access patterns
10. **Maintainability**: Code scattered with hardcoded values

## Recommendations for Centralized Admin System

1. Store all account details in a secure database
2. Implement a centralized account management system
3. Remove hardcoded credentials
4. Create a configuration system for bank-specific values
5. Implement proper user authentication and authorization
6. Provide an admin dashboard for managing accounts, transactions, and beneficiaries
7. Add encryption for sensitive data
8. Implement proper audit trails for all changes
9. Create APIs for dynamic data retrieval
10. Implement role-based access control
11. Add data validation and sanitization
12. Provide real-time configuration updates
13. Implement data backup and recovery
14. Add comprehensive logging
15. Create data import/export functionality
16. Implement data versioning
17. Add data integrity checks
18. Provide API rate limiting
19. Implement data caching strategies
20. Add data compression for performance
21. Create relationship mapping tables for entity relationships
22. Implement foreign key constraints for data integrity
23. Add relationship validation during data entry
24. Create audit trail for relationship changes
25. Implement cascade operations for related data