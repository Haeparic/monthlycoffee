import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Home from "components/home/Home";
import Header from "components/Header";
import Login from "pages/member/Login";
import EditInfo from "pages/EditInfo";
import ExpenseDetails from "pages/expenses/ExpenseDetails";
import Community from "pages/Community";
import AddExpense from "pages/expenses/AddExpense";
import Calendar from "pages/Calendar";

import PrivateRoute from "components/PrivateRoute";
import { useSelector } from "react-redux";
import NotFound from "pages/NotFound";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const authenticated = useSelector((state) => state.user.authenticated);

  return (
    <Router>
      <div className="flex flex-col-reverse h-[100vh] md:flex-row overflow-hidden">
        {authenticated ? (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        ) : null}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {authenticated ? (
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          ) : null}
          <section className="flex justify-center items-center">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="/home" element={<Home />} />
                <Route path="/edit" element={<EditInfo />} />
                <Route path="/expense" element={<ExpenseDetails />} />
                <Route path="/community" element={<Community />} />
                <Route path="/addexpense" element={<AddExpense />} />
                <Route path="/calendar" element={<Calendar />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
};

export default App;
