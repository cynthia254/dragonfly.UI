import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../components/login/login.vue";
//import HomeView from '../views/HomeView.vue'
import registerPage from "../components/login/register.vue";
import incidentPage from "../components/login/incident.vue";
import queuePage from "../components/login/queue.vue";
import problemPage from "../components/login/problem.vue";
import servicePage from "../components/login/service.vue";
import changePage from "../components/login/changes.vue";
import customerPage from "../components/login/customer.vue";
import submitPage from "../components/login/submit.vue";
import blogPage from "../components/login/blog.vue";
import ticketsTable from "../components/login/tickets/ticketstable/ticketsTable.vue";
import BarChart from "../components/bargraph/dashboard.vue";
import ticketPage from "../components/login/tickets/ticket.vue";
import articlePage from "../components/articles/knowledge.vue";
import updatePage from "../components/articles/update.vue";
import newPage from "../components/login/tickets/newticket.vue";
import addUserPage from "../components/users/createusers.vue";
import viewUsers from "../components/users/viewusers.vue";
import deleteUsers from "../components/users/deleteusers.vue";
import editUsers from "../components/users/editusers.vue";
import seePage from "../components/users/viewuser.vue";
import viewCalls from "../components/calls/viewCalls.vue";
import assignedTable from "../components/login/tickets/assignedTable/assigned.vue";
import confirmEmail from "../components/users/confirmemail.vue";
import forgotPassword from "../components/users/forgotpassword.vue";
import changePassword from "../components/users/changePassword.vue";

import HomePage from "../components/HomePage.vue";
import escalatePage from "../components/calls/escalate.vue";
import addClientPage from "../components/clients/clients.vue";
import resolvePage from "../components/calls/resolve.vue";
import closePage from "../components/calls/close.vue";
import serviceIssuePage from "../components/services/serviceIssue.vue";
import settingsPage from "../components/setup/settings.vue";
import departmentName from "../components/setup/department.vue";
import rolesPage from "../components/setup/roles.vue";
import departmentTable from "../components/setup/departmentTable.vue";
import rolesTable from "../components/setup/rolesTable.vue";
import assignRolePage from "../components/setup/assignRole.vue";
import suspendUser from "../components/users/suspendUser.vue";
import userProfile from "../components/users/userProfile.vue";
import ActivateUser from "../components/users/activateUser.vue";
import StatusTable from "../components/setup/statusTable.vue";
import addDesignation from "../components/setup/addDesignation.vue";
import designationTable from "../components/setup/designationTable.vue";
import editDesignation from "../components/setup/editdesignation.vue";
import responsibilityTable from "../components/setup/ResponsibilityTable.vue";
import AddRoleClaims from "../components/setup/addRoleClaim.vue";
import AddClaimToRoles from "../components/setup/AddClaimToRole.vue";
import roleClaims from "../components/users/allclaimroles.vue";
import resetEmail from "../components/login/passwordReset.vue";
import passwordReset from "../components/login/actualPasswordReset.vue";
import AddItem from "../components/stock/addItem.vue";
import AddStock from "../components/stock/addStock.vue";
import otherRoles from "../components/users/otherroles/assignotherroles.vue";
import stockManage from "../components/stock/stockManage.vue";
import purchasePage from "../components/stock/purchaseTable.vue";
import salesPage from "../components/stock/salesTable.vue";
import brandPage from "../components/stock/manageBrand.vue";
import modelPage from "../components/stock/manageModel.vue";
import EditDepartment from "../components/setup/editDeparmtnet.vue";
import UserRoles from "../components/users/userRoles.vue";
import clientPage from "../components/stock/customer.vue";
import supplierPage from "../components/stock/addSupplier.vue";
import inventoryAdjustment from "../components/stock/adjustmentTable.vue";
import DughnutChart from "../components/bargraph/doughnut.vue";
import UpdateStock from "../components/stock/updatestock.vue";
import editPurchase from "../components/stock/editPurchase.vue";
import editSales from "../components/stock/editSales.vue";
import returnedStatus from "../components/stock/returnedStatus.vue";
import returnedStock from "../components/stock/returnedStock.vue";
import editCustomer from "../components/stock/editCustomer.vue";
import editSupplier from "../components/stock/editSupplier.vue";
import editItem from "../components/stock/editItem.vue";
import editBrand from "../components/stock/editBrand.vue";
import InvoiceDetails from "../components/stock/invoicedetails.vue";
import BatchDetails from "../components/stock/AddBatchDetails.vue";
import categoryPage from "../components/stock/manageCategory.vue";
import stockDashboard from "../components/stock/stockDashboard.vue";
import devicePage from "../components/stock/addSparePart.vue";
import InvoiceLinesByNumber from "../components/stock/invoiceLinesnyNumber.vue";
import invoiceItemAdd from "../components/stock/invoice_Items_add.vue";
import UploadFile from "../components/stock/uploadFile.vue";
import UploadProduct from "../components/stock/uploadProduct.vue"
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/",
    name: "login",

    component: loginPage,
  },

  {
    path: "/password_reset_email",
    name: "resetEmail",

    component: resetEmail,
  },
  {
    path: "/resetpassword/:resetpasswordtoken",
    name: "passwordReset",

    component: passwordReset,
  },

  {
    path: "/stockdashboard",
    name: "stockDashboard",

    component: stockDashboard,
  },
  {
    path: "/device",
    name: "devicePage",

    component: devicePage,
  },
  {
    path: "/register",
    name: "registerPage",

    component: registerPage,
  },
  {
    path: "/doughnut",
    name: "DughnutChart",

    component: DughnutChart,
  },
  {
    path: "/invoicedetails",
    name: "InvoiceDetails",

    component: InvoiceDetails,
  },
  {
    path: "/batchDetails",
    name: "BatchDetails",

    component: BatchDetails,
  },

  {
    path: "/updatestock/:stockId",
    name: "UpdateStock",

    component: UpdateStock,
  },

  {
    path: "/allroleclaims",
    name: "roleClaims",
    component: roleClaims,
  },
  {
    path: "/department",
    name: "departmentName",

    component: departmentName,
  },
  {
    path: "/category",
    name: "categoryPage",

    component: categoryPage,
  },
  {
    path: "/editpurchase/:purchaseId",
    name: "editPurchase",

    component: editPurchase,
  },
  {
    path: "/editsales/:salesId",
    name: "editSales",

    component: editSales,
  },
  {
    path: "/editbrand/:brandId",
    name: "editBrand",

    component: editBrand,
  },
  {
    path: "/invoiceItems/:invoiceNumber",
    name: "InvoiceLinesByNumber",

    component: InvoiceLinesByNumber,
  },
  {
    path: "/edititem/:itemId",
    name: "editItem",

    component: editItem,
  },
  {
    path: "/editcustomer/:customerId",
    name: "editCustomer",

    component: editCustomer,
  },
  {
    path: "/editsupplier/:supplierId",
    name: "editSupplier",

    component: editSupplier,
  },
  {
    path: "/departmenttable",
    name: "departmentTable",

    component: departmentTable,
  },
  {
    path: "/otherroles",
    name: "otherRoles",
    component: otherRoles,
  },
  {
    path: "/designationtable",
    name: "designationTable",

    component: designationTable,
  },
  {
    path: "/editdepartment/:departnmentid",
    name: "EditDepartment",

    component: EditDepartment,
  },

  {
    path: "/roles",
    name: "rolesPage",

    component: rolesPage,
  },
  {
    path: "/returnedStatus",
    name: "returnedStatus",

    component: returnedStatus,
  },
  {
    path: "/uploadProduct",
    name: "UploadProduct",

    component: UploadProduct,
  },
  {
    path: "/uploadFile",
    name: "UploadFile",

    component: UploadFile,
  },
  {
    path: "/returnedStock",
    name: "returnedStock",

    component: returnedStock,
  },
  {
    path: "/responsibility",
    name: "AddRoleClaims",

    component: AddRoleClaims,
  },
  {
    path: "/rolestable",
    name: "rolesTable",
    component: rolesTable,
  },
  {
    path: "/addclaimtorole",
    name: "AddClaimToRoles",
    component: AddClaimToRoles,
  },
  {
    path: "/escalate/:ticketid",
    name: "escalatePage",

    component: escalatePage,
  },
  {
    path: "/resolve/:ticketid",
    name: "resolvePage",
    component: resolvePage,
  },
  {
    path: "/userWithRole",
    name: "UserRoles",

    component: UserRoles,
  },
  {
    path: "/customer",
    name: "clientPage",

    component: clientPage,
  },
  {
    path: "/supplier",
    name: "supplierPage",

    component: supplierPage,
  },

  {
    path: "/incident",
    name: "incidentPage",

    component: incidentPage,
  },
  {
    path: "/confirmemail/:userId",
    name: "confirmEmail",

    component: confirmEmail,
  },
  {
    path: "/activateuser/:userId",
    name: "ActivateUser",

    component: ActivateUser,
  },

  {
    path: "/viewusers",
    name: "viewUsers",

    component: viewUsers,
  },
  {
    path: "/forgotpassword",
    name: "forgotPassword",

    component: forgotPassword,
  },
  {
    path: "/deleteusers",
    name: "deleteUsers",

    component: deleteUsers,
  },
  {
    path: "/changepassword",
    name: "changePassword",

    component: changePassword,
  },

  {
    path: "/adjustment",
    name: "inventoryAdjustment",

    component: inventoryAdjustment,
  },
  {
    path: "/assignRole/:userId",
    name: "assignRolePage",
    component: assignRolePage,
  },

  {
    path: "/tickets",
    name: "tickettable",
    component: ticketsTable,
  },
  {
    path: "/asignticket/:ticketid",
    name: "assignedTable",
    component: assignedTable,
  },

  {
    path: "/serviceIssue",
    name: "serviceIssuePage",
    component: serviceIssuePage,
  },
  {
    path: "/editusers/:userId",
    name: "editUsers",

    component: editUsers,
  },
  {
    path: "/editdesignation/:positionId",
    name: "editDesignation",

    component: editDesignation,
  },
  {
    path: "/ResponsibilityTable",
    name: "responsibilityTable",

    component: responsibilityTable,
  },
  {
    path: "/bargraphPage",
    name: "BarChart",
    component: BarChart,
  },
  {
    path: "/statusTable/:userId",
    name: "StatusTable",
    component: StatusTable,
  },
  {
    path: "/close/:ticketid",
    name: "closePage",
    component: closePage,
  },

  {
    path: "/viewUser/:useremail",
    name: "seePage",
    component: seePage,
  },

  {
    path: "/viewcalls",
    name: "viewCalls",
    component: viewCalls,
  },
  {
    path: "/newticket",
    name: "newPage",
    component: newPage,
  },
  {
    path: "/addDesignation",
    name: "addDesignation",
    component: addDesignation,
  },
  {
    path: "/settings",
    name: "settingsPage",
    component: settingsPage,
  },
  {
    path: "/addusers",
    name: "addUserPage",
    component: addUserPage,
  },
  {
    path: "/viewclients",
    name: "addClientPage",
    component: addClientPage,
  },
  {
    path: "/queue",
    name: "queuePage",
    component: queuePage,
  },

  {
    path: "/problem",
    name: "problemPage",
    component: problemPage,
  },
  {
    path: "/service",
    name: "servicePage",
    component: servicePage,
  },
  {
    path: "/changes",
    name: "changePage",
    component: changePage,
  },
  {
    path: "/article",
    name: "article",
    component: articlePage,
  },
  {
    path: "/customer",
    name: "customerPage",
    component: customerPage,
  },
  {
    path: "/submit",
    name: "submitPage",
    component: submitPage,
  },

  {
    path: "/blog",
    name: "blogPage",
    component: blogPage,
  },
  {
    path: "/update",
    name: "updatePage",
    component: updatePage,
  },
  {
    path: "/ticket",
    name: "ticketPage",
    component: ticketPage,
  },
  {
    path: "/suspendUser/:userId",
    name: "suspendUser",
    component: suspendUser,
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: userProfile,
  },
  {
    path: "/additem",
    name: "AddItem",
    component: AddItem,
  },
  {
    path: "/addStock",
    name: "AddStock",
    component: AddStock,
  },
  {
    path: "/stock",
    name: "stockManage",
    component: stockManage,
  },
  {
    path: "/purchase",
    name: "purchasePage",
    component: purchasePage,
  },

  {
    path: "/invoice_item/:invoiceLineId",
    name: "invoiceItemAdd",
    component: invoiceItemAdd,
  },
  {
    path: "/sales",
    name: "salesPage",
    component: salesPage,
  },
  {
    path: "/brand",
    name: "brandPage",
    component: brandPage,
  },
  {
    path: "/model",
    name: "modelPage",
    component: modelPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
