import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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

function NewPlans() {
  const navigator = useNavigate()
  const { id } = useParams();
  console.log(id);

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
      setTimeout(() => {
        navigator('/login');
      }, 1000);
      
      
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <ToastContainer />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">{plan.name}</h2>
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
  );
}

export default NewPlans;
