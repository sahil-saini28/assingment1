const plans = [
  {
    name: "Platinum365",
    cost: 499,
    validityDays: 365,
    status: "Active"
  },
  {
    name: "Gold180",
    cost: 299,
    validityDays: 180,
    status: "Active"
  },
  {
    name: "Silver90",
    cost: 199,
    validityDays: 90,
    status: "Active"
  }
];





function NewPlans() {
  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">{plan.name}</h2>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {plan.cost}
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
              <a
                href="#"
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              >
                Get Started
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default NewPlans;
