import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const plans = [
  {
    name: "Platinum365",
    cost: 499,
    validityDays: 365,
    description:
      "Platinum365: Premium year-round access for unparalleled reliability and benefits.",
  },
  {
    name: "Gold180",
    cost: 299,
    validityDays: 180,
    description:
      "Quality service, affordability, and 6-months uninterrupted connectivity.",
  },
  {
    name: "Silver90",
    cost: 199,
    validityDays: 90,
    description: "Affordable, reliable, 3-month plan for seamless connectivity",
  },
];
function User() {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch user data when component mounts
    userdata();
  }, [id,userData]); // Re-fetch data when id changes
  const handleSubmit = async (customerId, newPlan) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/customers/change-plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ customerId, newPlan }), // Stringify the body data
        }
      );

      const data = await response.json();
      toast(`your plan is activated ${data.plan.name}`);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const userdata = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId: id }), // Pass the id as customerId
      });

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              User Name- {userData.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              Email: {userData.email}
            </p>
            <p className="mt-1 text-xs font-medium text-gray-600">
              Aadhar - {userData.adharNumber}
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="size-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-pretty font-bold text-sm  text-gray-500">
            Active Plan - {userData.plan?.name}
          </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">
              Plan cost - {userData.plan?.cost}
            </dt>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">
              Mobile No: {userData.assignedMobileNumber}
            </dt>
          </div>
        </dl>
      </a>
      <div className="text-center text-3xl mt-1 font-bold " > Choose Your Plan </div>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
        
        <ToastContainer />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        
          {plans.map((plan, index) => (
            <div
              key={index}
              className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                  {plan.name}
                </h2>
                <p className="mt-2 text-gray-700">{plan.description}</p>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {plan.cost}
                  </strong>
                  <span className="text-sm font-medium text-gray-700">
                    /month
                  </span>
                </p>
                <button
                  className="mt-4 px-4 py-2 rounded bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 focus:outline-none focus:ring"
                  onClick={() => handleSubmit(id, plan)}
                >
                  Activate plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
