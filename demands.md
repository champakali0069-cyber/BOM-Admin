# Admin Dashboard Requirements for Mahamobile Plus Banking Application

This document outlines the requirements for the centralized admin dashboard system to manage dynamic data previously hardcoded in the application.

## 1. Account Management

### Account Details Configuration
- **Account Number**: Admins can configure account numbers dynamically
- **Account Holder Name**: Admins can update account holder names
- **Account Type**: Savings, Current, FD, RD, etc. (admin configurable)
- **IFSC Code**: Admin can set IFSC codes per account
- **Branch Details**: Branch name, address, contact info configurable by admin
- **Account Balance**: Admin can update account balances
- **Customer ID**: Admin can assign/modify customer IDs
- **Account Open Date**: Configurable by admin

### User Profile Management
- **Personal Details**: Name, DOB, address (editable by admin)
- **Contact Information**: Mobile number, email (updateable by admin)
- **Identification Details**: PAN, Aadhaar, nominee information (admin configurable)
- **Account Status**: Active, inactive, dormant (admin controllable)

## 2. Transaction Management

### Transaction Control
- **Reference IDs**: Admin-generated transaction reference IDs
  - Example: "509558643619" for successful transfers
  - UTR (Unique Transaction Reference) IDs for all transactions
- **Transaction Status**: Success, failed, pending, reversed (admin controllable)
- **Amount Management**: Admin can configure transaction amounts/limits
- **Transaction Timestamps**: Date and time of transactions (admin configurable)

### Transaction History
- **Last 5 Transactions**: Latest transfers displayed with credit entries
- **UTR Tracking**: Unique Transaction References for all transactions
- **Time/Date Stamps**: Full date and time information for transactions
- **Transaction Details**: Type, amount, beneficiary, date/time (admin configurable)

## 3. Beneficiary Management

### Beneficiary Configuration
- **Internal Beneficiaries**: Within bank accounts (admin add/remove)
- **External Beneficiaries**: Other bank accounts management
- **Beneficiary Details**: Name, account number, IFSC, bank name (admin configurable)
- **Manage Beneficiaries**: Consistent display across all sections (admin controlled)
- **Default Beneficiaries**: Pre-defined beneficiaries that can be added by admin

## 4. Payment and Transfer Controls

### Transfer Operations
- **Send Money Functionality**: Amount deduction tracking
- **Payment Processing**: Backend transaction processing
- **Success Screens**: Reference ID generation (e.g., 509558643619)
- **UTR Generation**: Unique Transaction References for all transfers
- **Balance Updates**: Real-time balance adjustments

## 5. Statement and Reporting

### Statement Configuration
- **Account Details Page**: UTR reference IDs display
- **Statement Generation**: Monthly statements with complete reference IDs
- **PDF Generation**: Includes full date and time stamps
- **Transaction History**: Shows last month details with UTR numbers
- **Download Options**: PDF generation with proper timestamps

### Passbook Integration
- **Preview Display**: Show UTR references in passbook previews
- **Real-time Updates**: Transaction updates reflected in passbook
- **Balance Tracking**: Dynamic balance updates

## 6. User Authentication Control

### PIN and Security Management
- **Default PIN Assignment**: Admin can set default PINs (e.g., 6666)
- **PIN Change Functionality**: Allow admin to initiate PIN changes
- **Account Access Control**: Manage account access permissions
- **Security Settings**: Configure security settings per account

## 7. Dynamic Content Management

### UI Data Updates
- **Account Number Display**: Dynamically show account numbers in bottom sheets
- **Bank Logo Display**: Show appropriate bank logos based on account
- **Interface Labels**: All UI text configurable by admin
- **Image Display**: Proper image integration as needed

## 8. Admin Dashboard Deployment

### Technical Specifications
- **Deployment Platform**: Vercel deployment for admin dashboard
- **Access Controls**: Role-based access for admin functions
- **Data Synchronization**: Real-time sync between admin panel and app
- **Audit Trail**: Track all admin changes and configurations

## 9. Real-time Configuration Capabilities

- **Dynamic Updates**: Changes reflect in real-time without app updates
- **Bulk Operations**: Ability to manage multiple accounts/transactions
- **Template Management**: Create reusable templates for common configurations
- **Reporting Dashboard**: Visual representation of system data
- **Backup and Recovery**: Configuration backup and restore capabilities

## 10. Compliance and Monitoring

- **Regulatory Compliance**: Ensure all admin changes meet banking regulations
- **Monitoring Tools**: Track system performance and usage
- **Logging System**: Comprehensive logging of all admin activities
- **Access Logs**: Monitor who made what changes and when
- **Change History**: Maintain full history of all configurations