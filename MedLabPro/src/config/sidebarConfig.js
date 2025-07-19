// sidebarConfig.js
import {
    faBookOpen, faUser, faUserDoctor, faUserTie, faCalendarAlt, faHeartbeat,
    faCreditCard, faRupeeSign, faFlask, faEnvelopeOpenText, faBoxOpen, faShoppingCart,
    faUsers, faCalculator, faChartBar, faCog, faBullhorn, faSignOutAlt, faIndianRupeeSign
} from '@fortawesome/free-solid-svg-icons';

export const sidebarConfig = [
    {
        section: "Front Desk",
        items: [
            {
                label: "Billing (B2C)", icon: faBookOpen, path: "/billing",
                subItems: [
                    { label: "New", path: "/billing/patient" },
                    { label: "Manage Bills", path: "/billing/manage" },
                    { label: "Manage Sample", path: "/billing/manage-sample" }
                ]
            },
            { label: "Patient", icon: faUser, path: "/patients" },
            { label: "Referral Doctor", icon: faUserDoctor, path: "/referral-doctor" },
            {
                label: "Agent", icon: faUserTie,
                subItems: [
                    { label: "Add Agent", path: "/agent/add" },
                    { label: "View Agents", path: "/agent/list" }
                ]
            },
            {
                label: "Appointment", icon: faCalendarAlt,
                subItems: [
                    { label: "New Appointment", path: "/appointment/new" },
                    { label: "Manage Appointments", path: "/appointment/manage" }
                ]
            },
            { label: "OPD", icon: faHeartbeat, path: "/opd" },
            { label: "CC Section (B2B)", icon: faCreditCard, path: "/cc-section" },
            { label: "Reception Cash", icon: faIndianRupeeSign, path: "/reception-cash" }
        ]
    },
    {
        section: "Lab Desk",
        items: [
            { label: "Clinical Master", icon: faFlask, path: "/lab/clinical-master" },
            { label: "Lab Test Report", icon: faEnvelopeOpenText, path: "/lab/test-report" }
        ]
    },
    {
        section: "Account Desk",
        items: [
            { label: "Products", icon: faBoxOpen, path: "/accounts/products" },
            {
                label: "Purchase", icon: faShoppingCart,
                subItems: [
                    { label: "Add Purchase", path: "/accounts/purchase/add" },
                    { label: "Purchase History", path: "/accounts/purchase/history" }
                ]
            },
            { label: "HR", icon: faUsers, path: "/accounts/hr" },
            {
                label: "Finance", icon: faCalculator,
                subItems: [
                    { label: "Ledger", path: "/accounts/finance/ledger" },
                    { label: "Invoices", path: "/accounts/finance/invoices" }
                ]
            }
        ]
    },
    {
        section: "Data Analysis",
        items: [
            {
                label: "Reports", icon: faChartBar,
                subItems: [
                    { label: "Daily Reports", path: "/analysis/reports/daily" },
                    { label: "Monthly Summary", path: "/analysis/reports/monthly" }
                ]
            },
            { label: "Graph", icon: faChartBar, path: "/analysis/graphs" }
        ]
    },
    {
        section: "Admin Desk",
        items: [
            { label: "Master Settings", icon: faCog, path: "/admin/settings" },
            {
                label: "Marketing", icon: faBullhorn,
                subItems: [
                    { label: "Campaigns", path: "/admin/marketing/campaigns" },
                    { label: "Leads", path: "/admin/marketing/leads" }
                ]
            },
            { label: "Subscription", icon: faUser, path: "/admin/subscription" }
        ]
    },
    {
        section: "Logout",
        items: [
            { label: "Logout", icon: faSignOutAlt, path: "/logout" }
        ]
    }
];
